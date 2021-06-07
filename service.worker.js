/* eslint-disable no-restricted-globals */
const cacheName = 'ahj-workers';
const files = [
  './',
  './bundle.js',
  './main.css',
];

async function putFilesToCache(data) {
  const cache = await caches.open(cacheName);
  await cache.addAll(data);
}

async function removeOldCache(retain) {
  const keys = await caches.keys();
  return Promise.all(
    keys.filter((key) => !retain.includes(key))
      .map((key) => caches.delete(key)),
  );
}

self.addEventListener('install', (event) => {
  console.log('Servise worker Установлен');
  event.waitUntil((async () => {
    await putFilesToCache(files);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  console.log('Service worker Активирован');
  event.waitUntil((async () => {
    await removeOldCache([cacheName]);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  console.log('Происходит запрос на сервер', event);
  event.respondWith((async () => {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(event.request);

    if (cachedResponse) {
      return cachedResponse;
    }
    return fetch(event.request);
  })());
});

self.addEventListener('error', (event) => {
  console.log('Ошибка', event);
});
