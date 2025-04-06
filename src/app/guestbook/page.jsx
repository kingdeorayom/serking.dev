import Authentication from "@/components/guestbook/auth/Authentication";
import Entries from "@/components/guestbook/Entries";
import Notice from "@/components/guestbook/Notice";

export const metadata = {
    title: "Guestbook - Serking de Orayom",
    description: "Software Engineer & UI/UX designer",
};

export default function GuestBookPage() {
    return (
        <div className="flex flex-col space-y-6">
            <h1 className="text-2xl font-semibold tracking-tighter">
                Sign my guestbook
            </h1>
            <Notice />
            <Authentication />
            <Entries />
        </div>
    );
}
