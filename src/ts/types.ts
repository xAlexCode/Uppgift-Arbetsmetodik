export interface IPodcast {
  name: string;
  description: string;
  programurl: string;
  socialimage: string;
}

export interface IPodcastResponse {
  programs: IPodcast[];
}
