import Link from "next/link";
import Card from "../ui/Card";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import uphsl from "../../../public/images/education/uphsl.png";

const Education = () => {
    return (
        <section className="flex flex-col space-y-6">
            <h2 className="text-xl font-semibold tracking-tighter">
                Where I studied
            </h2>

            <p>
                I earned my bachelor&apos;s degree in Information Technology at
                the{" "}
                <Link
                    href="https://www.uphsl.edu.ph/"
                    title="Visit site"
                    target="_blank"
                    className="font-medium hover:underline"
                >
                    University of Perpetual Help System Laguna
                </Link>{" "}
                with an academic honor of distinction: <em>Magna Cum Laude</em>.
            </p>

            <div className="my-2 flex w-full flex-col space-y-4 space-x-0 sm:flex-row sm:space-y-0 sm:space-x-4">
                <div className="group flex w-full">
                    <Link
                        href="https://www.uphsl.edu.ph/"
                        className="w-full"
                        target="_blank"
                    >
                        <Card>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <Image
                                        src={uphsl}
                                        className="h-12 w-12 rounded-lg object-contain"
                                        alt="University of Perpetual Help System Laguna"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="line-clamp-1 text-sm font-bold text-neutral-900 dark:text-neutral-100">
                                        University of Perpetual Help System
                                        Laguna
                                    </p>
                                    <p className="text-xs text-neutral-900 dark:text-neutral-100">
                                        BS Information Technology
                                    </p>
                                    <em className="text-xs text-neutral-900 dark:text-neutral-100">
                                        Magna cum laude
                                    </em>
                                    <p className="text-xs text-neutral-900 dark:text-neutral-100">
                                        {/* 2018 - 2022 */}
                                        Class of 2022
                                    </p>
                                </div>
                            </div>
                            <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
                                <FiArrowUpRight size={18} />
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Education;
