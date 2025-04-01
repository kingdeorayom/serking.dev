import GamingCard from "./GamingCard";
import GAMING_ACTIVITIES from "@/data/gaming_activities";

const Gaming = () => {
    return (
        <div className="my-5 mx-2 space-y-8">
            <p>Video games I usually play.</p>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {GAMING_ACTIVITIES.map((activity) => (
                    <GamingCard key={activity.id} activity={activity} />
                ))}
            </ol>
        </div>
    );
};

export default Gaming;
