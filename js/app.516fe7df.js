(function(){"use strict";var n={930:function(n,t,e){e.a(n,(async function(n,o){try{var r=e(9973),c=e(144),i=e(6768),u=e(1017),a=e.n(u),s=(e(895),e(2059),n([r]));r=(s.then?(await s)():s)[0],t.A={name:"BlogPostDetail",props:{postId:{type:String,required:!0}},setup(n){const t=(0,c.KR)(null),e=()=>{fetch(n.postId).then((n=>n.text())).then((n=>{o(n)})).catch((n=>{console.error("Error fetching the file:",n)}))},o=n=>{t.value.innerHTML=(0,r.q)(n),a().highlightAllUnder(t.value)};return(0,i.wB)((()=>n.postId),(()=>{e()})),(0,i.sV)((()=>{e()})),{contentContainer:t}}},o()}catch(l){o(l)}}))},1406:function(n,t,e){e.a(n,(async function(n,t){try{var o=e(5130),r=e(759),c=e(9325),i=n([c]);c=(i.then?(await i)():i)[0],(0,o.Ef)(r.A).use(c.A).mount("#app"),t()}catch(u){t(u)}}))},9973:function(n,t,e){e.a(n,(async function(n,o){try{e.d(t,{q:function(){return c.q}});var r=e(7712),c=e(3215),i=n([r]);r=(i.then?(await i)():i)[0],(0,c.l)(r),o()}catch(u){o(u)}}))},3215:function(n,t,e){e.d(t,{l:function(){return r},q:function(){return g}});e(6573),e(8100),e(7936),e(7467),e(4732),e(9577);let o;function r(n){o=n}n=e.hmd(n);let c=0,i=null;function u(){return null!==i&&0!==i.byteLength||(i=new Uint8Array(o.memory.buffer)),i}const a="undefined"===typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder;let s=new a("utf-8");const l="function"===typeof s.encodeInto?function(n,t){return s.encodeInto(n,t)}:function(n,t){const e=s.encode(n);return t.set(e),{read:n.length,written:e.length}};function f(n,t,e){if(void 0===e){const e=s.encode(n),o=t(e.length,1)>>>0;return u().subarray(o,o+e.length).set(e),c=e.length,o}let o=n.length,r=t(o,1)>>>0;const i=u();let a=0;for(;a<o;a++){const t=n.charCodeAt(a);if(t>127)break;i[r+a]=t}if(a!==o){0!==a&&(n=n.slice(a)),r=e(r,o,o=a+3*n.length,1)>>>0;const t=u().subarray(r+a,r+o),c=l(n,t);a+=c.written,r=e(r,o,a,1)>>>0}return c=a,r}let d=null;function p(){return null!==d&&0!==d.byteLength||(d=new Int32Array(o.memory.buffer)),d}const h="undefined"===typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder;let b=new h("utf-8",{ignoreBOM:!0,fatal:!0});function v(n,t){return n>>>=0,b.decode(u().subarray(n,n+t))}function g(n){let t,e;try{const u=o.__wbindgen_add_to_stack_pointer(-16),a=f(n,o.__wbindgen_malloc,o.__wbindgen_realloc),s=c;o.parse(u,a,s);var r=p()[u/4+0],i=p()[u/4+1];return t=r,e=i,v(r,i)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(t,e,1)}}b.decode()},9325:function(n,t,e){e.a(n,(async function(n,o){try{var r=e(973),c=e(7521),i=e(7001),u=e(5127),a=e(7700),s=n([a]);a=(s.then?(await s)():s)[0];const l=[{path:"/",component:c.A},{path:"/about",component:i.A},{path:"/contact",component:u.A},{name:"blog-post-detail",path:"/posts/:postId",component:a.A,props:!0}],f=(0,r.aE)({history:(0,r.LA)("/journey"),routes:l});t.A=f,o()}catch(l){o(l)}}))},759:function(n,t,e){e.d(t,{A:function(){return w}});var o=e(6768);const r={id:"app"};function c(n,t,e,c,i,u){const a=(0,o.g2)("Header"),s=(0,o.g2)("router-view"),l=(0,o.g2)("Footer");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(a),(0,o.bF)(s),(0,o.bF)(l)])}function i(n,t,e,r,c,i){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("header",null,[(0,o.Lk)("nav",null,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)("Home")])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/about"},{default:(0,o.k6)((()=>[(0,o.eW)("About")])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/contact"},{default:(0,o.k6)((()=>[(0,o.eW)("Contact")])),_:1})])])])])}var u={name:"HeaderComponent"},a=e(1241);const s=(0,a.A)(u,[["render",i],["__scopeId","data-v-3dbd88cd"]]);var l=s;const f=n=>((0,o.Qi)("data-v-536f852b"),n=n(),(0,o.jt)(),n),d=f((()=>(0,o.Lk)("p",null,"© 2024 Berserker Blog. All rights reserved.",-1))),p=[d];function h(n,t,e,r,c,i){return(0,o.uX)(),(0,o.CE)("footer",null,p)}var b={name:"FooterComponent"};const v=(0,a.A)(b,[["render",h],["__scopeId","data-v-536f852b"]]);var g=v,m={name:"App",components:{Header:l,Footer:g}};const y=(0,a.A)(m,[["render",c]]);var w=y},7001:function(n,t,e){e.d(t,{A:function(){return f}});var o=e(6768);const r=(0,o.Lk)("h1",null,"Welcome to our SPA!",-1),c=(0,o.Lk)("p",null,"This is the about page.",-1),i=[r,c];function u(n,t,e,r,c,u){return(0,o.uX)(),(0,o.CE)("div",null,i)}var a={name:"AboutPage"},s=e(1241);const l=(0,s.A)(a,[["render",u]]);var f=l},7700:function(n,t,e){e.a(n,(async function(n,o){try{var r=e(3635),c=e(333),i=(e(1385),e(1241)),u=n([c]);c=(u.then?(await u)():u)[0];const a=(0,i.A)(c.A,[["render",r.X],["__scopeId","data-v-141aed96"]]);t.A=a,o()}catch(a){o(a)}}))},5127:function(n,t,e){e.d(t,{A:function(){return f}});var o=e(6768);const r=(0,o.Lk)("h1",null,"Welcome to our SPA!",-1),c=(0,o.Lk)("p",null,"This is the contact page.",-1),i=[r,c];function u(n,t,e,r,c,u){return(0,o.uX)(),(0,o.CE)("div",null,i)}var a={name:"ContactPage"},s=e(1241);const l=(0,s.A)(a,[["render",u]]);var f=l},7521:function(n,t,e){e.d(t,{A:function(){return b}});var o=e(6768);const r={class:"container"},c={class:"blog-grid"};function i(n,t,e,i,u,a){const s=(0,o.g2)("BlogPost");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.Lk)("div",c,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.posts,(n=>((0,o.uX)(),(0,o.CE)("div",{key:n.id,class:"blog-post"},[(0,o.bF)(s,{post:n,onViewPost:a.viewPost},null,8,["post","onViewPost"])])))),128))])])}e(4114);var u=e(4232);function a(n,t,e,r,c,i){return(0,o.uX)(),(0,o.CE)("div",{class:"blog-post",onClick:t[0]||(t[0]=(...n)=>i.handleClick&&i.handleClick(...n))},[(0,o.Lk)("h2",null,(0,u.v_)(e.post.title),1),(0,o.Lk)("p",null,(0,u.v_)(e.post.content),1)])}var s={name:"BlogPost",props:{post:{type:Object,required:!0}},methods:{handleClick(){this.$emit("view-post",this.post.id)}}},l=e(1241);const f=(0,l.A)(s,[["render",a],["__scopeId","data-v-0b997093"]]);var d=f,p={name:"HomePage",components:{BlogPost:d},data(){return{posts:[]}},created(){this.fetchBlogPosts()},methods:{async fetchBlogPosts(){const n="https://raw.githubusercontent.com/BerserkerMother/blogs/main/list.json",t="https://raw.githubusercontent.com/BerserkerMother/blogs/main/";try{const e=await fetch(n),o=await e.json();for(const n of o){const e=`${t}/${n}`;console.log(e);const o=await fetch(e),r=await o.text(),c=r.split("\n"),i=c[0],u=e,a=c.slice(1,15).join("\n");console.log(a);const s={id:u,title:i,content:a};this.posts.push(s)}}catch(e){console.error("Error fetching blog posts:",e)}},viewPost(n){this.$router.push({name:"blog-post-detail",params:{postId:n}})}}};const h=(0,l.A)(p,[["render",i]]);var b=h},1385:function(){},333:function(n,t,e){e.a(n,(async function(n,o){try{e.d(t,{A:function(){return r.A}});var r=e(930),c=n([r]);r=(c.then?(await c)():c)[0],o()}catch(i){o(i)}}))},3635:function(n,t,e){e.d(t,{X:function(){return c}});var o=e(6768);const r={class:"blog-post-detail",ref:"contentContainer"};function c(n,t,e,c,i,u){return(0,o.uX)(),(0,o.CE)("div",r,null,512)}},7712:function(n,t,e){n.exports=e.v(t,n.id,"6f23bc213b6c8b03")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,loaded:!1,exports:{}};return n[o].call(c.exports,c,c.exports,e),c.loaded=!0,c.exports}e.m=n,function(){var n="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=function(n){n&&n.d<1&&(n.d=1,n.forEach((function(n){n.r--})),n.forEach((function(n){n.r--?n.r++:n()})))},c=function(e){return e.map((function(e){if(null!==e&&"object"===typeof e){if(e[n])return e;if(e.then){var c=[];c.d=0,e.then((function(n){i[t]=n,r(c)}),(function(n){i[o]=n,r(c)}));var i={};return i[n]=function(n){n(c)},i}}var u={};return u[n]=function(){},u[t]=e,u}))};e.a=function(e,i,u){var a;u&&((a=[]).d=-1);var s,l,f,d=new Set,p=e.exports,h=new Promise((function(n,t){f=t,l=n}));h[t]=p,h[n]=function(n){a&&n(a),d.forEach(n),h["catch"]((function(){}))},e.exports=h,i((function(e){var r;s=c(e);var i=function(){return s.map((function(n){if(n[o])throw n[o];return n[t]}))},u=new Promise((function(t){r=function(){t(i)},r.r=0;var e=function(n){n!==a&&!d.has(n)&&(d.add(n),n&&!n.d&&(r.r++,n.push(r)))};s.map((function(t){t[n](e)}))}));return r.r?u:i()}),(function(n){n?f(h[o]=n):l(p),r(a)})),a&&a.d<0&&(a.d=0)}}(),function(){var n=[];e.O=function(t,o,r,c){if(!o){var i=1/0;for(l=0;l<n.length;l++){o=n[l][0],r=n[l][1],c=n[l][2];for(var u=!0,a=0;a<o.length;a++)(!1&c||i>=c)&&Object.keys(e.O).every((function(n){return e.O[n](o[a])}))?o.splice(a--,1):(u=!1,c<i&&(i=c));if(u){n.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}c=c||0;for(var l=n.length;l>0&&n[l-1][2]>c;l--)n[l]=n[l-1];n[l]=[o,r,c]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.hmd=function(n){return n=Object.create(n),n.children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n}}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.v=function(n,t,o,r){var c=fetch(e.p+""+o+".module.wasm"),i=function(){return c.then((function(n){return n.arrayBuffer()})).then((function(n){return WebAssembly.instantiate(n,r)})).then((function(t){return Object.assign(n,t.instance.exports)}))};return c.then((function(t){return"function"===typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(t,r).then((function(t){return Object.assign(n,t.instance.exports)}),(function(n){if("application/wasm"!==t.headers.get("Content-Type"))return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n),i();throw n})):i()}))}}(),function(){e.p=""}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,c,i=o[0],u=o[1],a=o[2],s=0;if(i.some((function(t){return 0!==n[t]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(a)var l=a(e)}for(t&&t(o);s<i.length;s++)c=i[s],e.o(n,c)&&n[c]&&n[c][0](),n[c]=0;return e.O(l)},o=self["webpackChunkblof"]=self["webpackChunkblof"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(1406)}));o=e.O(o)})();
//# sourceMappingURL=app.516fe7df.js.map