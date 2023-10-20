import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
// import { useCurrent } from "@/hooks/useCurrent";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
