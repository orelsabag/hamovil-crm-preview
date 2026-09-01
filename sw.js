/* Minimal service worker — required for installability. Network-first
 * passthrough, no caching: the CRM is a live single-page app and stale
 * HTML after a deploy is worse than no offline mode. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
