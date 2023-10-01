import { db } from "@/db";
import { auth, clerkClient } from "@clerk/nextjs";
import { TRPCError } from "@trpc/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  pdfUploader: f({ pdf: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // Check if user is logged in
      const { userId } = auth();
      const user = await clerkClient.users.getUser(userId || "");

      if (!user.id || !user.emailAddresses[0].emailAddress) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Unauthorized",
        });
      }

      return {
        UserId: user.id,
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db.file.create({
        data: {
          key: file.key,
          name: file.name,
          userId: metadata.UserId,
          url: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`,
          uploadStatus: "PROCESSING",
        },
      });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
