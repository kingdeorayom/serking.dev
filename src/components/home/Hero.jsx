import Link from "next/link";

const Hero = () => {
    return (
        <section className="flex flex-col gap-y-6">
            <div className="space-y-1">
                <h1 className="font-semibold text-2xl sm:text-2xl">
                    {/* Hi, I&apos;m Serking. */}
                    Serking de Orayom
                </h1>

                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {/* I&apos;m a software developer focusing on web and mobile
                applications. */}
                    Web and mobile app developer
                </p>
            </div>
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
            {/* <p>Take a look around and see what I&apos;m up to.</p> */}

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

            {/* <p className="text-xs">
                This is both a portfolio and a personal website.
            </p> */}
        </section>
    );
};

export default Hero;
