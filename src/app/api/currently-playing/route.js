import { currentlyPlayingSong } from "@/lib/spotify";

export async function GET() {
    const response = await currentlyPlayingSong();

    if (response.status === 204 || response.status > 400) {
        return new Response(JSON.stringify({ isPlaying: false }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }

    const song = await response.json();

    if (song.item === null) {
        return new Response(JSON.stringify({ isPlaying: false }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return new Response(
        JSON.stringify({
            album,
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
        }),
        {
            status: 200,
            headers: {
                "Cache-Control":
                    "public, s-maxage=60, stale-while-revalidate=30",
                "Content-Type": "application/json",
            },
        }
    );
}
