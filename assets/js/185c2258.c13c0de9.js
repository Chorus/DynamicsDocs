"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[724],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,d=u["".concat(m,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4844:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"RCMworkflow",title:"RCM Workflow"},o="Remits Workflow",l={unversionedId:"RCM/RCMworkflow",id:"RCM/RCMworkflow",title:"RCM Workflow",description:"The Remits workflow happens primarily in the RCM app.",source:"@site/docs/RCM/RCMworkflow.md",sourceDirName:"RCM",slug:"/RCM/RCMworkflow",permalink:"/docs/RCM/RCMworkflow",draft:!1,tags:[],version:"current",frontMatter:{id:"RCMworkflow",title:"RCM Workflow"},sidebar:"sidebars",previous:{title:"Claims",permalink:"/docs/Billing/Claims"},next:{title:"Payments",permalink:"/docs/RCM/Payment"}},m={},s=[],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"remits-workflow"},"Remits Workflow"),(0,a.kt)("p",null,"The Remits workflow happens primarily in the ",(0,a.kt)("strong",{parentName:"p"},"RCM")," app."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("a",{parentName:"li",href:"/docs/RCM/Transactions"},"transaction")," is received from the clearinghouse to your financial dimension. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The transaction can include one ",(0,a.kt)("a",{parentName:"li",href:"/docs/RCM/Payment"},"payment")," from one payer, or multiple payments from multiple payers."),(0,a.kt)("li",{parentName:"ul"},"Each payment from a payer can include a ",(0,a.kt)("a",{parentName:"li",href:"/docs/RCM/Remits"},"remit")," (claim payment) for a single claim, or multiple remits (claim payments) for multiple claims. "))),(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("a",{parentName:"li",href:"../RCM/Payments.md"},"payment")," is automatically created when a payment comes into your clearinghouse. The payment is automatically posted to the claim it was paid against. The payment information fields are updated on the claim.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A payment can also include a Payment Adjustment (positive or negative) - when the payer wants to make an adjustment that is not related to a specific remit, or when it is for a remit not included in this payment (a past remit for example)."))),(0,a.kt)("li",{parentName:"ol"},"When the payments/remits are received, they are matched up to the claims they are paying up, and can be reviewed to ensure that the maximum reimbursement was received."),(0,a.kt)("li",{parentName:"ol"},"Very often, there will be adjustments or denials that the organization can resubmit (e.g., if a claim was submitted with the wrong authorization number, if the payer unrightfully denies payment as unauthorized, if the payer claims the member is not covered, etc.). The affected claims are then modified and resubmitted and the process begins again")))}p.isMDXComponent=!0}}]);