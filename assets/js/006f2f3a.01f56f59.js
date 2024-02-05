"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[4798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"FeeSchedules",title:"Fee Schedules"},l="Fee Schedules",o={unversionedId:"AdminSetup/FeeSchedules",id:"AdminSetup/FeeSchedules",title:"Fee Schedules",description:"Fee schedules are price lists where you can track a billing amount and an expected amount for the services you provide.",source:"@site/docs/AdminSetup/FeeSchedules.md",sourceDirName:"AdminSetup",slug:"/AdminSetup/FeeSchedules",permalink:"/docs/AdminSetup/FeeSchedules",draft:!1,tags:[],version:"current",frontMatter:{id:"FeeSchedules",title:"Fee Schedules"},sidebar:"sidebars",previous:{title:"Insurance Plans",permalink:"/docs/AdminSetup/InsurancePlan"},next:{title:"Locations",permalink:"/docs/AdminSetup/Location"}},c={},s=[{value:"Fee Schedule Items",id:"fee-schedule-items",level:2},{value:"Modifiers",id:"modifiers",level:2},{value:"Payroll Fee Schedules",id:"payroll-fee-schedules",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fee-schedules"},"Fee Schedules"),(0,a.kt)("p",null,"Fee schedules are price lists where you can track a billing amount and an expected amount for the services you provide. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Name")," - Name the fee schedule for easy reference."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Fee Schedule Type")," - Choose whether this fee schedule is for Billing or Payroll.")),(0,a.kt)("p",null,"Fee schedules where Fee Schedule Type is 'Billing' can be related to a ",(0,a.kt)("a",{parentName:"p",href:"/docs/AdminSetup/BusinessUnit"},"Business Unit")," or to a specific ",(0,a.kt)("a",{parentName:"p",href:"/docs/AdminSetup/InsurancePlan"},"Insurance Plan"),"."),(0,a.kt)("p",null,"Once the fee schedule is saved, Fee Schedule Items can be added."),(0,a.kt)("h2",{id:"fee-schedule-items"},"Fee Schedule Items"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Product/Service")," - the service code being billed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Expected Amount")," - the contracted rate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Billing Amount")," - included on the claim as the price per unit of this service.")),(0,a.kt)("p",null,"Organizations can choose to bill with the contracted rate by keeping Expected and Billing Amounts the same, or leaving the Expected Amounts blank."),(0,a.kt)("p",null,"Organizations can also choose to use the same Billing Rates per service for all payers, by populating Billing Amount on the Business Unit Fee Schedule and payer-specific Expected amounts on ",(0,a.kt)("a",{parentName:"p",href:"/docs/AdminSetup/InsurancePlan/#insurance-plan-fee-schedules"},"Insurance Plan Fee Schedules"),"."),(0,a.kt)("h2",{id:"modifiers"},"Modifiers"),(0,a.kt)("p",null,"Modifiers are related to Fee Schedule Items to be included on the Claims for that service code."),(0,a.kt)("p",null,"To create a modifier, go to Related > Modifiers on the Fee Schedule Item, and create a new Modifier."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Name")," - Name the modifier for easy reference, so schedulers and billers can know which modifier to add when scheduling or billing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Modifier")," - Choose from modifier codes. Additional modifier codes can be set up for your organization by support."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Order")," - Enter the order number (1, 2, etc.) in which this modifier should appear on a claim, if the claim line has more than one modifier."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Billing Amount")," - overrides the billing amount on the fee schedule when this modifier is included on a claim"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Expected Amount")," - overrides the expected amount when this modifier is included on a claim")),(0,a.kt)("p",null,"Modifiers can be added to ",(0,a.kt)("a",{parentName:"p",href:"/docs/Scheduling/SingleEncounters/#encounter-services"},"encounter services")," by schedulers, or to a charge item before the claim is submitted."),(0,a.kt)("h2",{id:"payroll-fee-schedules"},"Payroll Fee Schedules"),(0,a.kt)("p",null,"Fee schedules where the Fee Schedule Type is Payroll are used to override a practitioner's contracted hourly rate with a specific rate per service or per patient."),(0,a.kt)("p",null,"For example, to set a higher rate for group treatment (97154), create a fee schedule item with the higher rate as the 'Billing Amount', and populate that fee schedule on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Payroll/Contracts"},"practitioner contract"),"."),(0,a.kt)("p",null,"To set a different rate for a specific patient, add a modifier to the services you want it to affect."))}d.isMDXComponent=!0}}]);