"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[4920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={id:"Connection",title:"Connections"},i="Connections",c={unversionedId:"Patients/Connection",id:"Patients/Connection",title:"Connections",description:"A connection record specifies the relationship between 2 other records (e.g., a Related Contact to a Patient Contact).",source:"@site/docs/Patients/Connection.md",sourceDirName:"Patients",slug:"/Patients/Connection",permalink:"/docs/Patients/Connection",draft:!1,tags:[],version:"current",frontMatter:{id:"Connection",title:"Connections"},sidebar:"sidebars",previous:{title:"Overview",permalink:"/docs/Patients/PatientOverview"},next:{title:"Conditions",permalink:"/docs/Patients/Conditions"}},l={},s=[{value:"Create a Connection",id:"create-a-connection",level:2},{value:"Connection Roles",id:"connection-roles",level:2},{value:"Primary Contact Engagement Emails",id:"primary-contact-engagement-emails",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connections"},"Connections"),(0,o.kt)("p",null,"A connection record specifies the relationship between 2 other records (e.g., a Related Contact to a Patient Contact)."),(0,o.kt)("h2",{id:"create-a-connection"},"Create a Connection"),(0,o.kt)("p",null,"A new connection record can be created from a Patient Contact record. The Profile Info tab has a section called 'Related Contacts'. Clicking on the 3 dots on the Related Contacts subgrid, displays a few options. Upon clicking 'New Related Contact', the Connection Main Form opens."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connect From")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Patient"),": Upon creating a Connection from the Related Contacts subgrid on a Patient Contact Form, this field is populated with the Patient navigating from and cannot be changed. ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connect To")," - This section lists information about the Contact that should be related to the Patient:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Related Contact"),": select an existing Related Contact record, if it already exists (e.g., a Parent Related Contact that is already in the system from when you serviced this Patient's sibling). Otherwise, create a new contact record.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Contact Type \u2013 \u2018Related Person\u2019 is selected by default."),(0,o.kt)("li",{parentName:"ul"},"General Information \u2013 Enter the name, gender, and marital status of the contact person."),(0,o.kt)("li",{parentName:"ul"},"Contact Information \u2013 enter phone numbers, email address, and preferred contact method.\nOnce the record is saved it is automatically selected as the \u2018Related Contact\u2019 on the connection record."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Related To Patient As")," - This field is populated with the relationship between contact and patient (e.g., mother, father, teacher, etc.). This field only displays connection roles that are a 'contact relationship'. See ",(0,o.kt)("a",{parentName:"li",href:"#connection-roles"},"connection roles"),". "),(0,o.kt)("li",{parentName:"ul"},"Patient's Primary Contact? - This field has 2 options: Patient's Primary Contact or Other Related Contact. This helps an organization know who to be in touch with about the Patient. ")),(0,o.kt)("h2",{id:"connection-roles"},"Connection Roles"),(0,o.kt)("p",null,"Many connection roles are included in our solution. Upon onboarding, additional connection roles may be added. Connection Roles explain the relationship between a contact and a patient. "),(0,o.kt)("p",null,"A new connection role record can be created from a Connection record. Upon clicking into the 'Related To Patient As' field, select the option 'New Connection Role Record' to open the Connection Role Main Form."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Name")," (Required). "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Connection Role Category")," - This categorizes the type of connection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Description"))),(0,o.kt)("p",null,"In order to ensure the Connection Role displays in the 'Related To Patient As' field on the Connection Main Form, the 'Connection Role Category' must be set as 'Contact Relationship'. "),(0,o.kt)("h2",{id:"primary-contact-engagement-emails"},"Primary Contact Engagement Emails"),(0,o.kt)("p",null,"To give parents and primary contacts visibility to and understanding of a patient's treatment and progress, AI-assisted emails are generated weekly to provide a summary of the care plan targets that were focused on that week."),(0,o.kt)("p",null,'Emails are sent to all related contacts that are marked as the Patient\'s Primary Contact (on the connection record), and are not marked as "Do Not Bulk Email" (on the related person contact record).'),(0,o.kt)("p",null,"Emails are sent on Mondays at 8:00 AM EST and summarize targets and sessions from the previous Monday through Sunday."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Email Content")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Targets activated this week"),(0,o.kt)("li",{parentName:"ol"},"Targets mastered this week"),(0,o.kt)("li",{parentName:"ol"},"Targets addressed this week"),(0,o.kt)("li",{parentName:"ol"},"This week's sessions"),(0,o.kt)("li",{parentName:"ol"},"Upcoming sessions"),(0,o.kt)("li",{parentName:"ol"},"AI-assisted summary of patient progress")))}p.isMDXComponent=!0}}]);