const CACHE_NAME = "star-dodge-iphone-v2";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./assets/icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((names) => Promise.all(names.map((name) => name !== CACHE_NAME ? caches.delete(name) : null))));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
