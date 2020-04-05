import { precacheAndRoute } from 'workbox-precaching';

declare var self: WorkerGlobalScope & typeof globalThis;

precacheAndRoute(self.__WB_MANIFEST);
