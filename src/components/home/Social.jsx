import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Card from "../ui/Card";
import CopyToClipboard from "../../app/CopyToClipboard";
// import { FaXTwitter } from "react-icons/fa6";

const Social = () => {
    const SOCIALS = [
        {
            description: "LinkedIn",
            url: "https://www.linkedin.com/in/kingdeorayom/",
            text: "Serking de Orayom",
            icon: <FaLinkedin size={18} color="#0077b5" className="" />,
        },
        {
            description: "GitHub",
            url: "https://github.com/kingdeorayom",
            text: "@kingdeorayom",
            icon: <FaGithub size={18} className="" />,
        },
        {
            description: "Facebook",
            url: "https://facebook.com/kingdeorayom",
            text: "Serking de Orayom",
            icon: <FaFacebook size={18} color="#1877F2" className="" />,
        },
        // {
        //     description: "X (Twitter)",
        //     url: "https://x.com/kingdeorayom",
        //     text: "@kingdeorayom",
        //     icon: <FaXTwitter size={18} className="" />,
        // },
    ];

    return (
        <>
            <section className="my-6 flex flex-col gap-y-6">
                <div className="my-2 flex flex-wrap">
                    {SOCIALS.map((item, index) => {
                        return (
                            <div
                                className="group mx-1 my-1 flex w-fit"
                                key={index}
                            >
                                <Link
                                    href={item.url}
                                    target="_blank"
                                    className="w-full"
                                >
                                    <Card>
                                        <div className="flex items-center space-x-2">
                                            <div>{item.icon}</div>
                                            <div className="flex flex-col">
                                                <p className="line-clamp-1 text-[13px] font-medium text-neutral-900 dark:text-neutral-100">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
                                            <FiArrowUpRight
                                                size={16}
                                                className="ms-2"
                                            />
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
