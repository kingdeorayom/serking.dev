import TopArtists from "@/components/spotify/TopArtists";
import TopTracks from "@/components/spotify/TopTracks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music - Serking de Orayom",
  description: "Software Engineer",
};

export default function MusicPage() {
  return (
    <div className="flex flex-col space-y-6">
      <TopArtists />
      <TopTracks />
    </div>
  );
}
