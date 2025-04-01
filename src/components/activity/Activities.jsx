import GAMING_ACTIVITIES from "@/data/gaming_activities";
import GamingCard from "./GamingCard";

const Activities = () => {
    return (
        <div className="my-5 mx-2">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {GAMING_ACTIVITIES.map((activity) => (
                    <GamingCard key={activity.id} activity={activity} />
                ))}
            </ol>
        </div>
    );
};

export default Activities;
