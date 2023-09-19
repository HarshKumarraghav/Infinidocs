"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
interface ProviderProps {
  children: ReactNode;
}
export default function ThemeProviders({ children }: ProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
}
