import { cn } from "@/utils/cn";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import "./globals.css";

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
                    "mx-auto flex min-h-screen max-w-2xl flex-col justify-between px-8 pb-8 pt-16 dark:bg-[#111010] dark:text-white md:px-6",
                    GeistSans.className
                )}
            >
                <header className="pb-10">
                    <Link
                        href="/"
                        className="flex cursor-pointer flex-col space-y-1 hover:opacity-80"
                    >
                        <h1 className="text-2xl font-semibold sm:text-2xl">
                            Serking de Orayom
                        </h1>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">
                            Web and mobile app developer
                        </p>
                    </Link>
                </header>
                <main className="flex-grow">{children}</main>
                <footer className="mt-14 space-y-1 text-center text-xs text-gray-500 dark:text-gray-200">
                    <h6>{`© ${new Date().getFullYear()} Serking de Orayom`}</h6>
                </footer>
                <SpeedInsights />
            </body>
        </html>
    );
}
