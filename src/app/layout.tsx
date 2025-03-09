import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { geistSans } from "@/styles/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "../styles/globals.css";

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`mx-auto flex min-h-screen max-w-2xl flex-col justify-between px-8 pb-8 pt-16 md:px-6 dark:bg-[#111010] dark:text-white ${geistSans.className} ${geistSans.variable} antialiased`}
            >
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
                <SpeedInsights />
            </body>
        </html>
    );
}
