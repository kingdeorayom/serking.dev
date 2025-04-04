import PROJECTS from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = ({ company = "" }) => {
    return (
        <div className="flex flex-col space-y-6">
            <p className="text-xs text-neutral-600 dark:text-neutral-300">
                DISCLAIMER: Some projects may have changed in both looks and
                functionality since I&apos;m no longer maintaining them. Certain
                projects&mdash;including those owned by previous
                companies&mdash;are permitted to be showcased in this website.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 py-4">
                {PROJECTS.filter(
                    (project) => !company || project.company === company
                ).map((project) => (
                    <div
                        key={project?.title}
                        className={project.webUrl ? "group" : ""}
                    >
                        <div className="border dark:border-neutral-700 dark:bg-neutral-900 aspect-h-1 aspect-w-1 w-full md:h-40 rounded-xs p-1.5 shadow-xs">
                            <Image
                                src={project.image.src}
                                alt="Project"
                                width={1920}
                                height={1080}
                                className="h-full w-full object-contain md:object-cover object-center rounded-xs"
                            />
                        </div>
                        <div className="text-sm px-2 py-3 space-y-2">
                            <div className="flex space-x-2 justify-between">
                                <h3 className="font-semibold">
                                    {project.webUrl ? (
                                        <Link
                                            href={project.webUrl}
                                            target="_blank"
                                            className="group-hover:hovered-link"
                                        >
                                            {project?.title}
                                        </Link>
                                    ) : (
                                        project?.title
                                    )}
                                </h3>
                                {project.webUrl ? (
                                    <div>
                                        <FiArrowUpRight size={16} />
                                    </div>
                                ) : null}
                            </div>
                            <p className="font-light text-xs dark:text-neutral-300">
                                {`${project?.date} • ${project?.type}`}
                            </p>
                            {(project.androidUrl || project.iosUrl) && (
                                <p className="flex text-xs items-center space-x-2 dark:text-neutral-300">
                                    {project.androidUrl && (
                                        <Link
                                            href={project.androidUrl}
                                            target="_blank"
                                            className="text-xs hovered-link text-blue-800 dark:text-white"
                                        >
                                            Google Play
                                        </Link>
                                    )}
                                    {/* <span>•</span> */}
                                    {project.iosUrl && (
                                        <Link
                                            href={project.iosUrl}
                                            target="_blank"
                                            className="text-xs hovered-link text-blue-800 dark:text-white"
                                        >
                                            App Store
                                        </Link>
                                    )}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
