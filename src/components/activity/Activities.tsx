import Games from "./Games";
import Music from "./Music";

const Activities = () => {
    return (
        <>
            <h2 className="font-medium text-2xl tracking-tighter">
                Recent activities
            </h2>
            <div className="grid xs:grid-cols-2 sm:grid-cols-2 gap-4">
                <Games />
                <Music />
            </div>
            <p className="text-xs font-light">
                I purposefully included only games and music in this space, as
                they occupy nearly all my time throughout the day. Well, aside
                from work, that is.
            </p>
        </>
    );
};

export default Activities;
