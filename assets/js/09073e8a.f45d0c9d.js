"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[5206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=s(r),m=n,f=y["".concat(l,".").concat(m)]||y[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2076:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={id:"Contracts",title:"Practitioner Contracts"},i="Practitioner Contracts",c={unversionedId:"Payroll/Contracts",id:"Payroll/Contracts",title:"Practitioner Contracts",description:"Create a practitioner contract for every practitioner to set how they will be paid (hourly vs. salary, rate, etc.).",source:"@site/docs/Payroll/Contracts.md",sourceDirName:"Payroll",slug:"/Payroll/Contracts",permalink:"/docs/Payroll/Contracts",draft:!1,tags:[],version:"current",frontMatter:{id:"Contracts",title:"Practitioner Contracts"},sidebar:"sidebars",previous:{title:"Remits",permalink:"/docs/Billing/Remits"},next:{title:"Payroll Items",permalink:"/docs/Payroll/PayrollItems"}},l={},s=[{value:"Create a Practitioner Contract",id:"create-a-practitioner-contract",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"practitioner-contracts"},"Practitioner Contracts"),(0,n.kt)("p",null,"Create a practitioner contract for every practitioner to set how they will be paid (hourly vs. salary, rate, etc.)."),(0,n.kt)("p",null,"Multiple contracts can be created for a single practitioner. For example, if you are awarding a raise to a practitioner, you can create a new practitioner contract and change the end date on the first contract. This allows you to track the history of the practitioner's contracts with your organization."),(0,n.kt)("h2",{id:"create-a-practitioner-contract"},"Create a Practitioner Contract"),(0,n.kt)("p",null,"Practitioner contracts can be created from the Payroll tab on a practitioner record (from either the Clinical Area or the Payroll area of the sitemap). Click 'New Practitioner Contract' on the Practitioner Contracts subgrid."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Practitioner")," - the practitioner you are creating the contract for."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Start Date")," - the start date of the contract."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"End Date")," - the end date of the contract (can be left blank)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Pay Type")," - select either Hourly or Salary."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Salary Amount")," - if the pay type is Salary, enter the salary amount."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Hourly Pay Rate")," - if the pay type is Hourly, enter the rate per hour."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Fee Schedule")," - entering a ",(0,n.kt)("a",{parentName:"li",href:"/docs/AdminSetup/FeeSchedules/#payroll-fee-schedules"},"fee schedule")," on a contract allows you to set specific overrides to the hourly rate, either for specific services, or specific patients.")))}u.isMDXComponent=!0}}]);