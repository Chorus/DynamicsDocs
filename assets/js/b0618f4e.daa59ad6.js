"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[3460],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>p});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(i),p=a,h=d["".concat(l,".").concat(p)]||d[p]||f[p]||o;return i?n.createElement(h,r(r({ref:t},s),{},{components:i})):n.createElement(h,r({ref:t},s))}));function p(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var u=2;u<o;u++)r[u]=i[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6200:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=i(7462),a=(i(7294),i(3905));const o={id:"QualificationDefinition",title:"Qualification Definitions"},r=void 0,c={unversionedId:"AdminSetup/QualificationDefinition",id:"AdminSetup/QualificationDefinition",title:"Qualification Definitions",description:"Qualification Codes",source:"@site/docs/AdminSetup/QualificationDefinition.md",sourceDirName:"AdminSetup",slug:"/AdminSetup/QualificationDefinition",permalink:"/docs/AdminSetup/QualificationDefinition",draft:!1,tags:[],version:"current",frontMatter:{id:"QualificationDefinition",title:"Qualification Definitions"},sidebar:"sidebars",previous:{title:"Locations",permalink:"/docs/AdminSetup/Location"},next:{title:"Goal Bank Library",permalink:"/docs/AdminSetup/GoalBankLibrary"}},l={},u=[{value:"Qualification Codes",id:"qualification-codes",level:2},{value:"Qualification Definitions",id:"qualification-definitions",level:2}],s={toc:u};function f(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"qualification-codes"},"Qualification Codes"),(0,a.kt)("p",null,"This is the list of qualifications that you want to be able to track on practitioners. This list will also be referenced when tracking which qualifications/credentials each payer requires for each service.\nThe qualification codes included in Autism Care upon installation are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BCBA"),(0,a.kt)("li",{parentName:"ul"},"Behavior Technician")),(0,a.kt)("h2",{id:"qualification-definitions"},"Qualification Definitions"),(0,a.kt)("p",null,"This builds upon the qualification codes above. Here we add more detail defining the type of qualification \u2013 certification, license, etc. These qualification definitions will be added to each practitioner\u2019s profile (based on the licenses and certifications they have) along with start date and expiration date. "),(0,a.kt)("p",null,"These qualification definitions will also be added to ",(0,a.kt)("a",{parentName:"p",href:"/docs/AdminSetup/InsurancePlan"},"insurance plan benefits")," that require the servicing practitioner to have specific qualifications. This will enable the system to cross check each encounter that is scheduled, and ensure the practitioner has the necessary credentials to conduct the encounter."),(0,a.kt)("p",null,"(The Qualification Definition entity does not currently hold much information itself, it is a layer upon which further functionality can be built. For example, if you would want to enforce that for any practitioner qualification that is of the \u2018State License\u2019 type, the expiration date is required, the Qualification Definition entity enables that \u2013 since you can\u2019t add a \u2018type\u2019 on the codeable concept record.)"))}f.isMDXComponent=!0}}]);