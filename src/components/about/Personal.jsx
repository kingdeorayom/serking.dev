import Gallery from "../ui/Gallery";
import Separator from "../ui/Separator";
import Recommendations from "./Recommendations";

const Personal = () => {
    return (
        <section className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-6">
                <h2 className="font-medium text-xl tracking-tighter">
                    Outside of work
                </h2>
                <p>
                    When I'm not at work, I immerse myself in my favorite
                    activities: reading books, listening to music, playing video
                    games, binge-watching movies, TV shows, and anime, or
                    enjoying quality time with friends and family.
                </p>
            </div>
            <Gallery />
            <Separator />
            <Recommendations />
        </section>
    );
};

export default Personal;
