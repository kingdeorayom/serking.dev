import Hero from "@/components/home/Hero";
import Social from "@/components/home/Social";
import Projects from "@/components/work/Projects";

export default function HomePage() {
    return (
        <div className="flex flex-col space-y-6">
            <Hero />
            <Social />
            <div className="flex flex-col space-y-6 pt-4">
                <h2 className="text-3xl font-semibold tracking-tighter">
                    My Projects
                </h2>
                <Projects />
            </div>
        </div>
    );
}
