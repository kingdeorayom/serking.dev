import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaSpotify, FaRegCopy } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Social = () => {
    const SOCIALS = [
        {
            description: "I archive emails",
            url: "mailto:kingdeorayom@gmail.com",
            text: "kingdeorayom@gmail.com",
            icon: <SiGmail size={24} color="#EA4335" className="ms-1" />,
        },
        {
            description: "I try to be professional",
            url: "https://www.linkedin.com/in/kingdeorayom/",
            text: "Serking de Orayom",
            icon: <FaLinkedin size={24} color="#0077b5" className="ms-1" />,
        },
        {
            description: "I write code",
            url: "https://github.com/kingdeorayom",
            text: "@kingdeorayom",
            icon: <FaGithub size={24} className="ms-1" />,
        },
        {
            description: "I listen to music",
            url: "https://open.spotify.com/user/22r72aobh6vfrji6v4tkukuha",
            text: "Serking de Orayom",
            icon: <FaSpotify size={24} color="#1DB954" className="ms-1" />,
        },
    ];

    return (
        <>
            <section className="my-6 flex flex-col gap-y-6">
                <h2 className="font-medium text-xl tracking-tighter">
                    Me on the internet &#x1F310;
                </h2>
                <p>I&apos;ve been around for too long.</p>

                <div className="my-2 flex flex-col space-y-4 w-full">
                    {SOCIALS.map((item, index) => {
                        return (
                            <div className="group flex w-full" key={index}>
                                <Link
                                    href={item.url}
                                    className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded-lg flex items-center justify-between px-3 py-4 w-full"
                                    target="_blank"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div>{item.icon}</div>
                                        <div className="flex flex-col">
                                            <p className="font-medium line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                                {item.description}
                                            </p>
                                            <p className=" text-xs text-neutral-900 dark:text-neutral-100">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
                                        <FiArrowUpRight size={18} />
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section>
                <ul className="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
                    <li>
                        <Link
                            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://twitter.com/leeerob"
                        >
                            <FiArrowUpRight size={18} />
                            <p className="h-7 ml-2">follow me</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://leerob.substack.com"
                        >
                            <FaRegCopy size={18} />
                            <p className="h-7 ml-2">copy email address</p>
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Social;
