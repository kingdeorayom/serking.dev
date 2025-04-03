import Separator from "@/components/ui/Separator";
import Experiences from "@/components/work/Experiences";
import Stack from "@/components/work/Stack";

export const metadata = {
    title: "Work - Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function WorkPage() {
    return (
        <div className="flex flex-col space-y-6">
            <section className="flex flex-col space-y-6">
                <h1 className="font-semibold text-2xl tracking-tighter">
                    My work experiences
                </h1>
                <p>
                    I&apos;m looking for a full-time role where I can
                    collaborate with a team, contribute to impactful projects,
                    and continue growing as a developer.
                </p>
            </section>
            <Separator />
            <Experiences />
            <Stack />
        </div>
    );
}
