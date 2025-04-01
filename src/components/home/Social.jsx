import SOCIALS from "@/data/socials";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Card from "../ui/Card";
import CopyToClipboard from "../ui/CopyToClipboard";

const Social = () => {
    return (
        <section className="flex flex-col space-y-6">
            <p>
                If you're looking to collaborate on a project, hire a developer,
                or just say hello, feel free to reach out using the contact
                options below.
            </p>
            <div className="flex flex-wrap">
                {SOCIALS.map((item, index) => {
                    return (
                        <div className="group flex w-fit mx-1" key={index}>
                            <Link
                                href={item.url}
                                target="_blank"
                                className="w-full"
                            >
                                <Card>
                                    <div className="flex items-center space-x-3">
                                        <div>{item.icon}</div>
                                        <div className="flex flex-col">
                                            {/* or text-xs */}
                                            <p className="font-medium text-sm line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                                {item.description}
                                            </p>
                                            {/* <p className=" text-xs text-neutral-500 dark:text-neutral-100">
                                                    {item.text}
                                                </p> */}
                                        </div>
                                    </div>
                                    <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
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
            <CopyToClipboard />
        </section>
    );
};

export default Social;
