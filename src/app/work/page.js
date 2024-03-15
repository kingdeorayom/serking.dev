export const metadata = {
    title: "Work | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function Work() {
    return (
        // projects
        // testimonials
        // summary of roles

        <section className="flex-auto min-w-0 flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-6">
                <h2 className="font-medium text-2xl tracking-tighter">
                    My experiences
                </h2>
                <p>Trying to put my mark on the tech industry.</p>

                <hr className="border-neutral-100 dark:border-neutral-800"></hr>

                <div className="flex flex-col gap-y-6">
                    <div>
                        <p className="font-semibold text-lg mb-1 tracking-tighter">
                            Padtech Industries Corporation
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                            Research and Development Programmer, 2022 - present
                        </p>
                    </div>
                    <p>
                        Over the course of my two years, I&apos;ve tackled a
                        variety of challenging projects, primarily focusing on
                        frontend development with React Native and backend work
                        with Laravel, REST APIs and MySQL. My accomplishments
                        include building responsive user interfaces, integrating
                        complex backend functionality, optimizing performance,
                        and ensuring scalability.
                    </p>
                    <p>
                        Additionally, I&apos;ve gained experience in database
                        management, API development, and gradually migrating
                        legacy components to modern frameworks and
                        infrastructure.
                    </p>
                </div>

                <hr className="border-neutral-100 dark:border-neutral-800"></hr>

                <div className="flex flex-col gap-y-6">
                    <div>
                        <p className="font-semibold text-lg mb-1 tracking-tighter">
                            Sociov Innovations, Inc.
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                            Front-end Developer (Internship), 2021
                        </p>
                    </div>
                    <p>
                        Over the course of my two years, I&apos;ve tackled a
                        variety of challenging projects, primarily focusing on
                        frontend development with React Native and backend work
                        with Laravel, REST APIs and MySQL. My accomplishments
                        include building responsive user interfaces, integrating
                        complex backend functionality, optimizing performance,
                        and ensuring scalability.
                    </p>
                    <p>
                        Additionally, I&apos;ve gained experience in database
                        management, API development, and gradually migrating
                        legacy components to modern frameworks and
                        infrastructure.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-y-6">
                <h2 className="font-medium text-2xl tracking-tighter">
                    My projects
                </h2>
                <p>
                    A selection of personal, freelance, and agency projects
                    <span className="text-red-700">*</span> I worked on.
                </p>

                <hr className="my-2 border-neutral-100 dark:border-neutral-800"></hr>
                <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="animate-pulse">
                        <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-40"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-40"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-40"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-40"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-40"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-40"></div>
                    </div>
                </div>
                <hr className="my-2 border-neutral-100 dark:border-neutral-800"></hr>
                <p className="text-xs">
                    <span className="text-red-700">*</span> Some projects may
                    have changed in both looks and functionality since I&apos;m
                    no longer maintaining them.
                </p>
            </div>
        </section>
    );
}

// also add humble work setup, work, projects label
