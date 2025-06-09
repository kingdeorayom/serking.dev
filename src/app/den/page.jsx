import Memories from "./Memories";
import Blockquote from "./Blockquote";
import Introduction from "./Introduction";
import Separator from "@/components/ui/Separator";

export const metadata = {
    title: "Beautiful, Just Like That",
    description: "",
};

export default function DenisePage() {
    return (
        <div className="flex flex-col space-y-8">
            <Introduction />
            <Separator />
            <Memories />
            <Separator />
            <Blockquote />
        </div>
    );
}
