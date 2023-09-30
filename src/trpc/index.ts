import { TRPCError } from "@trpc/server";
import { publicProcedure, privateProcedure, router } from "./trpc";
import { auth, clerkClient } from "@clerk/nextjs";
import { db } from "@/db";

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { userId } = auth();
    const user = await clerkClient.users.getUser(userId || "");

    if (!user.id || !user.emailAddresses[0].emailAddress) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Unauthorized",
      });
    }
    const dbUser = await db.user.findFirst({
      where: {
        id: user.id,
      },
    });
    console.log("dbUser", dbUser);
    if (!dbUser) {
      await db.user.create({
        data: {
          id: user.id,
          email: user.emailAddresses[0].emailAddress,
        },
      });
    }
    return { success: true };
  }),
  getUserFiles: privateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;

    return await db.file.findMany({
      where: {
        userId: userId,
      },
    });
  }),
});
export type AppRouter = typeof appRouter;
