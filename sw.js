const CACHE="btstp-pilot-v3-brand";
self.addEventListener("install",e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./","./index.html","./manifest.webmanifest","./logo-bts-tp-pilot.png"])));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",e=>{
  if(e.request.url.includes("googleapis.com")||e.request.url.includes("accounts.google.com")) return;
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
