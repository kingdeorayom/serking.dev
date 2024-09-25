import Education from "@/components/about/Education";
import Personal from "@/components/about/Personal";
// import Tabs from "@/components/about/Tabs";

// import Introduction from "@/components/about/Introduction";
import BackButton from "@/components/ui/BackButton";
import Stack from "@/components/work/Stack";

export const metadata = {
    title: "About | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function AboutPage() {
    return (
        <section className="flex-auto min-w-0 flex flex-col">
            <div className="flex flex-col gap-y-10">
                <BackButton />
                {/* <Introduction /> */}
                {/* <Tabs /> */}
                <div className="space-y-10">
                    <Education />
                    {/* <Personal /> */}
                    <Stack />
                </div>
            </div>
        </section>
    );
}
