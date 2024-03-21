"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[2902],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),c=p(a),y=r,d=c["".concat(o,".").concat(y)]||c[y]||u[y]||l;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"Payment",title:"Payments"},i="Payments",m={unversionedId:"RCM/Payment",id:"RCM/Payment",title:"Payments",description:'Click "Payments" on the sitemap of the RCM app to view all payments that have come in from payers to your clearinghouse.',source:"@site/docs/RCM/Payment.md",sourceDirName:"RCM",slug:"/RCM/Payment",permalink:"/docs/RCM/Payment",draft:!1,tags:[],version:"current",frontMatter:{id:"Payment",title:"Payments"},sidebar:"sidebars",previous:{title:"RCM Workflow",permalink:"/docs/RCM/RCMworkflow"},next:{title:"Remits",permalink:"/docs/RCM/Remits"}},o={},p=[{value:"Search Payments",id:"search-payments",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"payments"},"Payments"),(0,r.kt)("p",null,'Click "Payments" on the sitemap of the RCM app to view all payments that have come in from payers to your clearinghouse.'),(0,r.kt)("p",null,"A payment can also include a Payment Adjustment (can be positive or negative amount) - when the payer wants to make an adjustment that is not related to a specific remit, or when it is for a remit not included in this payment (a past remit for example)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transaction Information")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"X12 Data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Transaction Number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Check Issue or Eft Effective Date")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Credit Or Debit Flag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Payment Format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Payment Method")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Transaction Handling Code"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payer Information")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Payer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Billing Office")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Sender Account Number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Sender Dfi Id Number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Sender Dfi Id Number Type"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payee Information")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Payee")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Financial Dimension")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Delivered To"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payment Information")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Payment Amount")," - the total amount paid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Total Payment Adjustments")," ")),(0,r.kt)("h1",{id:"create-a-manual-payment"},"Create a Manual Payment"),(0,r.kt)("p",null,"To create a new Payment record, click 'Add New Payment'. Payment type will default to Manual, and allow you to enter the following fields: payment reference number, payment date, payer, paid amount."),(0,r.kt)("p",null,"The following fields will be recalculated on payments as you post remits to claims:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Total Amount Posted"),": amount of the payment applied towards claims."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Total Amount Not Posted"),": amount of the payment not applied towards any claims.")),(0,r.kt)("h2",{id:"search-payments"},"Search Payments"),(0,r.kt)("p",null,"Select 'Payments' on the left navigation bar in the RCM app to open the Payments Main Grid. The Payments Main Grid has 3 different views."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"All Payments")," view displays all Payment records in the system. "),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Recent Payments")," view displays all Payment records created in the last 30 days."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Manual Payments")," view displays all Manual Payment records.")))}u.isMDXComponent=!0}}]);