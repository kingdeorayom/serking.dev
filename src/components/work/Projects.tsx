import PROJECTS from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Separator from "../ui/Separator";

const Projects = () => {
    return (
        <div className="flex flex-col gap-y-6">
            <h2 className="font-medium text-2xl tracking-tighter">
                My projects
            </h2>
            <p>
                A selection of personal, freelance, and company projects I
                worked on.
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Some projects may have changed in both looks and functionality
                since I&apos;m no longer maintaining them.
            </p>
            <Separator className="my-2" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                {PROJECTS.map((project) => {
                    return (
                        <Link
                            href={project.url}
                            target="_blank"
                            key={project?.id}
                            className="hover:opacity-75"
                        >
                            <div className="border dark:border-neutral-700 dark:bg-neutral-900 aspect-h-1 aspect-w-1 w-full h-40 rounded-md p-2 cursor-pointer">
                                <Image
                                    src={project.image.src}
                                    alt="Project"
                                    width={1920}
                                    height={1080}
                                    className="h-full w-full object-cover object-center rounded-md"
                                />
                            </div>
                            <div className="text-sm px-2 py-3 space-y-1">
                                <div className="flex space-x-2 justify-between">
                                    <h3 className="font-semibold">
                                        {`${project?.title}`}
                                    </h3>
                                    <div>
                                        <FiArrowUpRight size={16} />
                                    </div>
                                </div>
                                <p className="font-light text-xs dark:text-neutral-400">
                                    {`${project?.date} • ${project?.type} • ${project?.category}`}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
