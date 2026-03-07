"use client";

import { Artist } from "@/types/spotify";
import { fetcher } from "@/utils/fetcher";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const TopArtists = () => {
  const { data: TOP_ARTISTS, error } = useSWR<Artist[]>(
    "/api/top-artists",
    fetcher,
    {}
  );

  if (!TOP_ARTISTS) return null;

  if (error) return null;

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-xl md:text-xl font-medium">Top Artists</h3>
      <ol className="flex flex-col space-y-2">
        {TOP_ARTISTS.map((artist, index) => (
          <li key={artist.title} className="flex items-center gap-3">
            <span className="w-5 tabular-nums">{index + 1}</span>
            <div>
              <Image
                src={artist.coverImage}
                alt={artist.title}
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <Link
              href={artist.url}
              className="hover:underline font-semibold"
              target="_blank"
            >
              {artist.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TopArtists;
