import Tabs from "@/components/about/Tabs";
import Introduction from "@/components/about/Introduction";

export const metadata = {
    title: "About - Serking de Orayom",
    description: "Software Engineer & UI/UX designer",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col space-y-6">
            <Introduction />
            <Tabs />
        </div>
    );
}
