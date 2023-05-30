"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[9347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var i=n(7462),o=(n(7294),n(3905));const r={id:"Conditions",title:"Conditions"},a="Conditions",d={unversionedId:"Patients/Conditions",id:"Patients/Conditions",title:"Conditions",description:"Conditions Main Grid",source:"@site/docs/Patients/Conditions.md",sourceDirName:"Patients",slug:"/Patients/Conditions",permalink:"/docs/Patients/Conditions",draft:!1,tags:[],version:"current",frontMatter:{id:"Conditions",title:"Conditions"},sidebar:"sidebars",previous:{title:"Connection Role",permalink:"/docs/Patients/ConnectionRole"},next:{title:"Episode Of Care",permalink:"/docs/Patients/EpisodeOfCare"}},l={},s=[{value:"Conditions Main Grid",id:"conditions-main-grid",level:2},{value:"Conditions Main Form",id:"conditions-main-form",level:2},{value:"<u> Add New Condition </u>",id:"-add-new-condition-",level:2},{value:"<u> Edit Conditions </u>",id:"-edit-conditions-",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conditions"},"Conditions"),(0,o.kt)("h2",{id:"conditions-main-grid"},"Conditions Main Grid"),(0,o.kt)("p",null,"Currently, there is no main grid displaying condition records since no need was expressed. To view all Condition records, utilize Advanced Find (which is OOB from Dynamics.)   "),(0,o.kt)("h2",{id:"conditions-main-form"},"Conditions Main Form"),(0,o.kt)("p",null,"By selecting a record from the Conditions sub grid (on a Patient Contact Form), the Conditions Main Form will open. The Conditions Main Form has 1 tab to display all information needed. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Summary tab has 1 section.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Condition Information",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Patient (Required)"),(0,o.kt)("li",{parentName:"ul"},"Condition Code - The diagnosis code for this condition. (Required)"),(0,o.kt)("li",{parentName:"ul"},"Clinical Status - The Status of this condition. Options are: Active, Recurrence, Inactive, Remission, Resolved.  (Required)"),(0,o.kt)("li",{parentName:"ul"},"Severity - Mild, Moderate or Severe"),(0,o.kt)("li",{parentName:"ul"},"Onset - The date when the condition started. (Required)"),(0,o.kt)("li",{parentName:"ul"},"Historical As Of - The date when the condition ended. "))))),(0,o.kt)("li",{parentName:"ul"},"Header: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Status Reason"))),(0,o.kt)("li",{parentName:"ul"},"Name -  The Condition Name is the Condition Code and the Contact Full Name. For example, F840 - Autistic disorder - John Smith. The name is set when a Condition is created or when the Condition Code field or Patient Name on the Patient record is updated.")),(0,o.kt)("h2",{id:"-add-new-condition-"},(0,o.kt)("u",null," Add New Condition ")),(0,o.kt)("p",null,"To create a new Condition, click on the 'Add New Condition' button on the Conditions sub grid (on a Patient Contact Form). This will open up the New Condition Quick Create."),(0,o.kt)("p",null,"*** The Patient field is prepopulated with the Patient navigating from. "),(0,o.kt)("h2",{id:"-edit-conditions-"},(0,o.kt)("u",null," Edit Conditions ")),(0,o.kt)("p",null,"To edit a Conditions, select a Condition record from the Conditions sub grid (on a Patient Contact Form). This will open up the Condition Main Form."),(0,o.kt)("p",null,"*** The Patient field cannot be edited."))}u.isMDXComponent=!0}}]);