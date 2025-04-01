import Image from "next/image";
import serkingdeorayom from "/public/images/me/serking-de-orayom-full.jpg";

const Introduction = () => {
    return (
        <section className="flex flex-col space-y-6">
            <h1 className="font-medium text-2xl tracking-tighter">
                Hi, I&apos;m Serking de Orayom. A web and mobile app developer.
            </h1>
            <div className="grid gap-y-10 md:gap-y-0 md:grid-cols-2 py-10">
                <div className="flex items-center md:order-first">
                    <p>
                        I'm a software developer from the Philippines
                        specializing in building responsive and user-focused
                        applications for web and mobile. Check my projects and
                        work history to see what I've been working on.
                    </p>
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
