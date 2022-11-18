"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[488],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:3},a="Overview",s={unversionedId:"Overview",id:"Overview",title:"Overview",description:"The user can participate in KeepERC20 system with any ERC20 token.",source:"@site/docs/Overview.md",sourceDirName:".",slug:"/Overview",permalink:"/KeepERC20-docs/Overview",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"KeepERC20",permalink:"/KeepERC20-docs/Introduction/KeepERC20"},next:{title:"Functions",permalink:"/KeepERC20-docs/category/functions"}},c={},p=[],l={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(4424).Z,width:"3808",height:"1572"})),(0,o.kt)("p",null,"The user can participate in KeepERC20 system with any ERC20 token."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The sender's ERC20 tokens are internally wrapped into KeepERC20 tokens to benefit from various functions through smart contract and Chainlink Automation."),(0,o.kt)("li",{parentName:"ul"},"KeepERC20 tokens are internally unwrapped into ERC20 tokens, so the receiver can easily use received tokens for other Dapps.")),(0,o.kt)("p",null,"Some tasks may be impossible with just simple token wrapping, such as ownership-related function calls.\nIn that case KeepERC20 system creates a safe contract wallet internally and provides those functions seamlessly."))}u.isMDXComponent=!0},4424:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fig4-1fd34fdae52d1881539aa71759842fbb.png"}}]);