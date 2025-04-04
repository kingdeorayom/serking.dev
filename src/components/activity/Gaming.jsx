import GamingCard from "./GamingCard";
import GAMING_ACTIVITIES from "@/data/gaming_activities";

const Gaming = () => {
    return (
        <section className="mx-2 my-5 flex flex-col space-y-8">
            <p>Video games I usually play.</p>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {GAMING_ACTIVITIES.map((activity) => (
                    <GamingCard key={activity.id} activity={activity} />
                ))}
            </ol>
        </section>
    );
};

export default Gaming;
