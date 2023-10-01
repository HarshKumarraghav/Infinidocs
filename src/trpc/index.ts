import { TRPCError } from "@trpc/server";
import { publicProcedure, privateProcedure, router } from "./trpc";
import { auth, clerkClient } from "@clerk/nextjs";
import { db } from "@/db";
import { z } from "zod";
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
  getFile: privateProcedure
    .input(z.object({ key: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const file = await db.file.findFirst({
        where: {
          key: input.key,
          userId,
        },
      });

      if (!file) throw new TRPCError({ code: "NOT_FOUND" });

      return file;
    }),
  deleteFile: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;
      const { id } = input;

      const file = await db.file.findFirst({
        where: {
          id,
        },
      });

      if (!file) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "File not found",
        });
      }

      await db.file.delete({
        where: {
          id,
        },
      });

      return { success: true };
    }),
});
export type AppRouter = typeof appRouter;
