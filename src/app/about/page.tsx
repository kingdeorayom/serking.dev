import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function About() {
    return (
        <section className="flex-auto min-w-0 flex flex-col">
            <div className="flex flex-col gap-y-6">
                <h2 className="font-medium text-2xl tracking-tighter">
                    Get to know me more
                </h2>
                <p>
                    I&apos;m Serking and I&apos;ve been doing technology related
                    things since my early teenage years.
                </p>

                <div className="animate-pulse">
                    <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-40"></div>
                </div>

                <h2 className="font-medium text-2xl tracking-tighter">
                    Recent activities
                </h2>

                <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="animate-pulse">
                        <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-40"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-40"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-40"></div>
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla corrupti atque exercitationem incidunt, beatae sit
                    nisi maiores aliquid error, quidem sint odit possimus
                    dolorem nam aperiam. Libero adipisci beatae cupiditate.
                </p>

                <h2 className="font-medium text-2xl tracking-tighter">
                    How it all started
                </h2>

                <p>
                    I was in my early teenage years when the world of computing
                    opened its doors to me.{" "}
                </p>

                <p>
                    My journey has been a whirlwind of exploration: picture a
                    younger version of me, huddled in a local computer
                    shop&apos;s{" "}
                    <Link
                        href="https://en.wikipedia.org/wiki/Pisonet"
                        target="_blank"
                        className="underline sm:no-underline hover:md:underline"
                    >
                        <strong>
                            <em>pisonet</em>
                        </strong>
                    </Link>
                    , learning the ropes by tinkering with PCs and indulging in
                    a bit of digital mischief (after playing{" "}
                    <Link
                        href="https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City"
                        target="_blank"
                        className="underline sm:no-underline hover:md:underline"
                    >
                        <strong>
                            <em>Grand Theft Auto: Vice City</em>
                        </strong>
                    </Link>
                    , when my piso credits are low).
                </p>

                <div className="animate-pulse">
                    <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-40"></div>
                </div>

                <p>
                    It was a wild introduction to computing technology. Years
                    passed and I found myself tinkering with smartphones and
                    laptops, changing its stock ROM to custom ROMs and changing
                    the OS installed, respectively. I had a lot of fun doing it,
                    making me curious how software worked in general.
                </p>

                <p>
                    It was then that I realized what career I wanted to pursue
                    and so I took <strong>BS Information Technology</strong> in
                    college—and that&apos;s how the journey really started.
                </p>

                <p>Now, I am into software development.</p>

                <h2 className="font-medium text-2xl tracking-tighter">
                    Outside of work
                </h2>

                <p>
                    As a kid, books and video games were my companions, shaping
                    my imagination and fueling my curiosity. The love affair
                    with literature and video gaming started early, creating a
                    parallel universe where stories unfolded in the pages of
                    countless books and games. It was more than a pastime; it
                    was a lifelong love affair with video games and the written
                    word.
                </p>

                <div className="animate-pulse">
                    <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-40"></div>
                </div>

                {/* boxing */}
                {/* pokemon */}
                {/* sherlock holmes or my books */}
                {/* outdoor activities */}

                <p>
                    These days, I spend most of my free time reading books,
                    listening to music, playing video games or watching movies,
                    TV series or anime.
                </p>

                <p>
                    If time permits, I also hang out with my friends and family.
                </p>

                {/* <p>
                    I also have a dog named <strong>Yuko</strong>. A very good
                    partner and companion he is.
                </p> */}
            </div>
        </section>
    );
}
