/* HWL Admin app: always uses the live server (nothing is stored offline), so what you see is never out of date. */
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () { /* network only */ });
