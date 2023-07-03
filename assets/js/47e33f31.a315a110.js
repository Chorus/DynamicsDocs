"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[4920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={id:"Connection",title:"Connections"},i="Connection",c={unversionedId:"Patients/Connection",id:"Patients/Connection",title:"Connections",description:"A connection record specifies the relationship between 2 other records (e.g. a Related Contact to a Patient Contact).",source:"@site/docs/Patients/Connection.md",sourceDirName:"Patients",slug:"/Patients/Connection",permalink:"/docs/Patients/Connection",draft:!1,tags:[],version:"current",frontMatter:{id:"Connection",title:"Connections"},sidebar:"sidebars",previous:{title:"Overview",permalink:"/docs/Patients/PatientOverview"},next:{title:"Conditions",permalink:"/docs/Patients/Conditions"}},l={},s=[{value:"Create a Connection",id:"create-a-connection",level:2},{value:"Connection Role",id:"2",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connection"},"Connection"),(0,a.kt)("p",null,"A connection record specifies the relationship between 2 other records (e.g. a Related Contact to a Patient Contact)."),(0,a.kt)("h2",{id:"create-a-connection"},"Create a Connection"),(0,a.kt)("p",null,"A new connection record can be created from a Patient Contact record. The Profile Info tab has a section called 'Related Contacts'. Clicking on the 3 dots on the Related Contacts subgrid, displays a few options. Upon clicking 'New Related Contact', the Connection Main Form opens."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Connect From")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Patient"),": Upon creating a Connection from the Related Contacts subgrid on a Patient Contact Form, this field is populated with the Patient navigating from and cannot be changed. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Connect To")," - This section lists information about the Contact that should be related to the Patient:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Related Contact"),": select an existing Related Contact record, if it already exists (e.g., a Parent Related Contact that is already in the system from when you serviced this Patient's sibling). Otherwise, create a new contact record.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Contact Type \u2013 \u2018Related Person\u2019 is selected by default."),(0,a.kt)("li",{parentName:"ul"},"General Information \u2013 Enter the name, gender, and marital status of the contact person."),(0,a.kt)("li",{parentName:"ul"},"Contact Information \u2013 enter phone numbers, email address, and preferred contact method.\nOnce the record is saved it is automatically selected as the \u2018Related Contact\u2019 on the connection record."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Related To Patient As")," - This field is populated with the relationship between contact and patient (e.g. mother, father, babysitter etc.). This field only displays connection roles that are a 'contact relationship'. See ",(0,a.kt)("a",{parentName:"li",href:"#2"},"connection roles"),". "),(0,a.kt)("li",{parentName:"ul"},"Patient's Primary Contact? - This field has 2 options: Patient's Primary Contact or Other Related Contact. This helps a company know who to be in touch with about the Patient. ")),(0,a.kt)("h2",{id:"2"},"Connection Role"),(0,a.kt)("p",null,"Most connection roles should be included in our solution. Upon implementation, additional connection roles may be added. Connection Roles explain the relationship between a contact and a patient. "),(0,a.kt)("p",null,"A new connection role record can be created from a Connection record. Upon clicking into the 'Related To Patient As' field, select the option 'New Connection Role Record' to open the Connection Role Main Form."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Name")," (Required). "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Connection Role Category")," - This categories the type of connection."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Description"))),(0,a.kt)("p",null,"In order to ensure the Connection Role displays in the 'Related To Patient As' field on the Connection Main Form, the 'Connection Role Category' must be set as 'Contact Relationship'."))}d.isMDXComponent=!0}}]);