// self.addEventListener('fetch', (e) => {
//   console.log(e.request.url);
//   e.respondWith(
//     caches.match(e.request).then((response) => response || fetch(e.request)),
//   );
// });

// New version serviceWorker

const staticCacheName = 's-app-v1'
const dynamicCacheName = 'd-app-v1'

const assetUrls = [
    '/index.html',
    '/static',
    '/index.js'
]

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(assetUrls)
})