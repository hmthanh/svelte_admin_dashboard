if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let r={};const o=e=>n(e,l),c={module:{uri:l},exports:r,require:o};s[l]=Promise.all(i.map((e=>c[e]||o(e)))).then((e=>(t(...e),r)))}}define(["./workbox-11b81c2c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-3c3f8cfb.css",revision:null},{url:"assets/index-66cd5767.js",revision:null},{url:"assets/index-ea570f9d.js",revision:null},{url:"assets/pdfmake-c325b48b.js",revision:null},{url:"assets/SimplePieChart-5c52930a.css",revision:null},{url:"assets/SimplePieChart-92dd77b4.js",revision:null},{url:"assets/vfs_fonts-7b67f08d.js",revision:null},{url:"assets/xlsx.core.min-063fcea7.js",revision:null},{url:"index.html",revision:"745b4645c6c2dbc67ef0479d533e1a51"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"c3786e5214b6f075f4392d92afd82ea5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));