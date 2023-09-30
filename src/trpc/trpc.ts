import { auth, clerkClient } from "@clerk/nextjs";
import { TRPCError, initTRPC } from "@trpc/server";
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
const middleware = t.middleware;
const isAuth = middleware(async (opts) => {
  const { userId } = auth();
  const user = await clerkClient.users.getUser(userId || "");

  if (!user.id || !user.emailAddresses[0].emailAddress) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Unauthorized",
    });
  }
  return opts.next({
    ctx: {
      userId: user.id,
      user,
    },
  });
});
export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
