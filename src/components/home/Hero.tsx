import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="flex flex-col gap-y-6">
            <h1 className="font-medium text-2xl tracking-tighter">
                Hi, I&apos;m Serking.
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
                    className="border-b border-gray-300 transition-[border-color] hover:border-gray-600 dark:text-white dark:border-gray-500 dark:hover:border-white"
                >
                    Padtech Industries Corporation
                </Link>
                , where I build web and mobile applications.
            </p>
            <p>Take a look around and see what I&apos;m up to.</p>
            {/* <p className="text-xs italic">
                This is both a portfolio and a personal website.
            </p> */}
        </section>
    );
};

export default Hero;
