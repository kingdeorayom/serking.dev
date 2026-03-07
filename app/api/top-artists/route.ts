import { topArtists } from "@/lib/spotify";

export async function GET() {
  const response = await topArtists();
  const { items } = await response.json();

  const artists = items.map((artist: any) => ({
    title: artist.name,
    artist: artist.genres.join(", "),
    url: artist.external_urls.spotify,
    coverImage: artist.images[1].url,
  }));

  return new Response(JSON.stringify(artists), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
