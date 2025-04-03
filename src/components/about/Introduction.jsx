import Image from "next/image";
// import serkingdeorayom from "/public/images/me/serking-de-orayom-full.jpg";
import serkingdeorayom from "/public/images/me/studio.jpg";

const Introduction = () => {
    return (
        <section className="flex flex-col space-y-6">
            <h1 className="font-bold text-3xl md:text-4xl tracking-tighter">
                {/* Hi, I&apos;m Serking de Orayom. A web and mobile app developer. */}
                Hi, I&apos;m Serking&mdash;software developer, designer, gamer.
            </h1>
            <div className="grid gap-y-10 md:gap-y-0 md:grid-cols-2 py-10">
                <div className="flex items-center md:order-first">
                    <div className="flex flex-col space-y-6 md:text-lg">
                        <p>
                            I'm a software developer from the Philippines
                            specializing in building responsive and user-focused
                            applications for web and mobile.
                        </p>
                        <p>
                            Check my projects and work history to see what I've
                            been working on.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center order-first md:order-last">
                    <Image
                        className="rounded-2xl dark:border dark:border-white/10 h-60 w-60 rotate-2"
                        src={serkingdeorayom}
                        alt="Serking de Orayom"
                    />
                </div>
            </div>
        </section>
    );
};

export default Introduction;
