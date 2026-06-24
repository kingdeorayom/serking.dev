import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { STIX_Two_Text } from "next/font/google";
// @ts-expect-error: global CSS side-effect import type declarations are handled by Next.js
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const stixTwoText = STIX_Two_Text({
  variable: "--font-stix-two-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serking de Orayom",
  description:
    "I currently work on digital banking products, where I care a lot about architecture, root-cause debugging, managing multiple project releases, enhancing developer experience, and writing things down so the next person, sometimes future me, isn't lost.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "mx-auto min-h-screen max-w-2xl px-8 sm:px-10 pt-12 md:pt-24 pb-4 antialiased flex flex-1 flex-col space-y-6",
          stixTwoText.className,
          stixTwoText.variable
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
