"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[4726],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),l=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(u,".").concat(d)]||p[d]||h[d]||a;return r?i.createElement(m,o(o({ref:t},c),{},{components:r})):i.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=r(7462),n=(r(7294),r(3905));const a={id:"AuthorizationServices",title:"Authorization Services"},o="Authorization Services",s={unversionedId:"Patients/AuthorizationServices",id:"Patients/AuthorizationServices",title:"Authorization Services",description:"Authorization Servies track the number of hours/units that were authorized per service.",source:"@site/docs/Patients/AuthorizationServices.md",sourceDirName:"Patients",slug:"/Patients/AuthorizationServices",permalink:"/docs/Patients/AuthorizationServices",draft:!1,tags:[],version:"current",frontMatter:{id:"AuthorizationServices",title:"Authorization Services"},sidebar:"sidebars",previous:{title:"Authorizations",permalink:"/docs/Patients/Authorization"},next:{title:"Care Team Participants",permalink:"/docs/Patients/CareTeamParticipants"}},u={},l=[{value:"Create an Authorization Service",id:"create-an-authorization-service",level:2}],c={toc:l};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"authorization-services"},"Authorization Services"),(0,n.kt)("p",null,"Authorization Servies track the number of hours/units that were authorized per service. "),(0,n.kt)("h2",{id:"create-an-authorization-service"},"Create an Authorization Service"),(0,n.kt)("p",null,"To create a new Authorization Service, click 'New Authorization Service' on the Authorization Services subgrid (on an Authorization Form) to open the Authorization Service Quick Create."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Authorization Information")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Authorization Name")," - prepopulated with the Authorization you are adding this service to."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Service Code")," - Select the Insurance Plan Benefit for the authorized service. All scheduling for this authorization service will be validated against the rules set up on this insurance plan benefit.  This option-set displays  Insurance Plan Benefits within the plan that the authorization is covered under."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Start Date")," - prepopulated with the Authorization Period Start Date and can be changed if necessary."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"End Date")," - prepopulated with the Authorization Period End Date and can be changed if necessary.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Authorized Units")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Authorized As")," - Choose how the hours/units were authorized \u2013 Hours per week, Hours per month, Units per week, Units per month, or Total units. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This affects how the ",(0,n.kt)("a",{parentName:"li",href:"/docs/Scheduling/Utilization/#authorization-service-utilizations"},"Authorization Service Utilization")," will be created."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Amount Authorized")," - Enter the number or hours/units authorized for this service, according to the 'Authorized As' selected above."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Validate Encounters")," - Select how you want the validations for this service to be calculated. They can either be validated as authorized, meaning that sessions exceeding the amount of hours/units for the frequency selected will be rejected. Or, they can be validated by total units for the authorization period, meaning that sessions exceeding the amount of hours/units for the frequency selected will only be rejected if it exceeds the total amount of hours/units for the entire authorization period. The selection here affects how the authorization service utilization report calculates and displays utilization.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Claim Settings")," - This section displays fields related to billing Claims. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Rendering Provider")," - This field determines which practitioner should be populated as the Rendering Provider on the claims for this service. By default, the rendering provider is populated based on the settings on the authorization and payer account. However, if needed, it can overridden here for an individual service. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Authorization Rendering Provider")," - This field displays the Rendering Provider field from the Authorization Main Form, so it is easy to see what the setting is on the Authorization.")))}h.isMDXComponent=!0}}]);