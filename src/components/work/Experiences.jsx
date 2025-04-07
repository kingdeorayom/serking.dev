import Separator from "../ui/Separator";
import Projects from "./Projects";

const Experiences = () => {
    return (
        <section className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-6">
                <div>
                    <p className="mb-1 text-xl font-medium tracking-tighter">
                        Padtech Industries Corporation
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        Frontend Developer
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        Sep 2022 - Mar 2025
                    </p>
                </div>

                <ul className="flex list-disc flex-col space-y-4 px-8 py-4">
                    <li>
                        Led the development of responsive and scalable user
                        interfaces using <strong>Next.js</strong>,{" "}
                        <strong>React Native</strong>, and{" "}
                        <strong>Tailwind CSS</strong> for both web and mobile
                        platforms.
                    </li>
                    <li>
                        Handled <strong>UI/UX design tasks</strong>, helping
                        create simple but effective, user-friendly, and
                        modern-looking apps and websites.
                    </li>
                    <li>
                        Improved overall mobile apps and website&apos;s{" "}
                        <strong>performance</strong> by enhancing load times, UI
                        responsiveness, and user experience.
                    </li>
                    <li>
                        Made the frontend codebase easier to scale and maintain
                        by writing <strong>clean, modular</strong>, and{" "}
                        <strong>reusable components</strong>.
                    </li>
                    <li>
                        Helped <strong>upgrade old code</strong> by moving
                        legacy components and systems to newer frameworks and
                        tools.
                    </li>
                    <li>
                        Built and used <strong>Laravel APIs</strong> to handle
                        data and business logic for frontend features.
                    </li>
                </ul>

                {/* <p>
                    Over the course of <em>over two and a half years</em>, I've
                    had the privilege of making significant contributions to the
                    company, notably as one of the primary frontend developers
                    and UI/UX designers.
                </p>

                <p>
                    I&apos;ve played a key role in building responsive user
                    interfaces, integrating backend functionality, optimizing
                    performance, and ensuring scalability for most of the
                    company's apps and websites.
                </p>

                <p>
                    I&apos;ve also gained experience in database management, API
                    development, and gradually migrating legacy components and
                    codebase to modern frameworks and infrastructure.
                </p>

                <p>
                    Below are the projects I&apos;ve designed and developed
                    during my stay at the company.
                </p> */}

                <p>
                    Below are the projects I&apos;ve designed and developed
                    during my stay at the company.
                </p>

                <Projects company="padtech" />
            </div>
            <Separator />
            <div className="flex flex-col space-y-6">
                <div>
                    <p className="mb-1 text-xl font-medium tracking-tighter">
                        Freelancing
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        Full-Stack Developer
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        2023 - present
                    </p>
                </div>
                <p>I occasionally take on freelance projects.</p>
                <Projects company="freelance" />
            </div>
            <Separator />
            <div className="flex flex-col space-y-6">
                <div>
                    <p className="mb-1 text-xl font-medium tracking-tighter">
                        Sociov Technologies, Inc.
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        Frontend Developer
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        2021 (Internship)
                    </p>
                </div>
                <p>
                    During my internship, I worked on the company&apos;s
                    official website using React.js and Tailwind CSS, which was
                    my first hands-on experience with React.
                </p>
            </div>
            <Separator />
        </section>
    );
};

export default Experiences;
