import ChatWrapper from "@/components/Chat/ChatWrapper";
import PDFRenderer from "@/components/PDF/PDFRenderer";
import { db } from "@/db";
import { auth, clerkClient } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";
import React from "react";
interface PageProps {
  params: {
    fileid: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { fileid } = params;
  const { userId } = auth();
  const user = await clerkClient.users.getUser(userId || "");

  if (!user || !user.emailAddresses[0].emailAddress)
    redirect(`/auth-callback?origin=dashboard/${fileid}`);

  const file = await db.file.findFirst({
    where: {
      id: fileid,
      userId: user.id,
    },
  });

  if (!file) notFound();

  return (
    <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            {/* Main area where file will be displayed */}
            <PDFRenderer url={file.url} />
          </div>
        </div>

        <div className="shrink-0 flex-[0.75] border-t  lg:w-96 lg:border-l lg:border-t-0">
          <ChatWrapper />
        </div>
      </div>
    </div>
  );
};

export default page;
