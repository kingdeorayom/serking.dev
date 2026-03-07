"use client";

import { Track } from "@/types/spotify";
import { fetcher } from "@/utils/fetcher";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const TopTracks = () => {
  const { data: TOP_TRACKS, error } = useSWR<Track[]>(
    "/api/top-tracks",
    fetcher,
    {}
  );

  if (!TOP_TRACKS || error) return null;

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-xl md:text-xl font-medium">Top Tracks</h3>
      <ol className="flex flex-col space-y-2">
        {TOP_TRACKS.map((track, index) => (
          <li key={track.title} className="flex items-center gap-3">
            <span className="w-5 tabular-nums">{index + 1}</span>
            <div>
              <Image
                src={track.coverImage.url}
                alt={track.title}
                width={32}
                height={32}
                className="rounded"
              />
            </div>
            <div className="flex flex-col">
              <Link
                href={track.url}
                className="hover:underline font-semibold"
                target="_blank"
              >
                {track.title}
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {track.artist}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TopTracks;
