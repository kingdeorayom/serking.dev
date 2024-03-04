import Gallery from "@/components/Gallery";
import Social from "@/components/Social";
import Works from "@/components/Works";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex-auto min-w-0 flex flex-col">
            <section className="flex flex-col gap-y-6">
                <h1 className="font-medium text-2xl tracking-tighter">
                    Hi, I&apos;m Serking &#x1F44B;
                </h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae dolores, debitis laudantium perspiciatis at ab,
                    dolorem quibusdam neque officia ad a eius.
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </section>
            <Gallery />
            <Works />
            <Social />
        </main>
    );
}
