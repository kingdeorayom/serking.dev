import Tabs from "@/components/about/Tabs";
import Introduction from "@/components/about/Introduction";

export const metadata = {
    title: "About - Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function AboutPage() {
    return (
        <section className="flex-auto min-w-0 flex flex-col">
            <div className="flex flex-col gap-y-6">
                {/* <BackButton /> */}
                <Introduction />
                <Tabs />
            </div>
        </section>
    );
}
