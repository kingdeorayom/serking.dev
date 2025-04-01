"use client";
// components/home/CurrentlyPlaying.js

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

    if (!CURRENTLY_PLAYING) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;

    // console.log(data);

    return (
        <div className="space-y-8">
            <p>Currently Playing</p>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <MusicCard activity={CURRENTLY_PLAYING} />
            </ol>
            {/* <p>Title: {data.title}</p>
      <p>Artist: {data.artist}</p>
      <p>Album: {data.album}</p>
      <img src={data.albumImageUrl} alt={data.album} />
      <a href={data.songUrl} target="_blank" rel="noopener noreferrer">
        Listen on Spotify
      </a> */}
        </div>
    );
};

export default CurrentlyPlaying;
