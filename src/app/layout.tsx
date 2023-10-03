import "./globals.css";
import type { Metadata } from "next";
import ThemeProviders from "@/Providers/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "./Provider";
import { dark } from "@clerk/themes";
// SimpleBar CSS and PDFJS CSS
import "react-loading-skeleton/dist/skeleton.css";
import "simplebar-react/dist/simplebar.min.css";

import { TopLoaderOptions } from "@/utils/Constant";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Infinidocs",
  description: "Infinidocs: Your personal ChatGPT for documents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          footerActionLink: "text-primary hover:text-primary/90",
          card: "shadow-xl rounded-xl bg-primary-foreground",
          headerTitle: "text-primary font-semibold",
          headerSubtitle: "dark:text-white text-gray-500",
          formButtonPrimary:
            "bg-primary hover:bg-primary/90 text-sm normal-case",
          socialButtonsBlockButton:
            "bg-primary hover:bg-primary/90 text-sm normal-case text-white",
          dividerLine: "dark:bg-white bg-gray-500",
          dividerText: "dark:text-white text-gray-500",
          formFieldLabel: "dark:text-white text-gray-500",
          footerActionText: "dark:text-white text-gray-500",
          formFieldInput: "dark:bg-slate-800 bg-slate-100",
          formFieldInputShowPasswordIcon: "dark:text-white text-gray-500",
        },
      }}
    >
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
