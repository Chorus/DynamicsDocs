"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[724],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>d});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(i),d=n,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return i?a.createElement(f,o(o({ref:t},c),{},{components:i})):a.createElement(f,o({ref:t},c))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var m=2;m<r;m++)o[m]=i[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},4844:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=i(7462),n=(i(7294),i(3905));const r={id:"RCMworkflow",title:"RCM Workflow"},o="Remits Workflow",s={unversionedId:"RCM/RCMworkflow",id:"RCM/RCMworkflow",title:"RCM Workflow",description:"The Remits workflow happens primarily in the RCM app.",source:"@site/docs/RCM/RCMworkflow.md",sourceDirName:"RCM",slug:"/RCM/RCMworkflow",permalink:"/docs/RCM/RCMworkflow",draft:!1,tags:[],version:"current",frontMatter:{id:"RCMworkflow",title:"RCM Workflow"},sidebar:"sidebars",previous:{title:"Claims",permalink:"/docs/Billing/Claims"},next:{title:"Payments",permalink:"/docs/RCM/Payment"}},l={},m=[{value:"Correcting Claims",id:"correcting-claims",level:2},{value:"Session Resubmissions",id:"session-resubmissions",level:2}],c={toc:m};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"remits-workflow"},"Remits Workflow"),(0,n.kt)("p",null,"The Remits workflow happens primarily in the ",(0,n.kt)("strong",{parentName:"p"},"RCM")," app."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A ",(0,n.kt)("a",{parentName:"li",href:"/docs/RCM/Transactions"},"transaction")," is received from the clearinghouse to your financial dimension. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The transaction can include one ",(0,n.kt)("a",{parentName:"li",href:"/docs/RCM/Payment"},"payment")," from one payer, or multiple payments from multiple payers."),(0,n.kt)("li",{parentName:"ul"},"Each payment from a payer can include a ",(0,n.kt)("a",{parentName:"li",href:"/docs/RCM/Remits"},"remit")," (claim payment) for a single claim, or multiple remits (claim payments) for multiple claims. "))),(0,n.kt)("li",{parentName:"ol"},"A ",(0,n.kt)("a",{parentName:"li",href:"../RCM/Payments.md"},"payment")," is automatically created when a payment comes into your clearinghouse. The payment is automatically posted to the claim it was paid against. The payment information fields are updated on the claim.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A payment can also include a Payment Adjustment (positive or negative) - when the payer wants to make an adjustment that is not related to a specific remit, or when it is for a remit not included in this payment (a past remit for example)."))),(0,n.kt)("li",{parentName:"ol"},"When the payments/remits are received, they are matched up to the claims they are paying up, and can be reviewed to ensure that the maximum reimbursement was received."),(0,n.kt)("li",{parentName:"ol"},"Very often, there will be adjustments or denials that the organization can resubmit (e.g., if a claim was submitted with the wrong authorization number, if the payer unrightfully denies payment as unauthorized, if the payer claims the member is not covered, etc.). The affected claims are then modified and resubmitted and the process begins again")),(0,n.kt)("h2",{id:"correcting-claims"},"Correcting Claims"),(0,n.kt)("p",null,"To submit a corrected claim, click the 'Modify & Resubmit' button on the claim. This generates a copy of the claim in 'Draft' status, allowing edits to the claim and claim line information."),(0,n.kt)("p",null,"When the modified claim is ready to be submitted, click the 'Save & Submit' button. The system will run a validation check to ensure the claim has all required fields. If the claim is missing any required fields, a notification banner will display to indicate which fields are missing."),(0,n.kt)("p",null,"If the validation passes, the status reason of the claim will be updated to 'Ready to Submit', and will be submitted with the next batch of claims being submitted to the clearinghouse."),(0,n.kt)("h2",{id:"session-resubmissions"},"Session Resubmissions"),(0,n.kt)("p",null,'When an encounter service was "unsubmitted" to allow the practitioner to make edits, if a claim line was already created, the charge item will be set to "Awaiting Resubmission" (by support).'),(0,n.kt)("p",null,'Review "Awaiting Resubmission" charge items to determine if the edits made to the session necessitate modifying and resubmitting the claim.'),(0,n.kt)("p",null,'Update charge item from "Awaiting Resubmission" to "Claim Line Created" and modify and resubmit the claim based on the updates made to the session.'))}p.isMDXComponent=!0}}]);