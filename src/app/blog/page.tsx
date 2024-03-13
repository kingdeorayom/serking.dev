import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function Blog() {
    return (
        <section className="flex-auto min-w-0 flex flex-col">
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                Coming soon! &#x1F51C;
            </h1>
        </section>
    );
}
