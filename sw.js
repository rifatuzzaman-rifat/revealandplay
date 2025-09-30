// Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('bedroom-bliss-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/play.html',
        '/preferences.html',
        '/stats.html',
        '/manifest.json',
        'https://cdn.tailwindcss.com',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap',
        'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});