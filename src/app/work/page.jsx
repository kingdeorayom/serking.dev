import Separator from "@/components/ui/Separator";
import Experiences from "@/components/work/Experiences";
// import Projects from "@/components/work/Projects";

export const metadata = {
    title: "Work | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function WorkPage() {
    return (
        <section className="flex-auto min-w-0 flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-6">
                <h2 className="font-medium text-xl tracking-tighter">
                    My work experiences
                </h2>
                <p>
                    Embracing each opportunity to learn, experiment, and gain
                    experience needed to build industry-grade software.
                </p>
                <Separator />
                <Experiences />
            </div>
            {/* <Projects /> */}
        </section>
    );
}
