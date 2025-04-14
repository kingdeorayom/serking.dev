import Link from "next/link";

const Career = () => {
    return (
        <section className="flex flex-col space-y-6">
            <h2 className="text-xl font-semibold tracking-tighter">
                My interest in tech
            </h2>
            <p>
                I was in my early teenage years when the world of computing
                opened its doors to me.{" "}
            </p>
            <p>
                Picture a younger version of me huddled in a local computer
                shop&apos;s{" "}
                <Link
                    href="https://en.wikipedia.org/wiki/Pisonet"
                    target="_blank"
                    className="hovered-link italic"
                >
                    pisonet
                </Link>
                , learning the ropes by tinkering with PCs and doing a bit of
                "digital mischief" by exploring the Windows system and sometimes
                actually causing trouble to the pisonet's owner. That&apos;s
                after playing{" "}
                <Link
                    href="https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City"
                    target="_blank"
                    className="hovered-link"
                >
                    Grand Theft Auto: Vice City
                </Link>
                , when my piso credits are low.
            </p>
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
        </section>
    );
};

export default Career;
