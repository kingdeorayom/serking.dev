import CurrentlyPlaying from "./music/CurrentlyPlaying";
import TopTracks from "./music/TopTracks";

const Music = () => {
    return (
        <div className="my-5 mx-2 space-y-12">
            <CurrentlyPlaying />
            <TopTracks />
        </div>
    );
};

export default Music;
