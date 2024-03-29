"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[5982],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>p});var a=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,l=function(e,t){if(null==e)return{};var i,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(i),p=l,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||n;return i?a.createElement(h,r(r({ref:t},m),{},{components:i})):a.createElement(h,r({ref:t},m))}));function p(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=i.length,r=new Array(n);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<n;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6427:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=i(7462),l=(i(7294),i(3905));const n={id:"BillingSetup",title:"Billing Workflow"},r="Billing Workflow",o={unversionedId:"Billing/BillingSetup",id:"Billing/BillingSetup",title:"Billing Workflow",description:"The majority of the billing workflow is automated to ensure claims are created, scrubbed, and submitted to the clearinghouse seamlessly.",source:"@site/docs/Billing/BillingSetup.md",sourceDirName:"Billing",slug:"/Billing/BillingSetup",permalink:"/docs/Billing/BillingSetup",draft:!1,tags:[],version:"current",frontMatter:{id:"BillingSetup",title:"Billing Workflow"},sidebar:"sidebars",previous:{title:"Authorization Utilization",permalink:"/docs/Scheduling/Utilization"},next:{title:"Charge Items",permalink:"/docs/Billing/ChargePeriods"}},s={},c=[{value:"Duplicate Billing Report",id:"duplicate-billing-report",level:2}],m={toc:c};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"billing-workflow"},"Billing Workflow"),(0,l.kt)("p",null,"The majority of the billing workflow is automated to ensure claims are created, scrubbed, and submitted to the clearinghouse seamlessly."),(0,l.kt)("p",null,"The Billing workflow happens primarily in the ",(0,l.kt)("strong",{parentName:"p"},"Claims")," app."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"A ",(0,l.kt)("a",{parentName:"li",href:"/docs/Billing/ChargePeriods"},"charge item"),' is automatically created when an encounter service is created. The status of the charge item is set to "Scheduled". ',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'When the session is started in the Note app, the charge item is set to status "Awaiting Submission."'),(0,l.kt)("li",{parentName:"ul"},'When the session is submitted in the Note app, the charge item is set to status "New."'))),(0,l.kt)("li",{parentName:"ol"},"A billing reviewer manually updates the status of the New charge item to 'Ready to Bill' after reviewing it. Charge items can be updated in bulk.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'A billing reviewer also manually updates te status of Awaiting Resubmission charge items "Claim Line Created" after determining if the edits made to the session necessitate modifying and resubmitting the claim. Update charge item from "Awaiting Resubmission" to "Claim Line Created" and ',(0,l.kt)("a",{parentName:"li",href:"/docs/RCM/RCMworkflow/#correcting-claims"},"modify and resubmit")," the claim based on the updates made to the session."))),(0,l.kt)("li",{parentName:"ol"},"A ",(0,l.kt)("a",{parentName:"li",href:"/docs/Billing/ClaimItems"},"claim line")," is automatically created from 'Ready to Bill' charge items, and the charge items' statuses are updated to 'Claim Line Created'.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Charge items with the same Patient, Start Date, End Date, Procedure Code, Auth Number, Place of Service, and Rendering Provider are grouped onto one claim line."))),(0,l.kt)("li",{parentName:"ol"},"A ",(0,l.kt)("a",{parentName:"li",href:"/docs/Billing/Claims"},"claim")," is automatically created for all 'Ready to Bill' charge periods on a weekly/monthly basis (based on the ",(0,l.kt)("em",{parentName:"li"},"Charge Period Frequency")," on the ",(0,l.kt)("a",{parentName:"li",href:"/docs/AdminSetup/BusinessUnit"},"business unit"),").",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Claim lines with the same Patient, Auth Number, Rendering Provider, Place of Service, and Facility are grouped onto one Claim (not exceeding 50 claim lines per claim)."))),(0,l.kt)("li",{parentName:"ol"},"Claims and claim line statuses are automatically updated to 'Draft' if the claim does not pass all claim validations."),(0,l.kt)("li",{parentName:"ol"},"A billing reviewer can manually edit Draft claims and click 'Validate' to revalidate the claim that did not pass all claim validations."),(0,l.kt)("li",{parentName:"ol"},"Claims and claim line statuses are automatically updated to 'Ready to Submit' if the claim passes all claim validations. "),(0,l.kt)("li",{parentName:"ol"},"Claims and claim line statuses that are 'Ready to Submit' are automatically submitted to the clearinghouse and updated to 'Submitted' on an hourly basis. A ",(0,l.kt)("a",{parentName:"li",href:"/docs/RCM/Transactions"},"claims transaction")," is automatically created.")),(0,l.kt)("h2",{id:"duplicate-billing-report"},"Duplicate Billing Report"),(0,l.kt)("p",null,'Billers can review a "Duplicates Report" to understand which new/ready to bill charge items have "duplicate charge items" (i.e., for the same patient, date of service, and service code) that are still awaiting submission.'),(0,l.kt)("p",null,"This gives billers visibility to sessions that will be grouped together on a claim once all are submitted, and should therefore not be billed yet, as they may face denials if billed on separate claims."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How to export a Duplicates Report:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'In the Claims App, in the Billing area, go to "Charge Items" on the sitemap to open the Charge Items view.'),(0,l.kt)("li",{parentName:"ol"},'Click "Export Duplicate Report" on the ribbon.'),(0,l.kt)("li",{parentName:"ol"},"Select a start date and end date within which you'd like to check for sessions that would be grouped together on claims once submitted."),(0,l.kt)("li",{parentName:"ol"},"Click export. The excel export will include all session details as well as links to the encounter services.")))}u.isMDXComponent=!0}}]);