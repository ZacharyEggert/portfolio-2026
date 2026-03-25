import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "@/app/_components/Header";
import WrapPageWithSidebar from "./_components/WrapPageWithSidebar";
import Providers from "./_components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sales Dashboard",
  description: "A sales dashboard built with Next.js and Tailwind CSS.",
  creator: "Zachary E. @ex-nihilo",
  publisher: "ex nihilo llc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>
          <Header />
          <WrapPageWithSidebar>{children}</WrapPageWithSidebar>
        </Providers>
      </body>
    </html>
  );
}
