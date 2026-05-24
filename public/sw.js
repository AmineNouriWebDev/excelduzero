self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Simple pass-through fetch handler pour satisfaire les critères PWA
  event.respondWith(fetch(event.request));
});
