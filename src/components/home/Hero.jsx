import Avatar from "../ui/Avatar";

const Hero = () => {
    return (
        <section className="flex flex-col space-y-8">
            <Avatar className="h-16 w-16" />
            <div className="flex flex-col space-y-6">
                <h1 className="font-semibold md:font-bold text-3xl md:text-4xl tracking-tighter">
                    Hi, I&apos;m Serking&mdash;software developer, designer,
                    gamer.
                </h1>
                <p>
                    I&apos;m a software developer from the Philippines
                    specializing in{" "}
                    <span className="border-b border-dashed">React</span> and{" "}
                    <span className="border-b border-dashed">Next.js</span> for
                    frontend development,{" "}
                    <span className="border-b border-dashed">React Native</span>{" "}
                    and <span className="border-b border-dashed">Expo SDK</span>{" "}
                    for mobile applications and{" "}
                    <span className="border-b border-dashed">Laravel</span> and{" "}
                    <span className="border-b border-dashed">MySQL</span> for
                    the backend.
                </p>
            </div>
        </section>
    );
};

export default Hero;
