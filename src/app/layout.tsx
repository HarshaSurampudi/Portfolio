import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { CodeIcon } from "@/components/ui/codeicon";
import Footer from "@/components/Footer";
import data from "@/data.json";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-[100dvh]">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="#">
              <CodeIcon className="h-6 w-6" />
              <span className="sr-only">Generative AI Research Engineer</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#about"
              >
                About
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#projects"
              >
                Projects
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#experience"
              >
                Experience
              </Link>
            </nav>
          </header>
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
