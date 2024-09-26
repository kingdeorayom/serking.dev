import Education from "@/components/about/Education";
import Stack from "@/components/work/Stack";

export const metadata = {
    title: "About | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function AboutPage() {
    return (
        <section className="flex-auto min-w-0 flex flex-col">
            <div className="flex flex-col gap-y-10">
                <div className="space-y-10">
                    <Education />
                    <Stack />
                </div>
            </div>
        </section>
    );
}
