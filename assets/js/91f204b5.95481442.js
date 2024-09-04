"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[3704],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={id:"Remits",title:"Remits"},o="Remits",l={unversionedId:"RCM/Remits",id:"RCM/Remits",title:"Remits",description:'Remits, or claim payments, represent electronic remittance advice (ERA) that contain information regarding the claim payment  - what was paid per claim line, what adjustments the payer made on each claim line (what they did not pay) along with CARC codes for each adjustment, which explains what the adjustment is about (e.g., "CO-45" means according to the contract, the payer agreed to pay only x amount, so the amount paid was adjusted).',source:"@site/docs/RCM/Remits.md",sourceDirName:"RCM",slug:"/RCM/Remits",permalink:"/docs/RCM/Remits",draft:!1,tags:[],version:"current",frontMatter:{id:"Remits",title:"Remits"},sidebar:"sidebars",previous:{title:"Payments",permalink:"/docs/RCM/Payment"}},s={},m=[{value:"Create a Manual Remit",id:"create-a-manual-remit",level:2},{value:"Search Remits",id:"search-remits",level:2}],c={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"remits"},"Remits"),(0,r.kt)("p",null,'Remits, or claim payments, represent electronic remittance advice (ERA) that contain information regarding the claim payment  - what was paid per claim line, what adjustments the payer made on each claim line (what they did not pay) along with CARC codes for each adjustment, which explains what the adjustment is about (e.g., "CO-45" means according to the contract, the payer agreed to pay only x amount, so the amount paid was adjusted).'),(0,r.kt)("p",null,"A remit can also include a Remit Adjustment (can be positive or negative amount) - when the payer wants to make an adjustment to a few lines in the claim/remit. "),(0,r.kt)("h2",{id:"create-a-manual-remit"},"Create a Manual Remit"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On a claim, go to the Remits Summary tab. Click 'New Claim Payment' to create a new claim payment for this claim. Claim information will be populated based on the claim it is created from. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fill out the relevant remit information (claim filing indicator, claim status code, etc.)"),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("a",{parentName:"li",href:"/docs/RCM/Payment"},"Payment")," lookup field, select an existing payment record, or create a new one. To create a new Payment record, click 'Add New Payment'. Payment type will default to Manual, and allow you to enter the following fields: payment reference number, payment date, payer, paid amount. Click Save and Close on this Quick Create form."),(0,r.kt)("li",{parentName:"ul"},"When you are done entering the Remit information, click Save. "))),(0,r.kt)("li",{parentName:"ol"},"Once saved, remit lines for all claim lines on the claim will be populated according to the information on the corresponding claim lines (procedure code, dates of service, quantity, billed amount, etc.). The Paid Amount field will be blank on all Remits and Remit Lines."),(0,r.kt)("li",{parentName:"ol"},"Enter the Paid Amount on each Remit Line."),(0,r.kt)("li",{parentName:"ol"},"Once you have entered the total paid on the remit lines, go back to claim and refresh or click 'Recalculate' to get the updated totals.")),(0,r.kt)("p",null,"Remits can be set as cost share remits to pay up the Cost Share Oustanding (cost share balance) on claims and claim lines, rather than the Total Outstanding (payer balance). ",(0,r.kt)("a",{parentName:"p",href:"/docs/RCM/RCMworkflow/#posting-cost-share-payments"},"Read more about posting cost share payments"),"."),(0,r.kt)("h2",{id:"search-remits"},"Search Remits"),(0,r.kt)("p",null,"Select 'Remits' on the site menu in the RCM app to open the Remits Main Grid. The Remits Main Grid has 3 different views:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Recent Remits")," (default) view displays remits where the related ",(0,r.kt)("a",{parentName:"li",href:"/docs/RCM/Transactions"},"transaction")," was created in the last 30 days."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"All Remits")," view displays all the remit records in the system. "),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Orphaned Remits")," view displays remits that do not have a related claim. These remits should be ",(0,r.kt)("a",{parentName:"li",href:"/docs/RCM/RCMworkflow/#posting-orphaned-remits"},"posted to claims")," as a prerequisite for posting orphaned remit lines to claim lines."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Remits with Orphaned Remit Lines")," view displays all the remits where remit lines weren\u2019t posted to claim lines. These remit lines should be ",(0,r.kt)("a",{parentName:"li",href:"/docs/RCM/RCMworkflow/#posting-orphaned-remits"},"posted to claim lines")," to accurately update the total outstanding and paid amounts on the claim. Remit lines are named with Procedure Code and Start Date for easy matching to claim lines.")))}p.isMDXComponent=!0}}]);