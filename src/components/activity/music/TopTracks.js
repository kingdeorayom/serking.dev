import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useSWR from "swr";
import MusicCard from "./MusicCard";

const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json();
};

const TopTracks = () => {
    const { data: MUSIC_ACTIVITIES, error } = useSWR(
        "/api/top-tracks",
        fetcher,
        {}
    );

    if (!MUSIC_ACTIVITIES)
        return (
            <div className="flex items-center justify-center">
                <AiOutlineLoading3Quarters className="animate-spin" />
            </div>
        );

    if (error) return null;

    return (
        <>
            <p>
                My top tracks on Spotify. If you know these, we&apos;ll
                definitely be on the same wavelength.
            </p>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {MUSIC_ACTIVITIES.map((activity) => (
                    <MusicCard key={activity.url} activity={activity} />
                ))}
            </ol>
        </>
    );
};

export default TopTracks;
