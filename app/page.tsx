import Contact from "@/components/home/Contact";
import Introduction from "@/components/home/Introduction";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-4">
      <Introduction />
      <Contact />
    </div>
  );
}
