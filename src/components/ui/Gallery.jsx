import Image from "next/image";

import about12 from "../../../public/images/about/about12.jpg";
import about3 from "../../../public/images/about/about3.jpg";
import about13 from "../../../public/images/about/about13.jpg";
// import about4 from "../../../public/images/about/about4.jpg";
import about9 from "../../../public/images/about/about9.jpg";
import about5 from "../../../public/images/about/about5.jpg";
// import about6 from "../../../public/images/about/about6.jpg";
import about7 from "../../../public/images/about/about7.jpg";
import Link from "next/link";

const Gallery = () => {
    return (
        <section className="py-2">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                        <Link href={about12.src} target="_blank">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-2xl object-cover object-center"
                                src={about12}
                            />
                        </Link>
                    </div>
                    <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                        <Link href={about5.src} target="_blank">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-2xl object-cover object-center"
                                src={about5}
                            />
                        </Link>
                    </div>
                    <div className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2">
                        <Link href={about13.src} target="_blank">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-2xl object-cover object-center"
                                src={about13}
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2">
                        <Link href={about3.src} target="_blank">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-2xl object-cover object-center"
                                src={about3}
                            />
                        </Link>
                    </div>
                    <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                        <Link href={about7.src} target="_blank">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-2xl object-cover object-center"
                                src={about7}
                            />
                        </Link>
                    </div>
                    <div className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2">
                        <Link href={about9.src} target="_blank">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-2xl object-cover object-center"
                                src={about9}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
