"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[3531],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||c;return t?r.createElement(g,a(a({ref:n},l),{},{components:t})):r.createElement(g,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const c={id:"PractitionerEncounters",title:"Encounters"},a="Encounters",i={unversionedId:"Z not using anymore/PractitionerEncounters",id:"Z not using anymore/PractitionerEncounters",title:"Encounters",description:"Encounters are the sessions between patients and practitioners and other related contacts (family training).",source:"@site/docs/Z not using anymore/PractitionerEncounters.md",sourceDirName:"Z not using anymore",slug:"/Z not using anymore/PractitionerEncounters",permalink:"/docs/Z not using anymore/PractitionerEncounters",draft:!1,tags:[],version:"current",frontMatter:{id:"PractitionerEncounters",title:"Encounters"}},u={},s=[{value:"Create an Encounter",id:"create-an-encounter",level:2}],l={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"encounters"},"Encounters"),(0,o.kt)("p",null,"Encounters are the sessions between patients and practitioners and other related contacts (family training). "),(0,o.kt)("p",null,"The Encounters tab has 2 subgrid. 1 subgrid lists all the recurring encounters related to this Practitioner and the other subgrid lists all the single or occurring encounters related to this Practitioner."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recurring Encounters")," - encounters that are set to repeat on a recurring schedule, either daily, weekly, or monthly. Each recurring encounter consists of multiple encounter occurrences \u2013 which are the individual encounters."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The default view for the Recurring Encounters sub-grid is \u2018Current Recurring Encounters\u2019 and it displays all recurring encounters that still have encounter occurrences scheduled in the future. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Scheduling/RecurringEncounters"},"Read more about Recurring Encounters"),". ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Single Encounters")," \u2013 encounters that are scheduled on a one-off basis, and encounter occurrences that are part of a recurring encounter. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The default view for the Single Encounters sub-grid is \u2018Upcoming Encounters\u2019 and it displays scheduled individual encounters (single encounters or encounter occurrences). "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Scheduling/SingleEncounters"},"Read more about Single Encounters"),". ")),(0,o.kt)("h2",{id:"create-an-encounter"},"Create an Encounter"),(0,o.kt)("p",null,"To create a new Encounter, click 'New Recurring Encounter' or 'New Single Encounter' on the subgrid. This will open up the New Encounter Main Form."))}p.isMDXComponent=!0}}]);