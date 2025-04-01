import Image from "next/image";
import serkingdeorayom from "../../../public/images/me/serking-de-orayom-full.jpg";

const Introduction = () => {
    return (
        <>
            <h2 className="font-medium text-2xl tracking-tighter">
                Get to know me more
            </h2>
            <div className="flex items-center justify-start py-5">
                <Image
                    className="rounded-2xl dark:border dark:border-white/10 h-52 w-52"
                    src={serkingdeorayom}
                    alt="Serking de Orayom"
                />
            </div>
            <p>
                When I&apos;m not at work, I immerse myself in my favorite
                activities: reading books, listening to music, playing video
                games, binge-watching movies, TV shows, and anime, or enjoying
                quality time with friends and family.
            </p>
        </>
    );
};

export default Introduction;
