import Tabs from "@/components/about/Tabs";
import Introduction from "@/components/about/Introduction";

export const metadata = {
    title: "About - Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col space-y-6">
            <Introduction />
            <Tabs />
        </div>
    );
}
