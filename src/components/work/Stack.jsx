import Link from "next/link";

const Stack = () => {
    return (
        <div className="flex flex-col gap-y-12">
            <div className="flex flex-col gap-y-6">
                <h2 className="font-medium text-xl tracking-tighter">Stack</h2>
                <p>
                    Programming languages, frameworks, libraries, apps, platform
                    and services I use to build and run a website, application,
                    or any project.
                </p>
                <p className="font-medium">1. Framework</p>
                <p>Next.js, React Native, Expo, Node.js, Express.js, Laravel</p>
                <p className="font-medium">2. Database</p>
                <p>MySQL, MongoDB, PostgreSQL, Firebase</p>
                <p className="font-medium">3. Design and Styling</p>
                <p>Tailwind CSS, shadcn/ui, MUI, Figma, Adobe Photoshop</p>
                <p className="font-medium">4. Coding Patterns</p>
                <div className="px-8">
                    <ul className="list-disc space-y-4">
                        <li>
                            <code className="bg-slate-200 dark:bg-gray-50/10 px-1 py-0.5">
                                let
                            </code>{" "}
                            &gt;{" "}
                            <code className="bg-slate-200 dark:bg-gray-50/10 px-1 py-0.5">
                                const
                            </code>{" "}
                            <Link
                                href="https://overreacted.io/on-let-vs-const/"
                                target="_blank"
                                title="On let vs const"
                                className="hovered-link"
                            >
                                most of the time
                            </Link>
                        </li>
                        <li>Many small components &gt; larger files</li>
                        <li>Copy/paste is better than the wrong abstraction</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Stack;
