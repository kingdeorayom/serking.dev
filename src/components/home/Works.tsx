import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Works = () => {
    return (
        <section className="mt-6 mb-2 flex flex-col gap-y-6">
            <h2 className="font-medium text-xl tracking-tighter">
                Where I&apos;ve been &#x1F4CC;
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, tenetur delectus recusandae quam vitae temporibus
                exercitationem.
            </p>

            <div className="my-2 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
                <div className="group flex w-full">
                    <Link
                        href="https://padtechcorp.com/"
                        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900 hover:dark:hover:bg-neutral-800 rounded-lg flex items-center justify-between px-3 py-4 w-full"
                        target="_blank"
                    >
                        <div className="flex items-center space-x-3">
                            <div>
                                <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                    Padtech Industries Corporation
                                </p>
                                <p className=" text-xs text-neutral-900 dark:text-neutral-100">
                                    RND Programmer I
                                </p>
                                <p className="text-neutral-600 font-light text-xs dark:text-neutral-400">
                                    2022 - present
                                </p>
                            </div>
                        </div>
                        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
                            <FiArrowUpRight size={18} />
                        </div>
                    </Link>
                </div>
                <div className="group flex w-full">
                    <Link
                        href="https://sociov.com/"
                        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900 hover:dark:hover:bg-neutral-800 rounded-lg flex items-center justify-between px-3 py-4 w-full"
                        target="_blank"
                    >
                        <div className="flex items-center space-x-3">
                            <div>
                                <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                    Sociov Innovations, Inc.
                                </p>
                                <p className=" text-xs text-neutral-900 dark:text-neutral-100">
                                    Front End Developer (Internship)
                                </p>
                                <p className="text-neutral-600 font-light text-xs dark:text-neutral-400">
                                    Aug 2021 - Dec 2021
                                </p>
                            </div>
                        </div>
                        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
                            <FiArrowUpRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>

            <p>I also do freelance work.</p>
        </section>
    );
};

export default Works;
