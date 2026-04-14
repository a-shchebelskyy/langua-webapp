import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Langua",
  description: "Online Language Learning",
  icons: {
    icon: "/icons/langua-circle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {

  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/langua-circle.png",
          },
          variables: {
            colorText: "#000000",
            colorPrimary: "#3b82f6",
            colorBackground: "#fafafa",
            colorInputBackground: "#fafafa",
            colorInputText: "#000000",
          },
        }}
      >
        <body className={`${inter.className} bg-slate-200 dark:bg-slate-950`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
