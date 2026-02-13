import Image from "next/image";
import Link from "next/link";
import sie_10 from "../../../public/images/shiela/sie_10.jpg";
import sie_11 from "../../../public/images/shiela/sie_11.jpg";
import sie_12 from "../../../public/images/shiela/sie_12.jpg";
import sie_13 from "../../../public/images/shiela/sie_13.jpg";
import sie_14 from "../../../public/images/shiela/sie_14.jpg";
import sie_15 from "../../../public/images/shiela/sie_15.jpg";
import sie_16 from "../../../public/images/shiela/sie_16.jpg";
import sie_18 from "../../../public/images/shiela/sie_18.jpg";
import sie_19 from "../../../public/images/shiela/sie_19.jpg";
import sie_2 from "../../../public/images/shiela/sie_2.jpg";
import sie_20 from "../../../public/images/shiela/sie_20.jpg";
import sie_23 from "../../../public/images/shiela/sie_23.jpg";
import sie_30 from "../../../public/images/shiela/sie_30.jpg";
import sie_31 from "../../../public/images/shiela/sie_31.jpg";
import sie_32 from "../../../public/images/shiela/sie_32.jpg";
import sie_33 from "../../../public/images/shiela/sie_33.jpg";
import sie_34 from "../../../public/images/shiela/sie_34.jpg";
import sie_4 from "../../../public/images/shiela/sie_4.jpg";
import sie_41 from "../../../public/images/shiela/sie_41.jpg";
import sie_5 from "../../../public/images/shiela/sie_5.jpg";
import sie_6 from "../../../public/images/shiela/sie_6.jpg";

const Memories = () => {
    return (
        <section className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-8">
                <div className="py-5">
                    <section className="py-2">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_11.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_11}
                                        />
                                    </Link>
                                </div>
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_20.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_20}
                                        />
                                    </Link>
                                </div>
                                <div className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_15.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_15}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_13.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_13}
                                        />
                                    </Link>
                                </div>
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_16.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_16}
                                        />
                                    </Link>
                                </div>
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_10.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_10}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="flex flex-col space-y-3 text-center font-serif text-slate-700 italic sm:text-lg md:space-y-3 dark:border-neutral-700 dark:text-slate-200">
                    <p>At times I just don't know</p>
                    <p>How you could be anything but beautiful</p>
                    <p>Think that I was made for you</p>
                    <p>And you were made for me</p>
                </div>

                {/* <div className="py-5">
                    <section className="py-2">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={a1.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={a1}
                                        />
                                    </Link>
                                </div>
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={a2.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={a2}
                                        />
                                    </Link>
                                </div>
                                <div className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={a3.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={a3}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={a4.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={a4}
                                        />
                                    </Link>
                                </div>
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={a1.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={a1}
                                        />
                                    </Link>
                                </div>
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={a2.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={a2}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="flex flex-col space-y-3 text-center font-serif text-slate-700 italic sm:text-lg md:space-y-3 dark:border-neutral-700 dark:text-slate-200">
                    <p>And I know that I won't ever change</p>
                    <p>'Cause we've been friends</p>
                    <p>Through rain or shine</p>
                    <p>For such a long, long time</p>
                </div> */}

                <div className="py-5">
                    <section className="py-2">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_23.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_23}
                                        />
                                    </Link>
                                </div>
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_6.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_6}
                                        />
                                    </Link>
                                </div>
                                <div className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_14.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_14}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_31.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_31}
                                        />
                                    </Link>
                                </div>
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_4.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_4}
                                        />
                                    </Link>
                                </div>
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_2.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_2}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="flex flex-col space-y-3 text-center font-serif text-slate-700 italic sm:text-lg md:space-y-3 dark:border-neutral-700 dark:text-slate-200">
                    <p>Laughing eyes and smiling face</p>
                    <p>It seems so lucky just to have the right</p>
                    <p>Of telling you with all my might</p>
                    <p>You're beautiful tonight</p>
                </div>

                <div className="py-5">
                    <section className="py-2">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_32.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_32}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_18.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_18}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="flex flex-col space-y-3 text-center font-serif text-slate-700 italic sm:text-lg md:space-y-3 dark:border-neutral-700 dark:text-slate-200">
                    <p>And when you hold me tight</p>
                    <p>How could life be anything but beautiful?</p>
                    <p>Think that I was made for you</p>
                    <p>And you were made for me</p>
                </div>

                <div className="py-5">
                    <section className="py-2">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_5.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_5}
                                        />
                                    </Link>
                                </div>
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_12.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_12}
                                        />
                                    </Link>
                                </div>
                                <div className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_19.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_19}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_33.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_33}
                                        />
                                    </Link>
                                </div>
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_34.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_34}
                                        />
                                    </Link>
                                </div>
                                <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                                    <Link href={sie_30.src} target="_blank">
                                        <Image
                                            alt="gallery"
                                            className="block h-full w-full rounded object-cover object-center md:rounded-2xl"
                                            src={sie_30}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="flex flex-col space-y-3 text-center font-serif text-slate-700 italic sm:text-lg md:space-y-3 dark:border-neutral-700 dark:text-slate-200">
                    <p>And I must say it means so much to me</p>
                    <p>To be the one who's telling you</p>
                    <p>I'm telling you</p>
                    <p>That you're beautiful</p>
                </div>
            </div>

            {/* <Image
                alt="gallery"
                className="block h-full w-1/4 rounded object-cover object-center md:rounded-2xl"
                src={sie_7}
            /> */}

            <div className="flex flex-col space-y-5 py-6">
                <p>
                    I gathered these pictures because they are attached to the
                    memories na palaging nagpapaalala sa akin sa iyo,&apos;yung
                    mga ngiti mo, &apos;yung pagtingin mo, the warmth, your
                    light, &apos;yung tawa mo, the way you show up even when you
                    don&apos;t know it.
                </p>

                <p>
                    I guess I just wanted to cherish these little pieces,
                    somehow. Hindi dahil they&apos;re perfect shots, but because
                    they&apos;re you. And maybe that&apos;s all they ever needed
                    to be.
                </p>

                <p>
                    At Shiela, baby, hindi kita tinitingnan na parang tanong na
                    kailangan sagutin, kundi parang awit na gusto ko lang
                    pakinggan, paulit-ulit, kahit kabisado ko na.
                </p>

                <div className="flex items-center justify-center py-8">
                    <Image
                        alt="gallery"
                        className="block rounded object-cover object-center md:rounded-2xl"
                        src={sie_41}
                    />
                </div>
            </div>

            {/* <div className="text-center font-serif text-sm italic sm:text-lg md:space-y-4">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Fugiat deserunt vitae in velit iusto. Veritatis
                        numquam, error autem fuga consectetur esse repellendus
                        dolorem molestiae. Ipsum ab similique minima aliquid
                        labore. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dolor dicta quibusdam excepturi
                        tenetur aut odit cumque error. Necessitatibus molestias
                        mollitia cumque veritatis possimus minima et magni? Quod
                        dolorum doloremque ad.
                    </p>
                </div> */}
        </section>
    );
};

export default Memories;
