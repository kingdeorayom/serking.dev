import Image from "next/image";
import Separator from "../ui/Separator";
import Recommendations from "./Recommendations";
import setup from "/public/images/about/setup.jpg";

const Personal = () => {
    return (
        <>
            <h2 className="font-medium text-xl tracking-tighter">
                Outside of work
            </h2>

            <div className="py-6">
                <Image
                    alt="Work and Gaming Setup"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={setup}
                />
            </div>

            <p>
                As a kid, books and video games were my companions, shaping my
                imagination and fueling my curiosity. The love affair with
                literature and video gaming started early, creating a parallel
                universe where stories unfolded in the pages of countless books
                and games. It was more than a pastime; it was a lifelong love
                affair with video games and the written word.
            </p>

            <p>
                These days, I spend most of my free time reading books,
                listening to music, playing video games or watching movies, TV
                series or anime.
            </p>

            <p>If time permits, I also hang out with my friends and family.</p>
            <Separator />
            <Recommendations />
        </>
    );
};

export default Personal;
