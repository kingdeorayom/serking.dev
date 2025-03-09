import CopyToClipboard from "@/components/CopyToClipboard";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <section className="mb-8 flex flex-col gap-y-6">
                <p>I&apos;m a software developer based in Philippines, building responsive user interfaces and delivering products to users with React, TypeScript, and Tailwind CSS.</p>
                {/* <p>
                    I worked as a frontend developer at{" "}
                    <Link
                        href="https://padtechcorp.com/"
                        title="Visit site"
                        target="_blank"
                        className="hovered-link"
                    >
                        Padtech Industries Corporation
                    </Link>
                    , where I built web and mobile applications.
                </p> */}
                <p>
                    
                    Learn about my works and projects{" "}
                    <Link
                        href="/work"
                        title="View my works"
                        className="hovered-link"
                    >
                        here
                    </Link>
                    .
                </p>
                <p className="text-[13px]">
                    If you want to dive into personal details, it&apos;s{" "}
                    <Link
                        href="/about"
                        title="About me"
                        className="hovered-link"
                    >
                        here
                    </Link>
                    .
                </p>
            </section>
            <CopyToClipboard />
        </>
    );
}
