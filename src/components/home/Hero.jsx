import Avatar from "../ui/Avatar";

const Hero = () => {
    return (
        <section className="flex flex-col space-y-8">
            <Avatar className="h-16 w-16" />
            <div className="flex flex-col space-y-6">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Hi, I&apos;m Serking&mdash;software engineer &amp; UI/UX
                    designer.
                </h1>
                <p>
                    I&apos;m a software engineer from the Philippines
                    specializing in building websites with{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500">
                        React
                    </span>{" "}
                    and{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500">
                        Next.js
                    </span>{" "}
                    for frontend,{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500">
                        React Native
                    </span>{" "}
                    with{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500">
                        Expo SDK
                    </span>{" "}
                    for mobile applications and{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500">
                        Laravel
                    </span>{" "}
                    and{" "}
                    <span className="border-b border-dashed border-neutral-400 dark:border-neutral-500">
                        MySQL{" "}
                    </span>
                    for the backend.
                </p>
                {/* <p>Check my works below.</p> */}
            </div>
        </section>
    );
};

export default Hero;
