const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!refresh_token) {
    throw new Error("SPOTIFY_REFRESH_TOKEN environment variable is not set");
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const topArtists = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/top/artists?limit=10", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const topTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/top/tracks?limit=10", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const recentlyPlayed = async () => {
  const { access_token } = await getAccessToken();
  return fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
    headers: {
      cache: "no-store",
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken();
  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      cache: "no-store",
      Authorization: `Bearer ${access_token}`,
    },
  });
};
