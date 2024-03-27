import Separator from "@/components/ui/Separator";
import Experiences from "@/components/work/Experiences";
import Projects from "@/components/work/Projects";

export const metadata = {
    title: "Work | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function WorkPage() {
    return (
        // testimonials

        <section className="flex-auto min-w-0 flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-6">
                <h2 className="font-medium text-2xl tracking-tighter">
                    My work experiences
                </h2>
                <p>Trying to put my mark on the tech industry.</p>

                {/* <p>
                    Immersing myself in the dynamic field of software
                    development, embracing each opportunity to learn,
                    experiment, and gain experience needed to build
                    industry-grade software.
                </p>

                <p>And of course, to put my mark on the tech industry.</p> */}
                <Separator />
                <Experiences />
            </div>
            <Projects />
        </section>
    );
}

// also add humble work setup, work, projects label
