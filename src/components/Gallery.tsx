import React from "react";
import Image from "next/image";

import serking_1 from "../../public/images/hero/serking_1.jpg";
import serking_2 from "../../public/images/hero/serking_2.jpg";
import serking_3 from "../../public/images/hero/serking_3.jpg";
import serking_4 from "../../public/images/hero/serking_4.jpg";
import serking_5 from "../../public/images/hero/serking_5.jpg";
import serking_6 from "../../public/images/hero/serking_6.jpg";
import serking_7 from "../../public/images/hero/serking_7.jpg";
import serking_8 from "../../public/images/hero/serking_8.jpg";
import serking_9 from "../../public/images/hero/serking_9.jpg";

const Gallery = () => {
    return (
        <section className="mt-8 mb-2">
            {/* <div className="bg-gray-200 h-24 w-full rounded-lg" /> */}

            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                <div className="grid gap-4">
                    <div>
                        <Image
                            className="h-auto max-w-full rounded-lg"
                            src={serking_1}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image
                            className="h-auto max-w-full rounded-lg"
                            src={serking_2}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image
                            className="h-auto max-w-full rounded-lg"
                            src={serking_3}
                            alt=""
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                            className="h-auto max-w-full rounded-lg"
                            src={serking_4}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image
                            className="h-auto max-w-full rounded-lg"
                            src={serking_5}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image
                            className="h-auto max-w-full rounded-lg"
                            src={serking_6}
                            alt=""
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                            className="h-auto max-w-full rounded-lg"
                            src={serking_7}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image
                            className="h-auto max-w-full rounded-lg"
                            src={serking_8}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image
                            className="h-auto max-w-full rounded-lg"
                            src={serking_9}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
