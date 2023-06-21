"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[3447],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={id:"Coverages",title:"Coverage"},o="Coverages",s={unversionedId:"Patients/Coverages",id:"Patients/Coverages",title:"Coverage",description:"Coverage is the reimbursement plan that a patient is subscribed to with an insurance company, who will be paying for the services you provide to the patient. Validations on scheduled services will roll back to the coverage \u2013 to make sure the patient has active coverage for the dates of service.",source:"@site/docs/Patients/Coverages.md",sourceDirName:"Patients",slug:"/Patients/Coverages",permalink:"/docs/Patients/Coverages",draft:!1,tags:[],version:"current",frontMatter:{id:"Coverages",title:"Coverage"},sidebar:"sidebars",previous:{title:"Episode Of Care",permalink:"/docs/Patients/EpisodeOfCare"},next:{title:"Authorization",permalink:"/docs/Patients/Authorization"}},l={},c=[{value:"Create a Coverage",id:"create-a-coverage",level:2},{value:"Search Coverages",id:"search-coverages",level:2}],p={toc:c};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"coverages"},"Coverages"),(0,n.kt)("p",null,"Coverage is the reimbursement plan that a patient is subscribed to with an insurance company, who will be paying for the services you provide to the patient. Validations on scheduled services will roll back to the coverage \u2013 to make sure the patient has active coverage for the dates of service."),(0,n.kt)("h2",{id:"create-a-coverage"},"Create a Coverage"),(0,n.kt)("p",null,"Create a new Coverage, by clicking on the 'Add New Coverage' button on the Coverages sub grid (on a Patient Contact Form), or clicking the 'New' button on the Coverages Main Grid."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Coverage Information")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Status Reason")," - Select \u2018Active\u2019 when creating a patient\u2019s active coverage record. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Member")," (Patient) \u2013 pre-populated as the patient whose profile you\u2019re on when adding this record."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Member ID")," - Enter the Member ID as it appears on the patient\u2019s insurance card. The member ID is transferred to the claim. It also enables you to run eligibility checks from within the Autism Care app and receive accurate responses."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Relationship")," - Select the option that best describes the relationship of the member/patient to the policy holder. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Policy Holder")," - Select the contact record of the person that is the policy holder. If the relationship is \u2018Self\u2019; the \u2018Policy Holder\u2019 should be the patient him/herself, otherwise select one of the patient\u2019s ",(0,n.kt)("a",{parentName:"li",href:"/docs/Patients/Connection"},"related contacts"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Start Date")," - Enter the start date for this coverage."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"End Date")," - Enter the end date for this coverage."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Plan")," - Select the plan the patient is covered under. The plans option-set is based on the plans that you have set up in the system."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Payer")," - Upon creating or updating the Plan field on the Coverage record, the Payer field is updated with the value of the Issuer field on the Plan selected. ")),(0,n.kt)("h2",{id:"search-coverages"},"Search Coverages"),(0,n.kt)("p",null,"By clicking on 'Coverages' on the left navigation bar in the Clinical Area, the Coverages Main Grid will open up. The Coverages Main Grid has 3 different views, all sorted by the Policy End Date with the older dates displaying first."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Active Coverages")," view displays all the Active Coverage records in the system. "),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Draft Coverages")," view displays all the Draft Coverage records in the system. "),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Expiring Coverages")," view displays all the Coverage records in the system where the Policy End Date is in the next 30 days.")))}h.isMDXComponent=!0}}]);