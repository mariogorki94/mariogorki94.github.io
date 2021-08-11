'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fb70e3d6ed58ff8fcfcbc8c1b890d9bc",
"assets/assets/res/app_title.png": "b35761791a6474809a9bdf7ba73ac0db",
"assets/assets/res/award.png": "3d65e39f6bcf151af7fe531666ce36e2",
"assets/assets/res/checked.png": "bdb7db8548328e0bbb8f4dc697acca76",
"assets/assets/res/clock.png": "b715566c4d49ae269318c9b90654d48e",
"assets/assets/res/cloud_green_right.png": "efbbd247126e6e8bee9a7f1c6a17ca77",
"assets/assets/res/cloud_grey_left.png": "b1bc61eac4b685e1bcb5d6c43ed6bb18",
"assets/assets/res/correct.png": "447226438e108f375b385edef59124eb",
"assets/assets/res/def/audiobook_default_cover.jpg": "643928fe065df4dedef38d0ba2b1fac0",
"assets/assets/res/def/category_audiobooks_default_icon.png": "c9f8dc5c09f149a1f9291c7493ce18b2",
"assets/assets/res/def/category_default_icon.png": "2479593e6c0b02996acff2ea489cb4b3",
"assets/assets/res/def/category_my_libraries_default_icon.png": "ab24c0dd30c5360cffdf0ac987e3fc96",
"assets/assets/res/def/category_podcasts_default_icon.png": "be80efbac766414fb8f812f12b3ab01e",
"assets/assets/res/def/category_premium_libraries_default_icon.png": "239619eeeae18b893c3802b9c0eeb767",
"assets/assets/res/def/certificate_default_cover.jpg": "209c9a97b970697535014b8c6fd8d42d",
"assets/assets/res/def/certificate_default_icon.png": "2ce1d30502e73fd026557fffeabf9f72",
"assets/assets/res/def/language_default_icon.png": "a29ddedd72abf80c2da2403944ddb25c",
"assets/assets/res/def/library_default_icon.png": "c34a1b85763278d889c62373098838a8",
"assets/assets/res/def/mission_default_icon.png": "2eca910dd2b3cf0fe077e951396ef578",
"assets/assets/res/def/podcast_default_cover.jpg": "c0d77dd752deae8f8f8edbafebf34072",
"assets/assets/res/def/premium_library_defaut_cover.png": "5a826aea54663dedb6398b9af4217b67",
"assets/assets/res/def/subscription_default_cover.png": "cf2e170b2ae7e5043aec7309519c8f32",
"assets/assets/res/email.png": "c15358c27a90b3dca92fe7abda9f80af",
"assets/assets/res/eye_active.png": "552608c0a423134103268d4aa657da84",
"assets/assets/res/eye_inactive.png": "0d11ee9087e533bcb552a5b0fe067c64",
"assets/assets/res/interval.png": "53f02d970ae80efc771c1c871c08d14f",
"assets/assets/res/learn.png": "9a44ade5b1b2959b8ff358b395771e99",
"assets/assets/res/login_cloud1.png": "cb0585027936cbe4b4427616a28c39a0",
"assets/assets/res/login_cloud2.png": "d26720d71705b9de8156e57a3065048e",
"assets/assets/res/login_cloud3.png": "d43e3351d2db6af9a2182f34f2df2041",
"assets/assets/res/nav/certificates.png": "b48d860a0defe7277f45af031e3892bc",
"assets/assets/res/nav/challenges.png": "d106bd65727b1d525379bc4cb40f3aef",
"assets/assets/res/nav/change_avatar.png": "e61c20d24330259bb0019f1dfa856803",
"assets/assets/res/nav/change_language.png": "05433f0a8d46211bf0e738e380b9c2a9",
"assets/assets/res/nav/change_marketing_email.png": "8937463369fff30de3a7d0b5347ffb87",
"assets/assets/res/nav/change_password.png": "585d13b1c2ad1e7190547860161df932",
"assets/assets/res/nav/change_primary_email.png": "1eba5e5c7adf99bac34c88fb746b3072",
"assets/assets/res/nav/change_username.png": "07ec0fd6b7bbcb9d7ae5e141bd0d12e5",
"assets/assets/res/nav/invite_friends.png": "c5f75dc198bfe48142f033112b5b3f80",
"assets/assets/res/nav/logout.png": "dc5f3e951a1e892a5617f5f502f7d96a",
"assets/assets/res/nav/my_cards.png": "491579e90f070c683a2a184a5ea827ca",
"assets/assets/res/nav/personal_details.png": "ca2646e7f08f136ceed5c85c127e7df1",
"assets/assets/res/nav/preferences.png": "ee2df184de640f5fbf0d9a45aa274761",
"assets/assets/res/nav/privacy_policy.png": "de062fb0be0e65f7406c6b7d228c070e",
"assets/assets/res/nav/store.png": "f5c528a1c91c844cd9140b5a8b99c9a0",
"assets/assets/res/nav/subscriptions.png": "b56a0f29419a459f080c76ebce85f922",
"assets/assets/res/notification_monkey.png": "fa7632d35c959f3a366ca7457d020d4a",
"assets/assets/res/perfect_test_background.png": "aba326773ac2955d94fe197e39fb8cc5",
"assets/assets/res/random.png": "8377526905a0e826a98ea5311946e499",
"assets/assets/res/repeat.png": "7a74d22142da4ec9c5da4d5293aeaa9a",
"assets/assets/res/settings.png": "f93eaaa3771c258da8ce51a047472bd0",
"assets/assets/res/share.png": "aa5a57feaf5b3303895863731c64bd75",
"assets/assets/res/star_fill.png": "b1aedfbba476ea5d4e693f78c7e5b7e6",
"assets/assets/res/star_outline.png": "eb5f22c4376bcc725016a32003fa10e1",
"assets/assets/res/test.png": "800f52508f4ae3c22a5e899139100dd1",
"assets/assets/res/train.png": "e31cc2a4709a22e85c4de58b9d5f5a32",
"assets/assets/res/worddio_logo.png": "4f6b7cf23be8323736fc0969962e4bc4",
"assets/assets/res/wrong.png": "3b6d91f4a238f40667d0cc6bedebb9f6",
"assets/assets/res/wrong_test_background.png": "95bff07cf33362cf1ae7fb626c3b6f2b",
"assets/assets/translations/en.json": "3749b9ae3e07d8bc8682c4a24c98a7f4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/google_fonts/Lato-Black.ttf": "e631d2735799aa943d93d301abf423d2",
"assets/google_fonts/Lato-BlackItalic.ttf": "2e26a9163cb4974dcba1bea5107d4492",
"assets/google_fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/google_fonts/Lato-BoldItalic.ttf": "f98d18040a766b7bc4884b8fcc154550",
"assets/google_fonts/Lato-Italic.ttf": "7582e823ef0d702969ea0cce9afb326d",
"assets/google_fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"assets/google_fonts/Lato-LightItalic.ttf": "4d80ac573c53d192dafd99fdd6aa01e9",
"assets/google_fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/google_fonts/Lato-Thin.ttf": "9a77fbaa85fa42b73e3b96399daf49c5",
"assets/google_fonts/Lato-ThinItalic.ttf": "4ac7208bbe0e3593ce9464f013607751",
"assets/google_fonts/OFL.txt": "99aa8fee7ed71044ae773b92d79ab24c",
"assets/NOTICES": "43241aa2f19ff396f7835c8d4d5f8b86",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "afc2959e002f6b3eedaedc399ebf3335",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2f163102bef88e963f505957235e71bf",
"/": "2f163102bef88e963f505957235e71bf",
"main.dart.js": "ebcf47fdecbe8ea7b7c4f0455fce803c",
"manifest.json": "3e6a035beb9dc9d4fc00514c626b6544",
"sql-wasm.js": "8ffd545d7b00ab4de0b2d0492f555ac7",
"sql-wasm.wasm": "e96391fc594b5869546a3cdac4e76b10",
"version.json": "ed0bf383e8c27a4e0a1678a5279ff051"
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
