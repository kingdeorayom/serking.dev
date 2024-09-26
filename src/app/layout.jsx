import { SpeedInsights } from "@vercel/speed-insights/next";

import { GeistSans } from "geist/font/sans";
import { cn } from "@/utils/cn";
import "@/styles/globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/providers/theme";

export const metadata = {
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

export default async function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "max-w-2xl mx-auto pt-16 pb-8 px-6 dark:bg-[#111010] dark:text-white min-h-screen flex flex-col justify-between",
                    GeistSans.className
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                >
                    <Header />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                    <SpeedInsights />
                </ThemeProvider>
            </body>
        </html>
    );
}
