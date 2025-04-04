import STACKS from "@/data/stacks";

const Stack = () => {
    return (
        <section className="flex flex-col space-y-6">
            <h2 className="text-2xl font-semibold tracking-tighter">
                Tech stack
            </h2>
            <p>
                Programming languages, frameworks, libraries, apps, platform and
                services I use to build and run a website, application, or any
                project.
            </p>
            <div className="grid grid-cols-4 gap-6 sm:grid-cols-6">
                {STACKS.map((stack, index) => {
                    return (
                        <div key={index}>
                            <div className="aspect-h-1 aspect-w-1 flex h-20 w-full items-center justify-center rounded-md border p-1 shadow-xs dark:border-neutral-700">
                                {stack?.icon}
                            </div>
                            <div className="space-y-1 px-2 py-3 text-sm">
                                <h3 className="text-center text-xs font-normal">
                                    {stack?.name}
                                </h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Stack;
