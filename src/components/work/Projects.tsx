const Projects = () => {
    return (
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
                    <div className="rounded-md bg-slate-200 dark:bg-neutral-900 h-40"></div>
                </div>
                <div className="animate-pulse">
                    <div className="rounded-md bg-slate-200 dark:bg-neutral-900 h-40"></div>
                </div>
                <div className="animate-pulse">
                    <div className="rounded-md bg-slate-200 dark:bg-neutral-900 h-40"></div>
                </div>
                <div className="animate-pulse">
                    <div className="rounded-md bg-slate-200 dark:bg-neutral-900 h-40"></div>
                </div>
                <div className="animate-pulse">
                    <div className="rounded-md bg-slate-200 dark:bg-neutral-900 h-40"></div>
                </div>
                <div className="animate-pulse">
                    <div className="rounded-md bg-slate-200 dark:bg-neutral-900 h-40"></div>
                </div>
            </div>
            <hr className="my-2 border-neutral-100 dark:border-neutral-800"></hr>
            <p className="text-xs">
                <span className="text-red-700">*</span> Some projects may have
                changed in both looks and functionality since I&apos;m no longer
                maintaining them.
            </p>
        </div>
    );
};

export default Projects;
