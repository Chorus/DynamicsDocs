"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[724],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(i),h=n,u=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return i?a.createElement(u,r(r({ref:t},c),{},{components:i})):a.createElement(u,r({ref:t},c))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var m=2;m<o;m++)r[m]=i[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4844:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=i(7462),n=(i(7294),i(3905));const o={id:"RCMworkflow",title:"RCM Workflow"},r="Remits Workflow",l={unversionedId:"RCM/RCMworkflow",id:"RCM/RCMworkflow",title:"RCM Workflow",description:"The Remits workflow happens primarily in the RCM app.",source:"@site/docs/RCM/RCMworkflow.md",sourceDirName:"RCM",slug:"/RCM/RCMworkflow",permalink:"/docs/RCM/RCMworkflow",draft:!1,tags:[],version:"current",frontMatter:{id:"RCMworkflow",title:"RCM Workflow"},sidebar:"sidebars",previous:{title:"Claims",permalink:"/docs/Billing/Claims"},next:{title:"Payments",permalink:"/docs/RCM/Payment"}},s={},m=[{value:"Correcting Claims",id:"correcting-claims",level:2},{value:"Session Resubmissions",id:"session-resubmissions",level:2},{value:"Posting Orphaned Remits",id:"posting-orphaned-remits",level:2}],c={toc:m};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"remits-workflow"},"Remits Workflow"),(0,n.kt)("p",null,"The Remits workflow happens primarily in the ",(0,n.kt)("strong",{parentName:"p"},"RCM")," app."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A ",(0,n.kt)("a",{parentName:"li",href:"/docs/RCM/Transactions"},"transaction")," is received from the clearinghouse to your financial dimension. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The transaction can include one ",(0,n.kt)("a",{parentName:"li",href:"/docs/RCM/Payment"},"payment")," from one payer, or multiple payments from multiple payers."),(0,n.kt)("li",{parentName:"ul"},"Each payment from a payer can include a ",(0,n.kt)("a",{parentName:"li",href:"/docs/RCM/Remits"},"remit")," (claim payment) for a single claim, or multiple remits (claim payments) for multiple claims. "))),(0,n.kt)("li",{parentName:"ol"},"A ",(0,n.kt)("a",{parentName:"li",href:"../RCM/Payments.md"},"payment")," is automatically created when a payment comes into your clearinghouse. The payment is automatically posted to the claim it was paid against. The payment information fields are updated on the claim.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A payment can also include a Payment Adjustment (positive or negative) - when the payer wants to make an adjustment that is not related to a specific remit, or when it is for a remit not included in this payment (a past remit for example)."))),(0,n.kt)("li",{parentName:"ol"},"When the payments/remits are received, they are automatically posted to the claims they are paying up, and can be reviewed to ensure that the maximum reimbursement was received.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'When the system does not identify a claim to post a remit to, you can manually post the "orphaned" remit to a claim. The same goes for posting orphaned remit lines to claim lines. See ',(0,n.kt)("a",{parentName:"li",href:"/docs/RCM/RCMworkflow/#posting-orphaned-remits"},"Posting Orphaned Remits")))),(0,n.kt)("li",{parentName:"ol"},"Very often, there will be adjustments or denials that the organization can resubmit (e.g., if a claim was submitted with the wrong authorization number, if the payer unrightfully denies payment as unauthorized, if the payer claims the member is not covered, etc.). The affected claims are then modified and resubmitted and the process begins again.")),(0,n.kt)("h2",{id:"correcting-claims"},"Correcting Claims"),(0,n.kt)("p",null,"To submit a corrected claim, click the 'Modify & Resubmit' button on the claim. This generates a copy of the claim in 'Draft' status, allowing edits to the claim and claim line information."),(0,n.kt)("p",null,"When the modified claim is ready to be submitted, click the 'Save & Submit' button. The system will run a validation check to ensure the claim has all required fields. If the claim is missing any required fields, a notification banner will display to indicate which fields are missing."),(0,n.kt)("p",null,"If the validation passes, the status reason of the claim will be updated to 'Ready to Submit', and will be submitted with the next batch of claims being submitted to the clearinghouse."),(0,n.kt)("h2",{id:"session-resubmissions"},"Session Resubmissions"),(0,n.kt)("p",null,'When an encounter service was "unsubmitted" to allow the practitioner to make edits, if a claim line was already created, the charge item will be set to "Awaiting Resubmission" (by support).'),(0,n.kt)("p",null,'Review "Awaiting Resubmission" charge items to determine if the edits made to the session necessitate modifying and resubmitting the claim.'),(0,n.kt)("p",null,'Update charge item from "Awaiting Resubmission" to "Claim Line Created" and modify and resubmit the claim based on the updates made to the session.'),(0,n.kt)("h2",{id:"posting-orphaned-remits"},"Posting Orphaned Remits"),(0,n.kt)("p",null,"Orphaned Remits are remits that come in from your clearinghouse but are not posted to any specific claim. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Posting orphaned remits to the right claims will help you identify which claim lines the orphaned remit lines should be posted to. "),(0,n.kt)("li",{parentName:"ul"},"Posting orphaned remit lines (lines on a remit that were not posted to any claim lines) to claim lines will give you accurate tracking of the outstanding and paid amounts on every claim, as well as on a line by line basis.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Post Orphaned Remits to Claims"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On a Claim, go to the Remits Summary tab."),(0,n.kt)("li",{parentName:"ol"},"Click 'Add Existing Claim Payment'. You will be brought to a lookup of all Remits."),(0,n.kt)("li",{parentName:"ol"},"With your cursor in the \"Look for records\" field, press enter. At the bottom of the results, click 'Advanced lookup'.")),(0,n.kt)("img",{src:"/img/advanced lookup.png",width:"800"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},'Switch from the "Claim Payment Lookup View" to the "Orphaned Remits" view. Identify the remit for the claim based on the patient/date of service, etc.')),(0,n.kt)("p",null,'Alternately, you can utilize the "Orphaned Remits" view to go through all orphaned remits and populate the claim field on each remit.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Post Orphaned Remit lines to Claim lines"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Use the "Remits with Orphaned Remit Lines" view to review remits where some of the remit lines have not been posted to claim lines.'),(0,n.kt)("li",{parentName:"ol"},'Open a remit and go to the Remit Lines tab. Remit lines that haven\'t been posted to claim lines display in the "Orphaned Remit Lines" subgrid.'),(0,n.kt)("li",{parentName:"ol"},"Below the orphaned remit lines subgrid, you can review the claim lines on the claim this remit was posted to."),(0,n.kt)("li",{parentName:"ol"},"Identify the claim line to post each orphaned remit to (based on the patient/date of service etc.). Copy the name of the claim line, and paste it into the claim line lookup field on the orphaned remit line."),(0,n.kt)("li",{parentName:"ol"},'Click "Recalculate" on the claim to view the updated total outstanding and paid amounts based on the remit lines that were posted to the claim lines on the claim.')),(0,n.kt)("img",{src:"/img/orphanedremitlines.png",width:"800"}))}p.isMDXComponent=!0}}]);