import MUSIC_ACTIVITIES from "@/data/music_activities";
import MusicCard from "./MusicCard";

const Music = () => {
    return (
        <div className="my-5 mx-2">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {MUSIC_ACTIVITIES.map((activity) => (
                    <MusicCard key={activity.id} activity={activity} />
                ))}
            </ol>
        </div>
    );
};

export default Music;
