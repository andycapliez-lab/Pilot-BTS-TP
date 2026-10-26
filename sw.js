const CACHE="btstp-pilot-v4-1";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./","./index.html","./manifest.webmanifest","./logo-bts-tp-pilot.png"])))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.url.includes("googleapis.com")||e.request.url.includes("accounts.google.com"))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
