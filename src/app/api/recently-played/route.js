import { topTracks } from "@/lib/spotify";

export async function GET() {
    const response = await topTracks();
    const { items } = await response.json();

    const tracks = items.slice(0, 5).map((track) => ({
        title: track.name,
        artist: track.artists.map((_artist) => _artist.name).join(", "),
        url: track.external_urls.spotify,
        coverImage: track.album.images[1],
    }));

    return new Response(JSON.stringify(tracks), {
        status: 200,
        headers: {
            // "Cache-Control":
            //     "public, s-maxage=86400, stale-while-revalidate=43200",
            "Content-Type": "application/json",
        },
    });
}
