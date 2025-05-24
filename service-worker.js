self.addEventListener("install", e => {
    e.waitUntill(
        caches.open("pdf-site-cache").then(cache => {
            return cache.addAll([
                "./",
                "./index.html",
                "./styles.css",
                "./manifest.json",
                "./icons/icon-192.png",
                "./icons/icon-512.png",
                "./dashboard.html",
                "./maths.html",
                "./physics.html",
                "./GNS2.html",
                "./GNS6.html",
                "./script.js",
                "./signup.html",
                "./dashboard.css",
                "./gns.css",
                "./maths.css"

            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
                })
    );
});