import Link from "next/link";

const Hero = () => {
    return (
        <section className="flex flex-col gap-y-6">
            <p>
                I currently work as a frontend developer at{" "}
                <Link
                    href="https://padtechcorp.com/"
                    title="Visit site"
                    target="_blank"
                    className="hovered-link"
                >
                    Padtech Industries Corporation
                </Link>
                , where I build web and mobile applications.
            </p>
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
                If you want to dive into more personal details, it&apos;s{" "}
                <Link href="/about" title="About me" className="hovered-link">
                    here
                </Link>
                .
            </p>
        </section>
    );
};

export default Hero;
