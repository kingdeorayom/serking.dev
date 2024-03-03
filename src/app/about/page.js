import Link from "next/link";

export default function About() {
    return (
        <main className="flex-auto min-w-0 flex flex-col">
            <section className="flex flex-col gap-y-6">
                <h1 className="font-medium text-2xl tracking-tighter">
                    Thanks for stopping by! &#x1F604;
                </h1>
                <p>
                    I&apos;m Serking and I&apos;ve been doing technology related
                    things since my early teenage years, though I only learned
                    programming when I started college.
                </p>
                <p>Some highlights about me and my activities:</p>
                <p>
                    As a kid, books and video games were my companions, shaping
                    my imagination and fueling my curiosity. The love affair
                    with literature and video gaming started early, creating a
                    parallel universe where stories unfolded in the pages of
                    countless books and games. It was more than a pastime; it
                    was a lifelong love affair with video games and the written
                    word.
                </p>

                <p>
                    I was in my early teenage years when the world of computing
                    opened its doors to me. My journey has been a whirlwind of
                    exploration and innovation: picture a younger version of me,
                    huddled in a local computer shop&apos;s{" "}
                    <Link
                        href="https://en.wikipedia.org/wiki/Pisonet"
                        target="_blank"
                        className="hover:underline"
                    >
                        <strong>
                            <em>pisonet</em>
                        </strong>
                    </Link>
                    , learning the ropes by tinkering with PCs and indulging in
                    a bit of digital mischief (
                    <em>
                        after playing{" "}
                        <Link
                            href="https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City"
                            target="_blank"
                            className="hover:underline"
                        >
                            <strong>
                                <em>Grand Theft Auto: Vice City</em>
                            </strong>
                        </Link>
                        , when my piso credits are low
                    </em>
                    ). It was a wild introduction to computing technology, and I
                    embraced it with the same passion that defined my middle
                    childhood adventures.
                </p>

                <p>
                    Years passed and I found myself tinkering with smartphones
                    and laptops, changing its stock ROM to custom ROMs and
                    changing the OS installed, respectively. I had a lot of fun
                    doing it, making me curious how software worked in general.
                </p>

                <p>
                    It was then that I realized what career I wanted to pursue
                    and so I took <strong>BS Information Technology</strong> in
                    college—and that&apos;s how the journey really started. Now,
                    I am into building PCs and software development.
                </p>

                <p>
                    These days, I spend most of my free time reading books,
                    listening to music, playing video games or watching movies,
                    TV series or anime.
                </p>

                <p>
                    If time permits, I also hang out with my friends and family.
                </p>

                <p>
                    I also have a dog named <strong>Yuko</strong>. A very good
                    partner and companion he is.
                </p>

                <iframe
                    src="https://open.spotify.com/embed/track/17PXXzOygMyXXUNLngVN5u?utm_source=generator"
                    width="100%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-sm"
                />
            </section>
        </main>
    );
}
