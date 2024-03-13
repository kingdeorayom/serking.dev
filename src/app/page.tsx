import Link from "next/link";

export default function Home() {
    return (
        <main>
            <section className="flex flex-col gap-y-6">
                <h1 className="font-medium text-2xl tracking-tighter">
                    Hi, I&apos;m Serking &#x1F44B;
                </h1>
                <p>
                    I&apos;m a software developer focusing on web and mobile
                    applications.
                </p>
                <p>
                    I earned my bachelor&apos;s degree in Information Technology
                    at the{" "}
                    <Link
                        href="https://www.uphsl.edu.ph/"
                        title="Visit site"
                        target="_blank"
                        className="font-medium hover:underline"
                    >
                        University of Perpetual Help System Laguna
                    </Link>{" "}
                    with an academic honor of distinction:{" "}
                    <em>Magna Cum Laude</em>.
                </p>
                <p>Poke around and see what I&apos;m up to.</p>
            </section>
        </main>
    );
}
