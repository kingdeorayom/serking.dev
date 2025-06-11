const Blockquote = () => {
    return (
        <section className="flex flex-col space-y-8">
            <blockquote className="font-serif text-xl italic">
                <svg
                    className="mb-4 h-8 w-8 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <p>
                    {/* I&apos;m not here to rewrite the past or rush the future. No
                    promises, no expectations. */}
                    There are days I forget how to say things right, so
                    I&apos;ll let these pictures speak a little for me. Just a
                    simple gift, left where you can find it. If even one of them
                    made you feel remembered or made you smile, then that&apos;s
                    more than enough for me.
                </p>

                {/* <p className="mt-5">
                    And if in case you ever wonder if you mattered. You did. You
                    still do.
                </p> */}

                <p className="mt-5">I&apos;m coming home.</p>
            </blockquote>

            <blockquote className="font-serif text-xl italic">
                <p>&ndash; Serking</p>
            </blockquote>
        </section>
    );
};

export default Blockquote;
