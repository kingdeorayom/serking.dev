import Image from "next/image";
import serkingdeorayom from "/public/images/me/serking-de-orayom-full.jpg";

const Introduction = () => {
    return (
        <section className="flex flex-col space-y-6">
            <h1 className="font-medium text-2xl tracking-tighter">
                Hi, I&apos;m Serking de Orayom. A web and mobile app developer.
            </h1>
            <div className="flex items-center justify-start py-5">
                <Image
                    className="rounded-2xl dark:border dark:border-white/10 h-52 w-52"
                    src={serkingdeorayom}
                    alt="Serking de Orayom"
                />
            </div>
            <p>
                I'm a software developer from the Philippines specializing in
                building responsive and user-focused applications for web and
                mobile. Check my projects and work history to see what I've been
                working on.
            </p>
        </section>
    );
};

export default Introduction;
