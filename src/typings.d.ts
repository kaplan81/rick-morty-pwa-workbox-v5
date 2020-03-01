declare module 'rickmortyapi' {
  export function getEndpoints(): () => any;
  export function getCharacter<T>(opt?: T): Promise<any>;
  export function getLocation<T>(opt?: T): Promise<any>;
  export function getEpisode<T>(opt?: T): Promise<any>;
}
