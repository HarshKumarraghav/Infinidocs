import "./globals.css";
import type { Metadata } from "next";
import ThemeProviders from "@/Providers/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "./Provider";

// SimpleBar CSS and PDFJS CSS
import "react-loading-skeleton/dist/skeleton.css";
import "simplebar-react/dist/simplebar.min.css";

import { TopLoaderOptions } from "@/utils/Constant";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "infinidocs.ai",
  description: "infinidocs.ai: Your personal ChatGPT for documents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo/logo.png" />
        </head>
        <body suppressHydrationWarning={true}>
          <NextTopLoader {...TopLoaderOptions} />
          <Providers>
            <ThemeProviders>
              <Toaster />
              <Navbar />
              <main>{children}</main>
            </ThemeProviders>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
