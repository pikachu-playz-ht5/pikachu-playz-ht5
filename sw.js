const CACHE_NAME = 'bloxy-tools-cache-v1';
const OFFLINE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://iili.io/fUq31cv.png',
  'https://iili.io/CF1nnPn.png'
];

// Installs system assets securely to memory
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(OFFLINE_ASSETS);
    })
  );
});

// Controls background page request delivery channels
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
