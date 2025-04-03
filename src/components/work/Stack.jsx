import STACKS from "@/data/stacks";

const Stack = () => {
    return (
        <section className="flex flex-col space-y-6">
            <h2 className="font-semibold text-2xl tracking-tighter">
                Tech stack
            </h2>
            <p>
                Programming languages, frameworks, libraries, apps, platform and
                services I use to build and run a website, application, or any
                project.
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-6">
                {STACKS.map((stack, index) => {
                    return (
                        <div key={index}>
                            <div className="border dark:border-neutral-700 aspect-h-1 aspect-w-1 w-full h-20 rounded-md p-1 flex justify-center items-center shadow-sm">
                                {stack?.icon}
                            </div>
                            <div className="text-sm px-2 py-3 space-y-1">
                                <h3 className="font-normal text-center text-xs">
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
