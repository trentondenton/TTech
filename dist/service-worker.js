if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let o={};const t=e=>i(e,s),d={module:{uri:s},exports:o,require:t};n[s]=Promise.all(r.map((e=>d[e]||t(e)))).then((e=>(l(...e),o)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"1d92439c9fd66e81ead9.png",revision:null},{url:"2e9d916a5e83d2b258ec.png",revision:null},{url:"5e56145191e3ea69a539.png",revision:null},{url:"8e24a6e50a9c0889a13d.jpg",revision:null},{url:"d5d9c61244274f5d3ba3.png",revision:null},{url:"index.html",revision:"494f8d54d43ec1c5fe66b14a419724e2"},{url:"main.js",revision:"0ae2573aa8ac8d47d89c908772139411"},{url:"main.js.LICENSE.txt",revision:"f1c657f38def6eca0cb82a34c1715086"}],{})}));