"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[6493],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=i,u=p["".concat(s,".").concat(d)]||p[d]||h[d]||n;return a?r.createElement(u,l(l({ref:t},m),{},{components:a})):r.createElement(u,l({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2267:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const n={id:"ChargePeriods",title:"Charge Items"},l="Charge Items",o={unversionedId:"Billing/ChargePeriods",id:"Billing/ChargePeriods",title:"Charge Items",description:"When a session is submitted from the Note app, the status of the encounter service will change to 'Submitted', and a charge item will be created for the encounter service. The Charge Item is used to track all claims submitted to payers for reimbursement of its related encounter service. Charge items are grouped (by patient) into Charge Periods that cover a specific range of service dates \u2013 charge periods can be set up to span a weekly, bi-weekly, or monthly period, (or any other frequency,) according to the way your organization/billing cycle operates.",source:"@site/docs/Billing/ChargePeriods.md",sourceDirName:"Billing",slug:"/Billing/ChargePeriods",permalink:"/docs/Billing/ChargePeriods",draft:!1,tags:[],version:"current",frontMatter:{id:"ChargePeriods",title:"Charge Items"},sidebar:"sidebars",previous:{title:"Billing Workflow",permalink:"/docs/Billing/BillingSetup"},next:{title:"Claim Settings",permalink:"/docs/Billing/ClaimSettings"}},s={},c=[{value:"Charge Item Statuses",id:"charge-item-statuses",level:3},{value:"Charge Periods",id:"charge-periods",level:2},{value:"Charge Period Statuses",id:"charge-period-statuses",level:3}],m={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"charge-items"},"Charge Items"),(0,i.kt)("p",null,"When a session is submitted from the Note app, the status of the encounter service will change to 'Submitted', and a charge item will be created for the encounter service. The Charge Item is used to track all claims submitted to payers for reimbursement of its related encounter service. Charge items are grouped (by patient) into Charge Periods that cover a specific range of service dates \u2013 charge periods can be set up to span a weekly, bi-weekly, or monthly period, (or any other frequency,) according to the way your organization/billing cycle operates. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Charge Period")," - the charge period this charge item is included on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Encounter Service")," - the ",(0,i.kt)("a",{parentName:"li",href:"/docs/Scheduling/SingleEncounters/#encounter-services"},"encounter service")," this charge item was created for. Relevant fields from the encounter service display below it:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Authorization Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Assignment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Encounter Patient")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Practitioner Participant")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Start Time")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"End Time")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Duration")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Modifiers")," - any billing ",(0,i.kt)("a",{parentName:"li",href:"/docs/AdminSetup/FeeSchedules/#modifiers"},"modifiers")," included on the encounter service are displayed. Additional modifiers can be entered here."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Billable Units")," - the amount of billable units, based on the duration of the encounter service and the duration of a billable unit for that service (as configured on the ",(0,i.kt)("a",{parentName:"li",href:"/docs/AdminSetup/InsurancePlan/#insurance-plan-benefits"},"insurance plan benefit"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Coverage")," - the patient's ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/Coverages"},"coverage"),".")),(0,i.kt)("h3",{id:"charge-item-statuses"},"Charge Item Statuses"),(0,i.kt)("p",null,"When reviewing charge items, you can easily view the status of the charge items to identify what needs to be done for each charge item:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Charge items are created with status ",(0,i.kt)("strong",{parentName:"li"},"New"),"."),(0,i.kt)("li",{parentName:"ul"},"Charge items that are fit to be included on Claims should be marked as ",(0,i.kt)("strong",{parentName:"li"},"Ready to Bill")," by the biller who reviewed them."),(0,i.kt)("li",{parentName:"ul"},"Charge items can be marked as ",(0,i.kt)("strong",{parentName:"li"},"On Hold")," to indicate that they should not be billed yet (e.g., if they are waiting on remaining sessions in conducted in that charge period to be submitted)."),(0,i.kt)("li",{parentName:"ul"},"Charge items that are included on a claim already are at status ",(0,i.kt)("strong",{parentName:"li"},"Claim Line Created"))),(0,i.kt)("p",null,"To update the status of charge items:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the charge items you'd like to update on the charge items subgrid on a charge period."),(0,i.kt)("li",{parentName:"ol"},"Click 'Set Status'"),(0,i.kt)("li",{parentName:"ol"},"Choose a Status (the only statuses available to manually update charge items to are 'On Hold' and 'Ready to Bill')")),(0,i.kt)("p",null,"At the frequency your organization chooses, the system will take all 'Ready to Bill' charge items and include them as ",(0,i.kt)("a",{parentName:"p",href:"/docs/Billing/Claims/#claim-lines"},"claim lines")," on claims."),(0,i.kt)("h2",{id:"charge-periods"},"Charge Periods"),(0,i.kt)("p",null,"Charge periods are containers for all the charge items for a specific patient during the period for which you are submitting a claim."),(0,i.kt)("p",null,"For example, if your organization submits claims on a monthly basis, a charge period will be created per month per patient, and all charge items for that patient that month will be related to that charge period."),(0,i.kt)("p",null,"The charge period frequency can be configured as either weekly or monthly on a ",(0,i.kt)("a",{parentName:"p",href:"/docs/AdminSetup/BusinessUnit"},"business unit"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charges Information")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Patient")," - the patient services were provided to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Birthday")," - the patient's birthday, as set on the ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/PatientOverview"},"patient")," record.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Coverages"),"\nView the patient's ",(0,i.kt)("a",{parentName:"p",href:"/docs/Patients/Coverages"},"coverages")," here."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charge Items"),"\nView the charge items for this charge period here."),(0,i.kt)("h3",{id:"charge-period-statuses"},"Charge Period Statuses"),(0,i.kt)("p",null,"When reviewing charge periods, you can easily view the status of the charge periods to identify what needs to be done with the charge items they contain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New")," - Charge periods that include any 'new' charge items."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Blocked")," - Charge periods that include any 'on hold' charge items (and no 'new' charge items), or charge periods that don't include any charge items."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ready to Bill")," - Charge periods that include any 'ready to bill charge items (and no 'new' or 'on hold' charge items)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Claim Created")," - Charge periods where all charge items are at status 'Claim Line Created'.")),(0,i.kt)("p",null,"There are 4 views configured for easy access to viewing charge periods based on their status:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"All Charge Periods"),(0,i.kt)("li",{parentName:"ol"},"New Charge Periods"),(0,i.kt)("li",{parentName:"ol"},"Ready to Bill Charge Periods"),(0,i.kt)("li",{parentName:"ol"},"Aging Blocked Charge Periods")))}h.isMDXComponent=!0}}]);