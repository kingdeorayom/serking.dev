import Link from "next/link";

const Hero = () => {
    return (
        <section className="flex flex-col space-y-6">
            <h1 className="font-medium text-2xl tracking-tighter">
                Hi, I&apos;m Serking.
            </h1>
            <p>
                I&apos;m a software developer specializing in{" "}
                <span className="border-b border-dashed">React</span> and{" "}
                <span className="border-b border-dashed">Next.js</span> for
                frontend development,{" "}
                <span className="border-b border-dashed">React Native</span> and{" "}
                <span className="border-b border-dashed">Expo SDK</span> for
                mobile applications and{" "}
                <span className="border-b border-dashed">Laravel</span> and{" "}
                <span className="border-b border-dashed">MySQL</span> for the
                backend.
            </p>
            <p>
                Recently, I worked as a frontend developer at{" "}
                <Link
                    href="https://padtechcorp.com/"
                    title="Visit site"
                    target="_blank"
                    className="hovered-link"
                >
                    Padtech Industries Corporation
                </Link>
                , where I played a key role in building responsive interfaces,
                integrating backend functionality, optimizing performance, and
                migrating legacy code to modern frameworks.
            </p>
        </section>
    );
};

export default Hero;
