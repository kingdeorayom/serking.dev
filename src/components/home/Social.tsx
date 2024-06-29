import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import CopyToClipboard from "../ui/CopyToClipboard";
import Card from "../ui/Card";
import SOCIALS from "@/data/socials";

const Social = () => {
    return (
        <>
            <section className="my-6 flex flex-col gap-y-6">
                <h2 className="font-medium text-xl tracking-tighter">
                    Me on the internet
                </h2>
                <p>Reach out to me. No pressure!</p>

                <div className="my-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                                                <p className="font-medium text-sm line-clamp-1 text-neutral-900 dark:text-neutral-100">
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
