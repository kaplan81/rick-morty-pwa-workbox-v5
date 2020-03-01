export interface CharacterList {
  info: {
    count: number;
    pages: 25;
    next: string;
    prev: string;
  };
  results: CharacterDetail[];
}

export interface CharacterDetail {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface CharacterCard {
  caption: HTMLElement;
  figure: HTMLElement;
  image: HTMLElement;
  placeholderImage: HTMLElement;
}
