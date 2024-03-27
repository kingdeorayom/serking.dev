import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import {
    FaLinkedin,
    FaGithub,
    FaSpotify,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { MdGamepad } from "react-icons/md";

import CopyToClipboard from "../ui/CopyToClipboard";
import Card from "../ui/Card";

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
            description: "I am mostly active here",
            url: "https://facebook.com/kingdeorayom",
            text: "Serking de Orayom",
            icon: <FaFacebook size={24} color="#1877F2" className="ms-1" />,
        },
        {
            description: "I only view stories",
            url: "https://instagram.com/kingdeorayom",
            text: "@kingdeorayom",
            icon: <FaInstagram size={24} color="#d62976" className="ms-1" />,
        },
        {
            description: "I only do reposts",
            url: "https://x.com/kingdeorayom",
            text: "@kingdeorayom",
            icon: <FaXTwitter size={24} className="ms-1" />,
        },
        {
            description: "I appreciate vintage melodies",
            url: "https://open.spotify.com/user/22r72aobh6vfrji6v4tkukuha",
            text: "Serking de Orayom",
            icon: <FaSpotify size={24} color="#1DB954" className="ms-1" />,
        },
        {
            description: "I play video games",
            url: "https://www.exophase.com/user/kingdeorayom/",
            text: "Steam, Nintendo, Google Play, Xbox",
            icon: <MdGamepad size={24} color="#5488A4" className="ms-1" />,
        },
    ];

    return (
        <>
            <section className="my-6 flex flex-col gap-y-6">
                <h2 className="font-medium text-xl tracking-tighter">
                    Me on the internet
                </h2>
                <p>Reach out to me. No pressure!</p>

                <div className="my-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {SOCIALS.map((item, index) => {
                        return (
                            <div className="group flex w-full" key={index}>
                                <Link
                                    href={item.url}
                                    target="_blank"
                                    className="w-full"
                                >
                                    <Card>
                                        <div className="flex items-center space-x-4">
                                            <div>{item.icon}</div>
                                            <div className="flex flex-col">
                                                {/* or text-sm */}
                                                <p className="font-medium text-xs line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                                    {item.description}
                                                </p>
                                                <p className=" text-xs text-neutral-500 dark:text-neutral-100">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
                                            <FiArrowUpRight size={18} />
                                        </div>
                                    </Card>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>
            <CopyToClipboard />
        </>
    );
};

export default Social;
