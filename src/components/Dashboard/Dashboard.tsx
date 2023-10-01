"use client";

import React, { useState } from "react";
import UploadButton from "../Upload/UploadButton";
import { trpc } from "@/app/_trpc/client";
import { Ghost, Loader2, MessageSquare, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { format } from "date-fns";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Link from "next/link";
import { Card } from "../ui/card";
const Dashboard = () => {
  const [currentlyDeletingFile, setCurrentlyDeletingFile] = useState<
    string | null
  >(null);
  const utils = trpc.useContext();

  const { data: files, isLoading } = trpc.getUserFiles.useQuery();
  const { mutate: deleteFile } = trpc.deleteFile.useMutation({
    onSuccess: () => {
      utils.getUserFiles.invalidate();
    },
    onMutate({ id }) {
      setCurrentlyDeletingFile(id);
    },
    onSettled() {
      setCurrentlyDeletingFile(null);
    },
  });
  return (
    <main className="mx-auto max-w-7xl md:p-10 p-4">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl ">My Files</h1>
        <UploadButton />
      </div>
      {/* display all user files */}
      {files && files?.length !== 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3 p-2">
          {files
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((file) => (
              <Card
                key={file.id}
                className="col-span-1 divide-y rounded-lg bg-primary-foreground shadow transition hover:shadow-lg"
              >
                <Link
                  href={`/dashboard/${file.id}`}
                  className="flex flex-col gap-2"
                >
                  <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-300 to-purple-500" />
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-lg font-medium ">
                          {file.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs ">
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    {format(new Date(file.createdAt), "MMM yyyy")}
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                  </div>

                  <Button
                    onClick={() => deleteFile({ id: file.id })}
                    size="sm"
                    className="w-full"
                    variant="destructive"
                  >
                    {currentlyDeletingFile === file.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </Card>
            ))}
        </ul>
      ) : isLoading ? (
        <div className="mx-auto max-w-7xl md:p-10 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2">
          <Ghost className="h-8 w-8 text-primary" />
          <h3 className="font-semibold text-xl">
            The area seems quite deserted.{" "}
          </h3>
          <p>How about we proceed with uploading your first PDF?</p>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
