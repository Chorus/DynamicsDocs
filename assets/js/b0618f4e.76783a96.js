"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[3460],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>d});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(i),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||r;return i?n.createElement(m,o(o({ref:t},u),{},{components:i})):n.createElement(m,o({ref:t},u))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},6200:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));const r={id:"QualificationDefinition",title:"Qualification Definitions"},o="Qualification Definitions",c={unversionedId:"AdminSetup/QualificationDefinition",id:"AdminSetup/QualificationDefinition",title:"Qualification Definitions",description:"This is the list of qualifications that you want to be able to track in the system. These qualification definitions will be added to each practitioner\u2019s profile - based on the licenses and certifications they have - along with a start date and expiration date.",source:"@site/docs/AdminSetup/QualificationDefinition.md",sourceDirName:"AdminSetup",slug:"/AdminSetup/QualificationDefinition",permalink:"/docs/AdminSetup/QualificationDefinition",draft:!1,tags:[],version:"current",frontMatter:{id:"QualificationDefinition",title:"Qualification Definitions"},sidebar:"sidebars",previous:{title:"Locations",permalink:"/docs/AdminSetup/Location"},next:{title:"Goal Bank Library",permalink:"/docs/AdminSetup/GoalBankLibrary"}},l={},s=[],u={toc:s};function f(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"qualification-definitions"},"Qualification Definitions"),(0,a.kt)("p",null,"This is the list of qualifications that you want to be able to track in the system. These qualification definitions will be added to each practitioner\u2019s profile - based on the licenses and certifications they have - along with a start date and expiration date."),(0,a.kt)("p",null,"These qualification definitions will also be added to ",(0,a.kt)("a",{parentName:"p",href:"/docs/AdminSetup/InsurancePlan"},"insurance plan benefits")," that require the servicing practitioner to have specific qualifications. This will enable the system to cross check each encounter that is scheduled, and ensure the practitioner has the necessary credentials to conduct the encounter."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Type")," \u2013 select the qualification type \u2013 license, insurance credential, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Code")," \u2013 choose a qualification code. Additional qualification codes can be set up for your organization by support.")))}f.isMDXComponent=!0}}]);