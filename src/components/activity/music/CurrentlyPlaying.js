"use client";

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

const CurrentlyPlaying = () => {
    const { data: CURRENTLY_PLAYING, error } = useSWR(
        "/api/currently-playing",
        fetcher,
        {}
    );

    if (!CURRENTLY_PLAYING) return <Loading />;

    if (error) return null;

    return (
        <div className="flex flex-col space-y-8">
            <p>Currently Playing</p>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <MusicCard activity={CURRENTLY_PLAYING} />
            </ol>
        </div>
    );
};

export default CurrentlyPlaying;
