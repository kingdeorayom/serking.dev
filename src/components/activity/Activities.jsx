import GAMING_ACTIVITIES from "@/data/gaming_activities";
import GamingCard from "./GamingCard";

const Activities = () => {
    return (
        <div className="mx-2 my-5">
            <ol className="relative border-s border-neutral-200 dark:border-gray-700">
                {GAMING_ACTIVITIES.map((activity) => (
                    <GamingCard key={activity.id} activity={activity} />
                ))}
            </ol>
        </div>
    );
};

export default Activities;
