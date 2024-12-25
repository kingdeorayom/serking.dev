export const metadata = {
    title: "Work - Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function WorkPage() {
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
            </div>
        </section>
    );
}
