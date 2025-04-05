import Loading from "@/components/ui/Loading";
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

    if (!MUSIC_ACTIVITIES) return <Loading />;

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
