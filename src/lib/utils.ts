import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function absoluteUrl(path: string) {
  if (typeof window !== "undefined") return path;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`;
  return `http://localhost:${process.env.PORT ?? 3000}${path}`;
}

export function constructMetadata({
  title = "Infinidocs - The best way to read your PDFs",
  description = "Infinidocs is a document reader that uses AI to help you read your PDFs",
  image = "/thumbnail.png",
  icons = "/logo/logo.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@_Harsh_raghav_",
    },
    icons,
    metadataBase: new URL("https://infinidocs.vercel.app"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: true,
        follow: true,
      },
    }),
  };
}
