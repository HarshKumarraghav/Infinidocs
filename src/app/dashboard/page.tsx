import Dashboard from "@/components/Dashboard/Dashboard";
import { db } from "@/db";
import { getUserSubscriptionPlan } from "@/lib/stripe";
import { auth, clerkClient } from "@clerk/nextjs";

import { redirect } from "next/navigation";
import React from "react";
async function page() {
  const { userId } = auth();
  const user = await clerkClient.users.getUser(userId || "");
  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });
  const subscriptionPlan = await getUserSubscriptionPlan();
  if (!dbUser) redirect("/auth-callback?origin=dashboard");
  return <Dashboard subscriptionPlan={subscriptionPlan} />;
}

export default page;
