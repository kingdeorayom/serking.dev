import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SessionProvider from "@/providers/session";
import { ThemeProvider } from "@/providers/theme";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { getServerSession } from "next-auth";
import { Geist } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata = {
    title: "Serking de Orayom",
    description:
        "I'm a software developer from the Philippines specializing in building responsive and user-focused applications for web and mobile.",
};

export default async function RootLayout({ children }) {
    const session = await getServerSession();

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "antialiased max-w-3xl min-h-screen flex flex-col mx-auto my-10 px-6 dark:bg-[#111010] dark:text-white",
                    geistSans.className
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <SessionProvider session={session}>
                        <Header />
                        <main className="grow pb-20">{children}</main>
                        <Footer />
                    </SessionProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
