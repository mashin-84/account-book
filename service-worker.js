// 安裝階段
self.addEventListener('install', function (event) {
  console.log('✅ Service Worker 已安裝');
});

// 啟用階段
self.addEventListener('activate', function (event) {
  console.log('✅ Service Worker 已啟用');
});

// fetch 階段（目前不快取，只是讓 PWA 可運行）
self.addEventListener('fetch', function (event) {
  // 這裡可加入快取邏輯（進階功能），目前先 pass
});
