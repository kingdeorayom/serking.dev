import Message from "@/components/guestbook/Message";
import type { Metadata } from "next";
import { FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Guestbook | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default async function GuestBookPage() {
    return (
        <section className="flex flex-col gap-y-6">
            <h1 className="font-medium text-2xl tracking-tighter">
                Sign my guestbook
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-300">
                If you&apos;re leaving a message here, remember it&apos;s
                public. Be nice and avoid any harsh words that may be offensive
                for someone. Keep it positive and considerate.
            </p>
            <div>
                <button className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-slate-50 hover:bg-slate-100 dark:bg-neutral-900 hover:dark:hover:bg-neutral-800 rounded text-sm flex items-center leading-4 text-neutral-900 dark:text-neutral-100">
                    <FaGithub size={20} />
                    <div className="ml-3">Sign in with GitHub</div>
                </button>
            </div>
            <div className="space-y-4">
                <Message />
                <Message />
                <Message />
            </div>
        </section>
    );
}
