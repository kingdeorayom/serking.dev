import PROJECTS from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = ({ company = "" }) => {
    return (
        <div className="flex flex-col space-y-6">
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
                DISCLAIMER: Some projects may have changed in both looks and
                functionality since I&apos;m no longer maintaining them. Certain
                projects&mdash;including those owned by previous
                companies&mdash;are permitted to be showcased in this website.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 py-4">
                {PROJECTS.filter(
                    (project) => !company || project.company === company
                ).map((project) => (
                    <Link
                        href={project?.url}
                        target="_blank"
                        key={project?.title}
                        className="hover:opacity-75"
                    >
                        <div className="border dark:border-neutral-700 dark:bg-neutral-900 aspect-h-1 aspect-w-1 w-full h-40 rounded p-1.5 cursor-pointer">
                            <Image
                                src={project.image.src}
                                alt="Project"
                                width={1920}
                                height={1080}
                                className="h-full w-full object-cover object-center rounded"
                            />
                        </div>
                        <div className="text-sm px-2 py-3 space-y-1">
                            <div className="flex space-x-2 justify-between">
                                <h3 className="font-semibold">
                                    {project?.title}
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
                ))}
            </div>
        </div>
    );
};

export default Projects;
