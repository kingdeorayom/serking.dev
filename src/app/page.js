import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
    return (
        <main className="flex-auto min-w-0 flex flex-col">
            <section className="flex flex-col gap-y-6">
                <h1 className="font-medium text-2xl tracking-tighter">
                    Hi, I&apos;m Serking &#x1F44B;
                </h1>
                <p>
                    I&apos;m a software developer focusing on web and mobile
                    applications.
                </p>
                <p>
                    I earned my bachelor&apos;s degree in Information Technology
                    at the{" "}
                    <Link
                        href="https://www.uphsl.edu.ph/"
                        title="Visit site"
                        target="_blank"
                        className="font-medium hover:underline"
                    >
                        University of Perpetual Help System Laguna
                    </Link>{" "}
                    with an academic honor of distinction:{" "}
                    <em>Magna Cum Laude</em>.
                </p>
                <p>Poke around and see what I&apos;m up to.</p>
            </section>
            <section className="mt-8 mb-2">
                <div className="bg-gray-200 h-24 w-full rounded-lg" />
            </section>
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
                            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded-lg flex items-center justify-between px-3 py-4 w-full"
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
                            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded-lg flex items-center justify-between px-3 py-4 w-full"
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
            <section className="my-6 flex flex-col gap-y-6">
                <h2 className="font-medium text-xl tracking-tighter">
                    Me on the internet &#x1F310;
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className="my-2 flex flex-col space-y-4  w-full">
                    <div className="group flex w-full">
                        <Link
                            href="https://padtechcorp.com/"
                            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded-lg flex items-center justify-between px-3 py-4 w-full rp"
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
                            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded-lg flex items-center justify-between px-3 py-4 w-full"
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
                    <div className="group flex w-full">
                        <Link
                            href="https://sociov.com/"
                            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded-lg flex items-center justify-between px-3 py-4 w-full"
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
            </section>

            <section>
                <ul class="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
                    <li>
                        <a
                            class="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://twitter.com/leeerob"
                        >
                            <FiArrowUpRight size={18} />
                            <p class="h-7 ml-2">follow me</p>
                        </a>
                    </li>
                    <li>
                        <a
                            class="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://leerob.substack.com"
                        >
                            <FiArrowUpRight size={18} />
                            <p class="h-7 ml-2">get email updates</p>
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    );
}
