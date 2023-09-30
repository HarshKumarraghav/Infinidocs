import { auth, clerkClient } from "@clerk/nextjs";
import { clients } from "@clerk/nextjs/api";
import React from "react";
async function page() {
  const { userId } = auth();
  const user = await clerkClient.users.getUser(userId || "");
  if (!userId) {
    return null;
  }
  return <div>user:{user?.firstName}</div>;
}

export default page;
