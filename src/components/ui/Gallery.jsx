import Image from "next/image";

import about1 from "/public/images/about/about1.jpg";
import about2 from "/public/images/about/about2.jpg";
import about3 from "/public/images/about/about3.jpg";
import about4 from "/public/images/about/about4.jpg";
// import about5 from "/public/images/about/about5.jpg";
// import about6 from "/public/images/about/about6.jpg";
import about7 from "/public/images/about/about7.jpg";
import about8 from "/public/images/about/about8.jpg";
import Link from "next/link";

const Gallery = () => {
    return (
        <section className="py-2">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2 hover:opacity-90 cursor-pointer">
                        <Link href={about1.src} target="_blank">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={about1}
                            />
                        </Link>
                    </div>
                    <div className="w-1/2 p-1 md:p-2 hover:opacity-90 cursor-pointer">
                        <Link href={about3.src} target="_blank">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={about3}
                            />
                        </Link>
                    </div>
                    <div className="w-full p-1 md:p-2 hover:opacity-90 cursor-pointer">
                        <Link href={about2.src} target="_blank">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={about2}
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2 hover:opacity-90 cursor-pointer">
                        <Link href={about8.src} target="_blank">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={about8}
                            />
                        </Link>
                    </div>
                    <div className="w-1/2 p-1 md:p-2 hover:opacity-90 cursor-pointer">
                        <Link href={about7.src} target="_blank">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={about7}
                            />
                        </Link>
                    </div>
                    <div className="w-1/2 p-1 md:p-2 hover:opacity-90 cursor-pointer">
                        <Link href={about4.src} target="_blank">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={about4}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
