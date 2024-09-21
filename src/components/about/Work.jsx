import Link from "next/link";

const Work = () => {
    return (
        <>
            <h2 className="font-medium text-xl tracking-tighter">
                How it started
            </h2>

            <p>
                I was in my early teenage years when the world of computing
                opened its doors to me.{" "}
            </p>

            <p>
                My journey has been a whirlwind of exploration: picture a
                younger version of me, huddled in a local computer shop&apos;s{" "}
                <Link
                    href="https://en.wikipedia.org/wiki/Pisonet"
                    target="_blank"
                    className="hovered-link italic"
                >
                    pisonet
                </Link>
                , learning the ropes by tinkering with PCs and indulging in a
                bit of digital mischief (after playing{" "}
                <Link
                    href="https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City"
                    target="_blank"
                    className="hovered-link italic"
                >
                    Grand Theft Auto: Vice City
                </Link>
                , when my piso credits are low).
            </p>

            {/* <div className="animate-pulse">
                <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-40"></div>
            </div> */}

            <p>
                It was a wild introduction to computing technology. Years passed
                and I found myself tinkering with smartphones and laptops,
                changing its stock ROM to custom ROMs and changing the OS
                installed, respectively. I had a lot of fun doing it, making me
                curious how software worked in general.
            </p>

            <p>
                It was then that I realized what career I wanted to pursue and
                so I took BS Information Technology in college.
            </p>

            <p>Now, I am into software development.</p>
        </>
    );
};

export default Work;
