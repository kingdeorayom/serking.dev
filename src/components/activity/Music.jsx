import CurrentlyPlaying from "./music/CurrentlyPlaying";
import TopTracks from "./music/TopTracks";

const Music = () => {
    return (
        <div className="mx-2 my-5 flex flex-col space-y-12">
            <CurrentlyPlaying />
            <TopTracks />
        </div>
    );
};

export default Music;
