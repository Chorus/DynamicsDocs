"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[2736],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),o=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),c=o(a),d=n,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||l;return a?i.createElement(k,r(r({ref:t},u),{},{components:a})):i.createElement(k,r({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=c;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:n,r[1]=m;for(var o=2;o<l;o++)r[o]=a[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2791:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>m,toc:()=>o});var i=a(7462),n=(a(7294),a(3905));const l={id:"Claims",title:"Claims"},r="Claims",m={unversionedId:"Billing/Claims",id:"Billing/Claims",title:"Claims",description:"A claim is a list of services which have been provided to a patient which is sent to an insurer for reimbursement.",source:"@site/docs/Billing/Claims.md",sourceDirName:"Billing",slug:"/Billing/Claims",permalink:"/docs/Billing/Claims",draft:!1,tags:[],version:"current",frontMatter:{id:"Claims",title:"Claims"},sidebar:"sidebars",previous:{title:"Claim Lines",permalink:"/docs/Billing/ClaimItems"},next:{title:"Transactions",permalink:"/docs/Billing/Transactions"}},s={},o=[{value:"Claim Statuses",id:"claim-statuses",level:2},{value:"Submit Claims",id:"submit-claims",level:2},{value:"Modify and Resubmit Claims",id:"modify-and-resubmit-claims",level:2}],u={toc:o};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"claims"},"Claims"),(0,n.kt)("p",null,"A claim is a list of services which have been provided to a patient which is sent to an insurer for reimbursement."),(0,n.kt)("p",null,"The Claim Form is divided into multiple tabs for an organized view of the complete claim."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Claim Details")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Claim Number")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Diagnosis Codes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Claim Type")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Place of Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Total Billed")," ")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Patient & Coverage Details")," section of a claim display information from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/Patients/PatientOverview"},"patient")," record and the patient's ",(0,n.kt)("a",{parentName:"p",href:"/docs/Patients/Coverages"},"coverage"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Patient")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Date of Birth")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Patient Address")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Gender")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Member Id")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Coverage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Payer"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rendering Provider Details")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Rendering Provider")," - populated based on the claim settings for either the ",(0,n.kt)("a",{parentName:"li",href:"/docs/AdminSetup/BusinessUnit/#claim-settings"},"business unit"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/AdminSetup/Account/#claim-settings"},"payer"),", or ",(0,n.kt)("a",{parentName:"li",href:"/docs/Patients/Authorization/#claim-settings"},"authorization"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"NPI")," - NPI of the practitioner populated as the Rendering Provider.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Referring Provider Details")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Referring Provider")," -"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"NPI")," - NPI of the contact populated as the Referring Provider")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resubmission Details")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Claim Frequency Code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Original Reference Number")," -"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Delay Reason Code"))),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Claim Lines")," subgrid displays the claim items on the claim. ",(0,n.kt)("a",{parentName:"p",href:"/docs/Billing/ClaimItems"},"Read more about claim items"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Additional Claim Info")," tab contains other information sometimes relevant to claims:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Billing Provider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"NPI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Tax ID")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Facility"))),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Submissions Summary")," tab shows a list of submissions representing the full story of the claim (how and when it was submitted, modified, resubmitted, etc.)."),(0,n.kt)("h2",{id:"claim-statuses"},"Claim Statuses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Draft")," - Claim has not yet been submitted and fields can be edited."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ready to Submit")," - Claim has been saved and submitted and can no longer be edited."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Submitted Submission")," - Claim has been submitted to the clearinghouse."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Historical Submission")," - Claim has since been modified and resubmitted, and this is a historical record of a previous submission.")),(0,n.kt)("p",null,"There are 4 views for configured for easy access to viewing claims based on their statuses:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"All Claims"),(0,n.kt)("li",{parentName:"ol"},"Draft Claims"),(0,n.kt)("li",{parentName:"ol"},"Historical Claims"),(0,n.kt)("li",{parentName:"ol"},"Ready to Submit Claims"),(0,n.kt)("li",{parentName:"ol"},"Submitted Claims")),(0,n.kt)("h2",{id:"submit-claims"},"Submit Claims"),(0,n.kt)("p",null,"To submit claims, click 'Save & Submit' on any draft claim. The claim status will become 'Ready to Submit'. All 'Ready to Submit' claims are submitted to the clearinghouse on an hourly basis."),(0,n.kt)("h2",{id:"modify-and-resubmit-claims"},"Modify and Resubmit Claims"),(0,n.kt)("p",null,"To modify and resubmit a claim, click 'Modify & Resubmit' on any submitted claim. A new Draft Claim will be opened with all of the information from the previously submitted claim. "),(0,n.kt)("p",null,"The previously submitted claim's status will be set to 'historical submission' and will be displayed on the submissions summary tab on future claims with that claim number."))}p.isMDXComponent=!0}}]);