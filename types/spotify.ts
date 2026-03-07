export type CoverImage = {
  height: number;
  width: number;
  url: string;
};

export interface Track {
  title: string;
  artist: string;
  coverImage: CoverImage;
  url: string;
}

export interface Artist {
  title: string;
  artist: string;
  coverImage: string;
  url: string;
}
