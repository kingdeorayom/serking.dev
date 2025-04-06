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
                        Sep 2022 - Apr 2025
                    </p>
                </div>
                <p>
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
