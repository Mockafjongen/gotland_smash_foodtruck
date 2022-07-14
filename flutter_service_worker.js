'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1a04a9802bb241c8e51f2a9a7c3de7e7",
".git/config": "c4f5ce17d62d9ce3d5561c9435ea293a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "710cb9665ddfe63d0dd55a9a00d0cb60",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2f050ace665149dead1af36fb887570",
".git/logs/refs/heads/master": "d2f050ace665149dead1af36fb887570",
".git/logs/refs/remotes/origin/master": "eb6f2fab4a9f581088722afd69cc744e",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/0c/3b8cc19e9ced694cd9d027890428bce8a9be1e": "7a0f3efbfbde55e07aa2429beed17853",
".git/objects/0e/a76173aff6096b16fc9102eab5e8c3185df206": "85f4f817f8c50187884cc4247792b9f4",
".git/objects/16/40fe9282bba33fe4702cd70b8b8e0793812fa8": "16bea43c9e4cf9b9bf1f9d83752e3979",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/1b/d99ac0970aa36c7c0a8564ad3caf3e166106ff": "d75b9bdf44b62b1e915055d407b12151",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/21/343baf3a77ddd7df7e506471e854eff282b53b": "7cd30749fd45d1c69782cc5a9a4afd74",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/26/59bc278be657d4315fe4664d44bea35a0007a9": "d13fe920601bd30c1bb1f32f1111c2ca",
".git/objects/27/969710a77ec9a3ca78d6418196589418c79e15": "6850a4941f76a23ca51611881429e69c",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/30/8cd9fa292a217e7a775ba397fddbcb8a8d918c": "ee6e62a5937bc589069713c5d8cf3921",
".git/objects/39/0843f95d4e088503b46ceb8d480ea0bcb653a8": "6d16422e8ce2036420c1c56da6a0ce04",
".git/objects/39/8839d6828d4e373bea8217807a3f1acf07c066": "70f8756120040058f441de798b0c977c",
".git/objects/3d/72070cc943dc24de4d7fe557715e46897370b6": "19c0835ee3a183b5c82b375e75965705",
".git/objects/3d/c0c678a835c874c64db1c2c755cb0600282d26": "6032ac2cd08d3ee97e25fccc2a9a4699",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/56/227e263339481adc94423fa38cc6d590d800d1": "c89eabb84bd534946ae6e83e84246455",
".git/objects/5a/eee55b614ed249c06b822ac3a7f2c61f460f6a": "47a19706030a43875158a8eabe7beaf9",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/79/92a3aa0c5f67b163adf8e950f56032d8fe1f78": "5a4e13cab9325323dd40ad2ab046972a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/7e/fa4d797d0328c10aa6b034044bbcf6c1cfeded": "dfb1f42a46e34d5a44bbf1357231ac1b",
".git/objects/82/226eebb1d358d398b730841e7c19b9f965bcd0": "33df67da5c90792cd0f345f79aa76874",
".git/objects/82/238af25cb51b7da1dd769164e4f072b6535df1": "7d3119b56091695a1536b38b64fef7fc",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/e016ff2e25d4ee5a15d6c4ce18cf4ce0465eee": "143323a3600bc9cc4626cede27b2c45d",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/c3f99021efff81aa56b52a2a3ffba599616be4": "e0155420cc82935833d5b89acca8d4b1",
".git/objects/a6/5edbca5a2590e5e06b9a588de49c7968302af0": "e4e7269c905cc46ea318fc8b5cb7ecd6",
".git/objects/ab/cc82216d797b2fd767ca073dad85a248612e78": "976492a575a23f497d119219926201f4",
".git/objects/b2/65a7004866fd3c2f47d3a89d14b2911a938a5a": "01a35afc075a62fcf06246561279b04c",
".git/objects/be/368a20d51e7413f9ff90b187740da30fa4e8f3": "d06624229c2a8c7bc46753c1baa8649e",
".git/objects/c2/34b9feb49fd754ce9cf95fb31b59e4064124b7": "548c5550f5142e8a18f8c9488c103f20",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/5ee038530291be2aae55be7d4f81a949159746": "edbba671d18e6727b1b139bd97ff0c5a",
".git/objects/c6/54d0abd030feca09fee9bcb654c7211235e301": "e0c7120202807467fbc4184b20b3845e",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d0/d9e5c1290adc0eec35354211e5a8c93ffcad13": "feb1b9c7d0c9d1902978f3e8f45fab4a",
".git/objects/d7/718ceabb89cd5c98482b0bd9b7f7036cec6aeb": "eaaec791d07bb030fe5ae01b011e92d4",
".git/objects/de/c1fcbfbec4ef7ad77f9e7ce5f18b2214d2ba7f": "be08e141e1f6eaaea7281620bea6a315",
".git/objects/e4/c433c9da30e06a3aed737ce4d867c893e06088": "164a3b2b33b776521a255f8f1432b421",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/fa/e70f6e55bf907ec161468e50611d8288baf653": "2f0944bffa563f9b4b5d245904034229",
".git/refs/heads/master": "4cb93cdc4b4c4f05f371c96144b983f2",
".git/refs/remotes/origin/master": "4cb93cdc4b4c4f05f371c96144b983f2",
"404.html": "e1fadb2521c20e2b1f2df7e7ca51dc0e",
"assets/AssetManifest.json": "d68157bdf6768fe02fb72afc163eaecd",
"assets/assets/background.jpg": "0f601a488e1d986b6e8d504372220b88",
"assets/assets/burger1.png": "8b7fd946385face8ff6488c19d32a3bb",
"assets/assets/burger2.png": "bb1963e4095bec439b91578d558f64f1",
"assets/assets/burger3.png": "c86fb94e33d353c9f21d195ed9254532",
"assets/assets/burger4.png": "ec1c34b32eacb7ad6e538d4d85f57325",
"assets/assets/logo.png": "b1fd222414aa45c94bfeb4f712cddec7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "59197778b578883d4ca8a3cc21f5bbd7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "f30667738318e22c63f3ce1a49be6e99",
"icons/Icon-192.png": "13d4724dd854777e815ca5e74f07f37b",
"icons/Icon-512.png": "d32744d05e91074d12d7b4ee71b27f3b",
"index.html": "9c444881c13cf20f0958a7bc5012e869",
"/": "9c444881c13cf20f0958a7bc5012e869",
"main.dart.js": "12b1a967f414f15ba6309e91d88a0a8f",
"manifest.json": "c581f74f0d689ff2d2f3447834aadc29",
"version.json": "1356d4e648283275ca231fc23f5b8452"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
