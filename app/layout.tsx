import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { STIX_Two_Text } from "next/font/google";
import "./globals.css";

const stixTwoText = STIX_Two_Text({
  variable: "--font-stix-two-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serking de Orayom",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "mx-auto min-h-screen max-w-2xl px-10 pt-12 md:pt-24 pb-4 antialiased flex flex-1 flex-col space-y-6",
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
