// import Image from "next/image";
// import Link from "next/link";
// import { FiArrowUpRight } from "react-icons/fi";

// import adselle_shop from "/public/images/projects/adselle_shop.png";
// import autopromoph from "/public/images/projects/autopromoph.png";
// import saliksik from "/public/images/projects/saliksik.png";
// import smpt from "/public/images/projects/smpt.png";

export const metadata = {
    title: "Work - Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function WorkPage() {
    // const PROJECTS = [
    //     {
    //         id: 3,
    //         title: "Sophia Miranda - Physical Therapist",
    //         description: "Lorem ipsum",
    //         type: "Web",
    //         category: "Freelance",
    //         image: smpt,
    //         url: "https://sophiamiranda.vercel.app/",
    //         date: "2024",
    //     },
    //     {
    //         id: 4,
    //         title: "Adselle Shop",
    //         description: "Lorem ipsum",
    //         type: "Web",
    //         category: "Company",
    //         image: adselle_shop,
    //         url: "https://www.adselle.shop/",
    //         date: "2024",
    //     },
    //     {
    //         id: 1,
    //         title: "Auto Promo PH",
    //         description: "Lorem ipsum",
    //         type: "Web",
    //         category: "Freelance",
    //         image: autopromoph,
    //         url: "https://www.autopromo.ph/",
    //         date: "2023",
    //     },
    //     {
    //         id: 2,
    //         title: "SALIKSIK: UPHSL Research Repository",
    //         description: "Lorem ipsum",
    //         type: "Web",
    //         category: "University",
    //         image: saliksik,
    //         url: "https://www.saliksikuphsl.org/",
    //         date: "2022",
    //     },
    // ];

    return (
        <section className="flex min-w-0 flex-auto flex-col gap-y-10">
            <div className="flex flex-col gap-y-6">
                <h2 className="text-xl font-medium tracking-tighter">
                    My work experiences
                </h2>
                <p>
                    Embracing each opportunity to learn, experiment, and gain
                    experience needed to build industry-grade software.
                </p>
                <hr className="border-neutral-100 dark:border-neutral-800" />
                <div className="flex flex-col gap-y-6">
                    <div>
                        <p className="mb-1 text-xl font-medium tracking-tighter">
                            Padtech Industries Corporation
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Research and Development Programmer, 2022 - present
                        </p>
                    </div>
                    <p>
                        Over the course of two years, I&apos;ve tackled a
                        variety of challenging projects, primarily focusing on
                        frontend development with React Native for mobile and
                        Next.js for web and backend work with Laravel, REST APIs
                        and MySQL.
                    </p>
                    <p>
                        I&apos;ve had the privilege of making significant
                        contributions to our projects notably by contributing to
                        various projects&apos; key components. This includes
                        developing landing pages and web assets for the mobile
                        applications we&apos;ve built. Additionally, I&apos;ve
                        played a central role in developing our company&apos;s
                        official website, ensuring it effectively communicates
                        our brand identity and offerings to a diverse audience
                        and if it actually works! Moreover, my involvement in
                        designing primary user interfaces and user experiences
                        for both the primary mobile and web applications has
                        been pivotal.
                    </p>
                    <p>
                        My accomplishments include building responsive user
                        interfaces, integrating complex backend functionality,
                        optimizing performance, and ensuring scalability.
                        Additionally, I&apos;ve gained experience in database
                        management, API development, and gradually migrating
                        legacy components and codebase to modern frameworks and
                        infrastructure.
                    </p>
                </div>

                {/* <hr className="border-neutral-100 dark:border-neutral-800" /> */}

                {/* <div className="flex flex-col gap-y-6">
                <div>
                    <p className="font-medium text-xl mb-1 tracking-tighter">
                        Sociov Innovations, Inc.
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        Front-end Developer (Internship), 2021
                    </p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi officiis mollitia cumque similique dolorum, ipsam
                    quos. Id harum veniam neque, nisi fugit ipsam a dolorem
                    impedit enim doloremque. Impedit, accusantium. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Eos
                    necessitatibus quae ut? Perferendis consequatur et
                    reiciendis atque voluptatibus cumque ipsum laudantium
                    reprehenderit provident consequuntur repellat voluptate
                    doloremque vitae, optio ducimus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus molestias blanditiis veniam repellendus fugit
                    delectus accusamus distinctio, officia quia ea. Est, ullam
                    veniam velit error praesentium molestiae esse exercitationem
                    ut!
                </p>
            </div> */}
            </div>
            {/* <div className="flex flex-col gap-y-6">
                <h2 className="text-2xl font-medium tracking-tighter">
                    My projects
                </h2>
                <p>
                    A selection of personal, freelance, and company projects I
                    worked on.
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    Some projects may have changed in both looks and
                    functionality since I&apos;m no longer maintaining them.
                </p>
                <hr className="my-2 border-neutral-100 dark:border-neutral-800" />
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2">
                    {PROJECTS.map((project) => {
                        return (
                            <Link
                                href={project.url}
                                target="_blank"
                                key={project?.id}
                                className="hover:opacity-75"
                            >
                                <div className="aspect-h-1 aspect-w-1 h-40 w-full cursor-pointer rounded border p-1.5 dark:border-neutral-700 dark:bg-neutral-900 sm:h-48">
                                    <Image
                                        src={project.image.src}
                                        alt="Project"
                                        width={1920}
                                        height={1080}
                                        className="h-full w-full rounded object-cover object-center"
                                    />
                                </div>
                                <div className="space-y-1 px-2 py-3 text-sm">
                                    <div className="flex justify-between space-x-2">
                                        <h3 className="line-clamp-1 font-semibold sm:line-clamp-none">
                                            {`${project?.title}`}
                                        </h3>
                                        <div>
                                            <FiArrowUpRight size={16} />
                                        </div>
                                    </div>
                                    <p className="text-xs font-light dark:text-neutral-400">
                                        {`${project?.date} • ${project?.type} • ${project?.category}`}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div> */}
        </section>
    );
}
