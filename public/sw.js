if (!self.define) {
  let e,
    s = {};
  const t = (t, a) => (
    (t = new URL(t + ".js", a).href),
    s[t] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = t), (e.onload = s), document.head.appendChild(e);
        } else (e = t), importScripts(t), s();
      }).then(() => {
        let e = s[t];
        if (!e) throw new Error(`Module ${t} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, n) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let c = {};
    const o = (e) => t(e, i),
      r = { module: { uri: i }, exports: c, require: o };
    s[i] = Promise.all(a.map((e) => r[e] || o(e))).then((e) => (n(...e), c));
  };
}
define(["./workbox-1846d813"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/server/middleware-build-manifest.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/server/middleware-react-loadable-manifest.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/a7ogTtqSCTdE2zSXHXB3X/_buildManifest.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/a7ogTtqSCTdE2zSXHXB3X/_middlewareManifest.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/a7ogTtqSCTdE2zSXHXB3X/_ssgManifest.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/1484b9de.6c558f54c3e8e44b.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/299-1973973237c5ae41.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/633-29f2601b40be4d07.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/743.a420be8db85dfef2.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/837-9009a9fd581a8cea.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/framework-087e577bf6ac2de7.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/main-db8e334a487cf628.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/pages/%5Bslug%5D-4156a319b99c14e0.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/pages/_app-894f3bbd26639d4a.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/pages/_error-1c08ea246196f2ea.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/pages/about-me-1385df5ada5603a0.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/pages/index-3d74199b45cec47d.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/pages/mini-fb6ab5f38649b5b1.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/chunks/webpack-8864ec05a85ecb86.js",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/css/688e7f2e89bc797d.css",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/css/fa9d2fbcdcd078ad.css",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/media/revicons.652e7269.eot",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/media/revicons.b96bdb22.ttf",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/_next/static/media/revicons.ff59b316.woff",
          revision: "a7ogTtqSCTdE2zSXHXB3X",
        },
        {
          url: "/badge-design-nerd.svg",
          revision: "aaf365315315b1e5023ae5995e70b5e4",
        },
        {
          url: "/badge-logo-maker.svg",
          revision: "24ef3f14f3c59804dd3eb090e8e45ee3",
        },
        {
          url: "/badge-more-about-me.svg",
          revision: "4cbf1a3ed7a01b59ea670a2bd56323c4",
        },
        { url: "/favicon.svg", revision: "272f06bec202a783901d8d370e19057a" },
        {
          url: "/icons/apple-icon.png",
          revision: "769fe53df1cd126edc30465cdce5b9ad",
        },
        {
          url: "/icons/icon-192x192.png",
          revision: "b4ba50c07e809067f2d40884b80398d5",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "8595df57fd9e48194f1ea7a7436a5d4a",
        },
        { url: "/manifest.json", revision: "5edf4d413467bc5cc5f469c50eb459fe" },
        {
          url: "/natalia-zaremba-website-logo.svg",
          revision: "aca62bc3c5a30ded1bcbdd3170b15017",
        },
        { url: "/nt.png", revision: "e2c0d33cf70259e3c48143f93a733213" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: t,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
