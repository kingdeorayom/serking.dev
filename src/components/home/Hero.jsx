import Link from "next/link";

const Hero = () => {
    return (
        <section className="flex flex-col gap-y-6">
            <h1 className="font-medium text-2xl tracking-tighter">
                Hi, I&apos;m Serking
            </h1>

            <p>
                I&apos;m a software developer focusing on web and mobile
                applications.
            </p>
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
            <p>Take a look around and see what I&apos;m up to.</p>

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
