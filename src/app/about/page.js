import Link from "next/link";

export const metadata = {
    title: "About | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function About() {
    return (
        <main className="flex-auto min-w-0 flex flex-col">
            <section className="flex flex-col gap-y-6">
                <h1 className="font-medium text-2xl tracking-tighter">
                    Lorem ipsum dolor sit amet about &#x1F604;
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    fugiat quia totam. Blanditiis hic dolores voluptates
                    distinctio suscipit veniam quis. Perferendis, ut quibusdam
                    suscipit assumenda tempora aliquam ad laudantium pariatur?
                </p>

                <iframe
                    src="https://open.spotify.com/embed/track/7eT64Q8X2RsgMm4lqtWK4n?utm_source=generator"
                    width="100%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-sm"
                />
            </section>
        </main>
    );
}
