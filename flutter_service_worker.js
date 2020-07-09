'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "45c3e0c8e0425bdf9a661923b8f4bc21",
"assets/assets/audio/sample.mp3": "890f1837fd0ebff89f4e9a93b0e6d71d",
"assets/assets/bear.png": "8f282fb18c45fcb2c72ce0f6c84d9ff8",
"assets/assets/bird.png": "20ad8a8736e89f3744c7ade4f2ef93fd",
"assets/assets/cat.png": "479ead8b4006ddfe5139a358a3ff7ae3",
"assets/assets/crab.png": "4f47a2255f9852e90db5f88592f44e58",
"assets/assets/crocodile.png": "8b5c0804ff579468f452c0c50160ff70",
"assets/assets/dalmatian.png": "8f42efbed21b62b975fc3e2be9fa8e11",
"assets/assets/elephant.png": "cc3d6df1c98c623ddbadae6edbafef86",
"assets/assets/farm.png": "33f973c625e9f7f6c4fb6edd2334f893",
"assets/assets/fish.png": "7401da5101e1f46fc9138748b1fd87ca",
"assets/assets/fox.png": "7c7100c52bf7a13b77f5ad694e0fd6a1",
"assets/assets/giraffe.png": "447b55c7a18920b553f702584ab7846e",
"assets/assets/goat.png": "a6b0daa748d7b798041391343035d2f2",
"assets/assets/hippo.png": "45149186b1e8b35aaea4e875c93b4d03",
"assets/assets/horse.png": "5d90bea4d9c87e699d74ce710022a942",
"assets/assets/jungle.png": "49c13121cf0f13b2978ccf0b4b391fcd",
"assets/assets/kangaroo.png": "708d6cc26231b92d55f3c5c22c2b237e",
"assets/assets/lion.png": "aa42cbae0f6c18acf16f83e7b79031ff",
"assets/assets/monkey.png": "09b153b10e0eca1d5886aae0d5269e06",
"assets/assets/mouse.png": "f582b28f5ec0475026490799ddf50c71",
"assets/assets/parrot.png": "7077c4a2c65cdd58d73fcf55a0baf938",
"assets/assets/pig.png": "f5e55468980ccc8cb3f13d91c70f0258",
"assets/assets/rabbit.png": "a95a62f51c12d068ad391e2653326b01",
"assets/assets/seal.png": "6f88e388a9ef08ad843a47f4a003f3a9",
"assets/assets/shark.png": "74b04c9455d3d3286a8b2dad0a7eda35",
"assets/assets/snake.png": "bd988549c7ac2dc3cbf18924f8465024",
"assets/assets/tiger.png": "99dcf6fcfe79f9f238bb472e3076e210",
"assets/assets/zebra.png": "8bf9fb337784653b430f0e61d32485b6",
"assets/FontManifest.json": "d7ac4999ea2351e16eaf500b44b94de2",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/montserrat/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/fonts/montserrat/Montserrat-BlackItalic.ttf": "d9b6ba595b059fc5d48e8f52c30f73b3",
"assets/fonts/montserrat/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/montserrat/Montserrat-BoldItalic.ttf": "1b38414956c666bd1df78fe5b9c84756",
"assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf": "52a50ca037f2f96fa567404dc3c5bdfb",
"assets/fonts/montserrat/Montserrat-ExtraLight.ttf": "570a244cacd3d78b8c75ac5dd622f537",
"assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf": "1170df5548b7e238df5fa14b6f1a753e",
"assets/fonts/montserrat/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/fonts/montserrat/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/fonts/montserrat/Montserrat-LightItalic.ttf": "01c4560c9c15069b6700ce7ad2e49a9c",
"assets/fonts/montserrat/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/fonts/montserrat/Montserrat-MediumItalic.ttf": "40a74702035bf9ef19053c84ce9a58b9",
"assets/fonts/montserrat/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/montserrat/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf": "83c1ec1f1db9a6416791f7d9d29536f2",
"assets/fonts/montserrat/Montserrat-Thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/fonts/montserrat/Montserrat-ThinItalic.ttf": "3c2b290f95cd5b33c3ead2911064a2ab",
"assets/fonts/open_sans/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/fonts/open_sans/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/fonts/open_sans/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/fonts/open_sans/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/fonts/open_sans/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/fonts/Raleway-Black.ttf": "46818ebd4f76c4e6fe9b030dbc74f5cf",
"assets/fonts/Raleway-BlackItalic.ttf": "956d40aa9747deb39f8b93793803bc9d",
"assets/fonts/Raleway-Bold.ttf": "f49f3d2d9df5013c9bfaab7e3d39ee57",
"assets/fonts/Raleway-BoldItalic.ttf": "400d6e7c7df487961a0f1426a73fff68",
"assets/fonts/Raleway-ExtraBold.ttf": "be3bf63a30b4523ae221bd4358b13e8f",
"assets/fonts/Raleway-ExtraBoldItalic.ttf": "05c7000a5498523bbd184902d124c382",
"assets/fonts/Raleway-ExtraLight.ttf": "d2a8929f630cba5875d97a5f34da6162",
"assets/fonts/Raleway-ExtraLightItalic.ttf": "c8c27816a4b4b6fdfd4a8c944bd2c8ff",
"assets/fonts/Raleway-Italic.ttf": "b43297391b7d5d5d7b135958668c1876",
"assets/fonts/Raleway-Light.ttf": "466d154fedd98f85c9deb363ccf859a7",
"assets/fonts/Raleway-LightItalic.ttf": "e2a70086178378a6165ad7b032ee1077",
"assets/fonts/Raleway-Medium.ttf": "bb5ae98e4ce1a64042093dc235c305ed",
"assets/fonts/Raleway-MediumItalic.ttf": "d3aded9f5da961c952a9c6c41d77f681",
"assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/fonts/Raleway-SemiBold.ttf": "5a25c50b181b07279489ce5bb6a9545c",
"assets/fonts/Raleway-SemiBoldItalic.ttf": "b8ea2e82df9aeaf774c081dffb3b46e8",
"assets/fonts/Raleway-Thin.ttf": "5faedfece17998f456bf5b32b100b597",
"assets/fonts/Raleway-ThinItalic.ttf": "b4fdd9b19ccaa454c97e1ba2b1364815",
"assets/NOTICES": "5a2b3fb1f78cd3e6d4b70c65e37fa839",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"howler.js": "2bba823e6b4d71ea019d81d384672823",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ad04e7ea1bd343a60abc132ec2815295",
"/": "ad04e7ea1bd343a60abc132ec2815295",
"main.dart.js": "f769a85bbfb4feda83dd542c25f3bed5",
"manifest.json": "40cc96e86f5b3a6a735669b2c2f89070"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
