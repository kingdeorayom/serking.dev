import { GeistSans } from "geist/font/sans";
import { cn } from "@/utils/cn";
import "@/styles/globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/providers/theme";
import { getServerSession } from "next-auth";

import SessionProvider from "@/providers/session";

export const metadata = {
    title: "Serking de Orayom",
    description: "Web and mobile app developer",
    openGraph: {
        title: "Serking de Orayom",
        description: "Web and mobile app developer",
        images: [
            {
                url: "https://serking.dev/og.png",
                width: 1200,
                height: 700,
            },
        ],
    },
    twitter: {
        title: "Serking de Orayom",
        description: "Web and mobile app developer",
        images: ["https://serking.dev/og.png"],
    },
};

export default async function RootLayout({ children }) {
    const session = await getServerSession();

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "max-w-3xl mx-auto my-10 px-6 dark:bg-[#111010] dark:text-white",
                    GeistSans.className
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <SessionProvider session={session}>
                        <Header />
                        <main className="min-h-screen">{children}</main>
                        <Footer />
                    </SessionProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
