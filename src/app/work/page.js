export const metadata = {
    title: "Work | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function Work() {
    return (
        <section className="flex-auto min-w-0 flex flex-col">
            <div className="flex flex-col gap-y-6">
                <h2 className="font-medium text-2xl tracking-tighter">
                    my works
                </h2>
                <p>
                    A selection of personal, freelance, and agency projects
                    <span className="text-red-700">*</span> I worked on.
                </p>
                <hr className="my-2 border-neutral-100 dark:border-neutral-800"></hr>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, quaerat deserunt officiis labore similique optio
                    mollitia molestiae illo corporis accusamus eius quo ullam
                    quas minus. Neque incidunt maxime rerum tempore.
                </p>
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
