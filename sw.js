if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const l=e=>i(e,r),d={module:{uri:r},exports:t,require:l};s[r]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(o(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-60255312.js",revision:null},{url:"assets/index-6ae34bb3.css",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"index.html",revision:"5d50fe079b8841103e9e63d672fed0c5"},{url:"./icons/icon-144x144.png",revision:"51ac0d4298a3859c8b2420d4cd05d974"},{url:"manifest.webmanifest",revision:"3382a890b74799f5c14b830c86353902"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
