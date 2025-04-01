import { Suspense } from "react";
import Authentication from "@/components/guestbook/auth/Authentication";
import Entries from "@/components/guestbook/Entries";
import Notice from "@/components/guestbook/Notice";

export const metadata = {
    title: "Guestbook - Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function GuestBookPage() {
    return (
        <div className="flex flex-col space-y-6">
            <h1 className="font-medium text-2xl tracking-tighter">
                Sign my guestbook
            </h1>
            <Notice />
            <Suspense>
                <Authentication />
                <Entries />
            </Suspense>
        </div>
    );
}
