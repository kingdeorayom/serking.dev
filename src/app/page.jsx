import Hero from "@/components/home/Hero";
import Social from "@/components/home/Social";

export default function HomePage() {
    return (
        <div className="flex flex-col space-y-6">
            <Hero />
            <Social />
        </div>
    );
}
