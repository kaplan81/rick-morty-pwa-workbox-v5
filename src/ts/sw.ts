import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';

declare var self: WorkerGlobalScope & typeof globalThis;

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  /https:\/\/rickandmortyapi.com\/api\/character(?!\/avatar)/,
  new NetworkFirst({
    cacheName: 'rickandmortyapi-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 20,
      }),
    ],
  }),
);

registerRoute(
  /https:\/\/rickandmortyapi\.com\/api\/character\/avatar\/(.+)\.(?:jpeg|jpg)/,
  new StaleWhileRevalidate({
    cacheName: 'avatar-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
      }),
    ],
  }),
);
