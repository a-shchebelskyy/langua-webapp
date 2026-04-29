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
  description: "Online Language Learning for Ukrainians",
  icons: {
    icon: "/images/icon.png",
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
            logoImageUrl: "",
          },
          variables: {
            colorText: "#000000",
            colorPrimary: "#3b82f6",
            colorBackground: "#ffffff",
            colorInputBackground: "#f1f5f9",
            colorInputText: "#000000",
          },
        }}
      >
        <body className={`${inter.className} bg-slate-200`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
