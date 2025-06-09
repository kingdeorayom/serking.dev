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
            <div>
                <ul className="grid grid-cols-2 gap-8 py-6 md:grid-cols-3">
                    {STACKS.map((stack, index) => {
                        return (
                            <li
                                key={index}
                                className="flex items-center space-x-4"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1 shadow-xs dark:border-neutral-700">
                                    {stack?.icon}
                                </div>
                                <h4 className="text-sm font-normal">
                                    {stack?.name}
                                </h4>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Stack;
