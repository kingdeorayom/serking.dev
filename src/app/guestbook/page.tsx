import { Suspense } from "react";
import type { Metadata } from "next";
import GuestbookForm from "@/components/guestbook/GuestbookForm";
import Entries from "@/components/guestbook/Entries";

export const metadata: Metadata = {
    title: "Guestbook | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function GuestBookPage() {
    return (
        <section className="flex flex-col gap-y-6">
            <h1 className="font-medium text-2xl tracking-tighter">
                Sign my guestbook
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-300">
                Be nice and avoid any harsh words that may be offensive for
                someone.
            </p>
            <Suspense>
                <GuestbookForm />
                <Entries />
            </Suspense>
        </section>
    );
}
