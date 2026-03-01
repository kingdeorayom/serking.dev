import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music - Serking de Orayom",
  description: "Software Engineer",
};

const SAMPLE_TOP_ARTISTS = [
  {
    name: "John Lennon",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    name: "The Beatles",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    name: "Queen",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    name: "David Bowie",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    name: "Elton John",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    name: "Billy Joel",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    name: "ABBA",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    name: "The Rolling Stones",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    name: "Fleetwood Mac",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    name: "Michael Jackson",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
];

const SAMPLE_TOP_TRACKS = [
  {
    title: "Imagine",
    artist: "John Lennon",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    title: "Space Oddity",
    artist: "David Bowie",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    title: "Hey Jude",
    artist: "The Beatles",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    title: "Rocket Man",
    artist: "Elton John",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    title: "Piano Man",
    artist: "Billy Joel",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    title: "Dancing Queen",
    artist: "ABBA",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    title: "Paint It Black",
    artist: "The Rolling Stones",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    title: "Dreams",
    artist: "Fleetwood Mac",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
  {
    title: "Billie Jean",
    artist: "Michael Jackson",
    image: "https://i.scdn.co/image/ab6761610000e5ebc8a1b9f1c9e7b2a1c8e4f",
  },
];

export default function MusicPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl md:text-xl font-medium">Top Artists</h3>
        <ol className="flex flex-col space-y-2">
          {SAMPLE_TOP_ARTISTS.map((artist, index) => (
            <li key={artist.name} className="flex items-center gap-3">
              <span className="w-5 tabular-nums">{index + 1}</span>
              <div className="h-8 w-8 animate-pulse bg-gray-600 rounded-full" />
              <p className="font-semibold">{artist.name}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl md:text-xl font-medium">Top Tracks</h3>
        <ol className="flex flex-col space-y-2">
          {SAMPLE_TOP_TRACKS.map((track, index) => (
            <li key={track.title} className="flex items-center gap-3">
              <span className="w-5 tabular-nums">{index + 1}</span>
              <div className="h-8 w-8 animate-pulse bg-gray-600 rounded" />
              <div className="flex flex-col">
                <p className="font-semibold">{track.title}</p>
                <p className="text-sm text-gray-500">{track.artist}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
