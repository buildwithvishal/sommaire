import type { Metadata } from "next";
import { Source_Sans_3 as FontSans, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sommaire - AI-powered PDF Summarization",
  description:
    "Save hours of reading time, Transform lengthy PDFs into clear, accurate summaries in seconds with our advanced AI technology.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
