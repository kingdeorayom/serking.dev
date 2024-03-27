import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Activity | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default async function ActivityPage() {
    return (
        <section className="flex flex-col gap-y-6">
            <h1 className="font-medium text-2xl tracking-tighter">
                Coming soon
            </h1>
        </section>
    );
}
