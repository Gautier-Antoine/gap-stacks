(()=>{"use strict";var e,t={370:()=>{const e=window.wp.blocks,t=window.React,r=window.wp.i18n,o=window.wp.blockEditor,n=window.wp.components,a=window.wp.coreData;(0,e.registerBlockType)("gap/stacks",{edit:function(e){const s=wp.data.select("core/editor").getEditedPostAttribute("tags"),{hasResolved:l,records:c}=(0,a.useEntityRecords)("taxonomy","post_tag",{per_page:-1,include:s}),i=e=>(0,t.createElement)("li",{className:e.slug,title:e.name},e.name);return(0,t.createElement)("ul",{...(0,o.useBlockProps)()},(0,t.createElement)((function({hasResolved:e,records:o}){return e?o?.length?(0,t.createElement)(t.Fragment,null,o.map(i)):(0,t.createElement)("p",null,(0,r.__)("Gap Stacks – If you don't see anything, add some Tags on this post","gap-stacks")):(0,t.createElement)(n.Spinner,null)}),{hasResolved:l,records:c}))}})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,r,n,a)=>{if(!r){var s=1/0;for(p=0;p<e.length;p++){for(var[r,n,a]=e[p],l=!0,c=0;c<r.length;c++)(!1&a||s>=a)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(l=!1,a<s&&(s=a));if(l){e.splice(p--,1);var i=n();void 0!==i&&(t=i)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[r,n,a]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[s,l,c]=r,i=0;if(s.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var p=c(o)}for(t&&t(r);i<s.length;i++)a=s[i],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(p)},r=globalThis.webpackChunkgap_stacks=globalThis.webpackChunkgap_stacks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[350],(()=>o(370)));n=o.O(n)})();