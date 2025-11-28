import { OpenAIStream, StreamingTextResponse } from "ai";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { NextRequest } from "next/server";

import { db } from "@/db";
import { openai } from "@/lib/openai";
import { getPineconeClient } from "@/lib/Pinecone";
import { SendMessageValidator } from "@/lib/Validators/SendMessageValidator";
import { auth, clerkClient } from "@clerk/nextjs";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { userId } = auth();
  const user = await clerkClient.users.getUser(userId || "");
  if (!user.id || !user.emailAddresses[0].emailAddress)
    return new Response("Unauthorized", { status: 401 });

  const { fileId, message } = SendMessageValidator.parse(body);

  const file = await db.file.findFirst({
    where: { id: fileId, userId: user.id },
  });

  if (!file) return new Response("not found!", { status: 404 });

  await db.message.create({
    data: {
      text: message,
      isUserMessage: true,
      userId: user.id,
      fileId: file.id,
    },
  });

  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
    model: "text-embedding-3-small",
    dimensions: 1024,
  });
  const pinecone = await getPineconeClient();
  // vectorize the page level docs
  const PineconeIndex = pinecone.index("infinidocs-app");

  const vectorstores = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex: PineconeIndex,
    namespace: file.id,
  });

  const results = await vectorstores.similaritySearch(message, 4);
  const prevMessages = await db.message.findMany({
    where: { fileId: file.id },
    orderBy: { createdAt: "asc" },
    take: 6,
  });

  const formatedMessages = prevMessages.map((message) => {
    return {
      role: message.isUserMessage ? ("user" as const) : ("assistant" as const),
      content: message.text,
    };
  });
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 1,
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format.",
      },
      {
        role: "user",
        content: `Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format. \nIf you don't know the answer, just say that you don't know, don't try to make up an answer.
        
  \n----------------\n
  
  PREVIOUS CONVERSATION:
  ${formatedMessages.map((message) => {
    if (message.role === "user") return `User: ${message.content}\n`;
    return `Assistant: ${message.content}\n`;
  })}
  
  \n----------------\n
  
  CONTEXT:
  ${results.map((r) => r.pageContent).join("\n\n")}
  
  USER INPUT: ${message}`,
      },
    ],
  });
  const stream = OpenAIStream(response, {
    async onCompletion(completion) {
      await db.message.create({
        data: {
          text: completion,
          isUserMessage: false,
          fileId,
          userId,
        },
      });
    },
  });

  return new StreamingTextResponse(stream);
};
