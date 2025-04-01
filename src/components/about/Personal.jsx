import Gallery from "../ui/Gallery";
import Separator from "../ui/Separator";
import Recommendations from "./Recommendations";

const Personal = () => {
    return (
        <div className="flex flex-col gap-y-6">
            <h2 className="font-medium text-xl tracking-tighter">
                Outside of work
            </h2>

            {/* <p>
                As a kid, books and video games were my companions, shaping my
                imagination and fueling my curiosity. The love affair with
                literature and video gaming started early, creating a parallel
                universe where stories unfolded in the pages of countless books
                and games. It was more than a pastime; it was a lifelong love
                affair with video games and the written word.
            </p> */}

            <p>
                When I'm not at work, I immerse myself in my favorite
                activities: reading books, listening to music, playing video
                games, binge-watching movies, TV shows, and anime, or enjoying
                quality time with friends and family.
            </p>

            <Gallery />

            <Separator />
            <Recommendations />
        </div>
    );
};

export default Personal;
