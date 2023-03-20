var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './sobre.html',
        './menu.html',
        './chefs.html',
        './sample-inner-page.html',

        './assets/img/favicon.png',
        './assets/img/apple-touch-icon.png',
        './assets/js/main.js',


        './assets/css/main.css',
        './assets/img/hero-img.png',
        './assets/img/about-2.jpg',
        './assets/img/menu/menu-item-1.png',
        './assets/img/menu/menu-item-2.png',
        './assets/img/menu/menu-item-3.png',
        './assets/img/menu/menu-item-4.png',
        './assets/img/menu/menu-item-5.png',
        './assets/img/menu/menu-item-6.png',
        './assets/img/chefs/chefs-1.jpg',
        './assets/img/chefs/chefs-2.jpg',
        './assets/img/chefs/chefs-3.jpg',
        
        './assets/vendor/bootstrap/css/bootstrap.min.css'
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});