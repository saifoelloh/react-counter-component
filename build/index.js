(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Counter:()=>l,CustomCounter:()=>a,default:()=>i});const r=require("react");var n=e.n(r);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],l=!0,a=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=function(){var e=o(n().useState(0),2),t=e[0],r=e[1];return n().createElement("div",null,n().createElement("h1",null,t),n().createElement("button",{onClick:function(){return r(t+1)}},"increment"),n().createElement("button",{onClick:function(){return r(t-1)}},"decrement"))},a=function(e){var t=e.initialValue,r=void 0===t?0:t,u=e.stepper,l=void 0===u?1:u,a=o(n().useState(r),2),i=a[0],c=a[1];return n().createElement("div",null,n().createElement("h1",null,i),n().createElement("button",{onClick:function(){return c(i+l)}},"increment"),n().createElement("button",{onClick:function(){return c(i-l)}},"decrement"))};const i=l;module.exports=t})();