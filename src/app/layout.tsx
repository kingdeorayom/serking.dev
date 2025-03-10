import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { geistSans } from "@/styles/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/providers/theme";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Serking de Orayom",
  description: "Web and mobile app developer",
  openGraph: {
    title: "Serking de Orayom",
    description: "Web and mobile app developer",
    images: [
      {
        url: "https://serking.vercel.app/og.png",
        width: 1200,
        height: 700,
      },
    ],
  },
  twitter: {
    title: "Serking de Orayom",
    description: "Web and mobile app developer",
    images: ["https://serking.vercel.app/og.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`mx-auto flex min-h-screen max-w-2xl flex-col justify-between p-8 leading-relaxed ${geistSans.className} ${geistSans.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="flex-grow pb-20">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
