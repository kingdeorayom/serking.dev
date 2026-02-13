import Image from "next/image";
import React from "react";
import sie_1 from "../../../public/images/shiela/sie_1.jpg";

const Introduction = () => {
    return (
        <section className="flex flex-col space-y-8">
            {/* <p>February 14, 2026</p> */}
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Beautiful, Just Like That
            </h1>
            <Image
                alt="gallery"
                className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                src={sie_1}
            />

            <p>
                Hi Babe! This might be a small page, pero it holds a big part of
                what I feel. I just wanted to appreciate you&mdash;in some of
                the ways I know how, so ginawa ko ito.
            </p>

            {/* <h2 className="font-serif text-2xl tracking-tighter">
                Some moments are too good not to remember. Who knows, maybe
                we'll look back at these and smile, or maybe we&apos;ll just
                feel grateful for having experienced them. Either way, I hope
                these memories bring you as much joy as they do to me.
            </h2> */}

            <p>
                Some moments are too good not to remember. Who knows, maybe
                we'll look back at these and smile, or maybe we&apos;ll just
                feel grateful for having experienced them.
            </p>

            <p>
                Either way, I hope these memories bring you as much joy as they
                do to me.
            </p>
        </section>
    );
};

export default Introduction;
