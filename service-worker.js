self.addEventListener('install', function (e) {
  console.log('PWA Service Worker installed.');
});

self.addEventListener('fetch', function (event) {
  // 可加上快取邏輯，目前先保持空殼
});
