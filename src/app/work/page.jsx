import Separator from "@/components/ui/Separator";
import Experiences from "@/components/work/Experiences";
import Stack from "@/components/work/Stack";

export const metadata = {
    title: "Work - Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function WorkPage() {
    return (
        <section className="flex-auto min-w-0 flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-8">
                <h2 className="font-medium text-2xl tracking-tighter">
                    My work experiences
                </h2>
                <p>
                    I&apos;m looking for a full-time role where I can
                    collaborate with a team, contribute to impactful projects,
                    and continue growing as a developer.
                </p>
                <Separator />
                <Experiences />
                <Separator />
            </div>
            <Stack />
        </section>
    );
}
