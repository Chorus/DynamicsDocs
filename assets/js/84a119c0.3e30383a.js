"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[5982],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||n;return a?i.createElement(f,l(l({ref:t},m),{},{components:a})):i.createElement(f,l({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=a(7462),r=(a(7294),a(3905));const n={id:"BillingSetup",title:"Billing Workflow"},l="Billing Workflow",o={unversionedId:"Billing/BillingSetup",id:"Billing/BillingSetup",title:"Billing Workflow",description:"The majority of the billing workflow is automated to ensure claims are created, scrubbed, and submitted to the clearinghouse seamlessly.",source:"@site/docs/Billing/BillingSetup.md",sourceDirName:"Billing",slug:"/Billing/BillingSetup",permalink:"/docs/Billing/BillingSetup",draft:!1,tags:[],version:"current",frontMatter:{id:"BillingSetup",title:"Billing Workflow"},sidebar:"sidebars",previous:{title:"Authorization Utilization",permalink:"/docs/Scheduling/Utilization"},next:{title:"Charge Items",permalink:"/docs/Billing/ChargePeriods"}},s={},c=[],m={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"billing-workflow"},"Billing Workflow"),(0,r.kt)("p",null,"The majority of the billing workflow is automated to ensure claims are created, scrubbed, and submitted to the clearinghouse seamlessly."),(0,r.kt)("p",null,"The Billing workflow happens primarily in the ",(0,r.kt)("strong",{parentName:"p"},"Claims")," app."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("a",{parentName:"li",href:"/docs/Billing/ChargePeriods"},"charge item")," is automatically created when a practitioner submits a session in the Note app. "),(0,r.kt)("li",{parentName:"ol"},"A billing reviewer manually updates the status of the new charge item to 'Ready to Bill' after reviewing it. Charge items can be updated in bulk."),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("a",{parentName:"li",href:"/docs/Billing/ClaimItems"},"claim line")," is automatically created from 'Ready to Bill' charge items, and the charge items' statuses are updated to 'Claim Line Created'.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Charge items with the same Patient, Start Date, End Date, Procedure Code, Auth Number, Place of Service, and Rendering Provider are grouped onto one claim line."))),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("a",{parentName:"li",href:"/docs/Billing/Claims"},"claim")," is automatically created for all 'Ready to Bill' charge periods on a weekly/monthly basis (based on the ",(0,r.kt)("em",{parentName:"li"},"Charge Period Frequency")," on the ",(0,r.kt)("a",{parentName:"li",href:"/docs/AdminSetup/BusinessUnit"},"business unit"),").",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Claim lines with the same Patient, Auth Number, Rendering Provider, Place of Service, and Facility are grouped onto one Claim (not exceeding 50 claim lines per claim)."))),(0,r.kt)("li",{parentName:"ol"},"Claims and claim line statuses are automatically updated to 'Draft' if the claim does not pass all claim validations."),(0,r.kt)("li",{parentName:"ol"},"A billing reviewer can manually edit Draft claims and click 'Validate' to revalidate the claim that did not pass all claim validations."),(0,r.kt)("li",{parentName:"ol"},"Claims and claim line statuses are automatically updated to 'Ready to Submit' if the claim passes all claim validations. "),(0,r.kt)("li",{parentName:"ol"},"Claims and claim line statuses that are 'Ready to Submit' are automatically submitted to the clearinghouse and updated to 'Submitted' on an hourly basis. A ",(0,r.kt)("a",{parentName:"li",href:"/docs/RCM/Transactions"},"claims transaction")," is automatically created.")))}u.isMDXComponent=!0}}]);