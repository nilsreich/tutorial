/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "01ab0e157fb61c057ffae5855c9a0814"
  },
  {
    "url": "assets/css/0.styles.480da52e.css",
    "revision": "a6447a01f60df54ab470ef5f45a6a859"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.60da56cc.js",
    "revision": "8f162203a15c4e9af42f3147e918d77f"
  },
  {
    "url": "assets/js/3.4e18a4c0.js",
    "revision": "663083a9ce3abfc7728acb5d02a68f82"
  },
  {
    "url": "assets/js/4.53316f47.js",
    "revision": "02e5d22e8276be31ef4f6de41dd883fe"
  },
  {
    "url": "assets/js/5.331c42fe.js",
    "revision": "c08f303481fd98b6402226421d378526"
  },
  {
    "url": "assets/js/6.dae6f1fc.js",
    "revision": "8dd5a13813d541b1154631e39f002764"
  },
  {
    "url": "assets/js/7.d2274b8d.js",
    "revision": "e5fcdbebb3bdc1650351538165da09b6"
  },
  {
    "url": "assets/js/8.f0bd9550.js",
    "revision": "813f392e58c0a0e2e09db0918a84ff49"
  },
  {
    "url": "assets/js/app.3e335fb6.js",
    "revision": "a212f0678cfc39e14657885c61814820"
  },
  {
    "url": "images/icon.png",
    "revision": "9b277cf76df8ea1c3858df0993f2c57a"
  },
  {
    "url": "index.html",
    "revision": "522439f7a0352d1c38a9837b41117ae0"
  },
  {
    "url": "Page-1.html",
    "revision": "7e3f8c91e8df61f9357e5851016f259c"
  },
  {
    "url": "Page-2.html",
    "revision": "f971c65bfb8ab39cfc2a5662a79fb732"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
