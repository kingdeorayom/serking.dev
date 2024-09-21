import { Suspense } from "react";
import Authentication from "@/components/guestbook/auth/Authentication";
import Entries from "@/components/guestbook/Entries";
import Notice from "@/components/guestbook/Notice";

export const metadata = {
    title: "Guestbook | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function GuestBookPage() {
    return (
        <section className="flex flex-col gap-y-6">
            <h2 className="font-medium text-2xl tracking-tighter">
                Sign my guestbook
            </h2>
            {/* <p>Whatever you want to say</p> */}
            <Notice />
            <Suspense>
                <Authentication />
                <Entries />
            </Suspense>
        </section>
    );
}
