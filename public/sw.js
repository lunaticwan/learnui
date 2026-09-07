/* Learn UI Name — service worker. */
var VERSION = "v1.0.0";
var SHELL = "learnui-shell-" + VERSION;
var PAGES = "learnui-pages-" + VERSION;

var PRECACHE = [
  "/",
  "/manifest.webmanifest",
  "/assets/site.css",
  "/assets/fonts/geist-vf.woff2",
  "/assets/fonts/geist-mono-vf.woff2",
  "/assets/icons/favicon.svg",
  "/assets/icons/icon-192.png",
  "/assets/icons/icon-512.png",
  "/assets/icons/apple-touch-icon.png"
];

self.addEventListener("install", function (ev) {
  ev.waitUntil(
    caches.open(SHELL).then(function (c) {
      return c.addAll(PRECACHE).catch(function (err) {
        console.warn("SW precache partial fail", err);
      });
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (ev) {
  ev.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== SHELL && k !== PAGES) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (ev) {
  var req = ev.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Static assets: cache-first, then network (and fill cache).
  if (url.pathname.indexOf("/assets/") === 0 || url.pathname === "/manifest.webmanifest") {
    ev.respondWith(
      caches.match(req).then(function (hit) {
        return hit || fetch(req).then(function (res) {
          if (res.ok) {
            var copy = res.clone();
            caches.open(SHELL).then(function (c) { c.put(req, copy); });
          }
          return res;
        });
      })
    );
    return;
  }

  // Pages: network-first, fall back to cache, then to cached home index.html.
  if (req.mode === "navigate" || (req.headers.get("accept") || "").indexOf("text/html") !== -1) {
    ev.respondWith(
      fetch(req).then(function (res) {
        if (res.ok) {
          var copy = res.clone();
          caches.open(PAGES).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || caches.match("/");
        });
      })
    );
  }
});
