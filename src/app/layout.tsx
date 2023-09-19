import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProviders from "@/Providers/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinidocs.ai",
  description: "Infinidocs.ai: Your personal ChatGPT for documents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProviders>
            <main>{children}</main>
          </ThemeProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
