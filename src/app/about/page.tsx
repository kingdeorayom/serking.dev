import Tabs from "@/components/about/Tabs";
import type { Metadata } from "next";

import Introduction from "@/components/about/Introduction";
import BackButton from "@/components/ui/BackButton";

export const metadata: Metadata = {
    title: "About | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function AboutPage() {
    return (
        <section className="flex-auto min-w-0 flex flex-col">
            <div className="flex flex-col gap-y-6">
                <BackButton />
                <Introduction />
                <Tabs />
            </div>
        </section>
    );
}
