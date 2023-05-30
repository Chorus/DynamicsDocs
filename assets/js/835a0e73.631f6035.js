"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[8973],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return t?o.createElement(f,l(l({ref:n},d),{},{components:t})):o.createElement(f,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<r;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=t(7462),i=(t(7294),t(3905));const r={id:"ConnectionRole",title:"Connection Role"},l="Connection Role",a={unversionedId:"Patients/ConnectionRole",id:"Patients/ConnectionRole",title:"Connection Role",description:"Most connection roles should be included in our solution. Upon implementation, additional connection roles may be added. Connection Roles explain the relationship between a contact and a patient.",source:"@site/docs/Patients/ConnectionRole.md",sourceDirName:"Patients",slug:"/Patients/ConnectionRole",permalink:"/docs/Patients/ConnectionRole",draft:!1,tags:[],version:"current",frontMatter:{id:"ConnectionRole",title:"Connection Role"},sidebar:"sidebars",previous:{title:"Connection",permalink:"/docs/Patients/Connection"},next:{title:"Conditions",permalink:"/docs/Patients/Conditions"}},c={},s=[{value:"Connection Role Main Grid",id:"connection-role-main-grid",level:2},{value:"Connection Role Main Form",id:"connection-role-main-form",level:2},{value:"<u> Add New Connection Role </u>",id:"-add-new-connection-role-",level:2},{value:"<u> Edit Connection </u>",id:"-edit-connection-",level:2}],d={toc:s};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connection-role"},"Connection Role"),(0,i.kt)("p",null,"Most connection roles should be included in our solution. Upon implementation, additional connection roles may be added. Connection Roles explain the relationship between a contact and a patient. "),(0,i.kt)("h2",{id:"connection-role-main-grid"},"Connection Role Main Grid"),(0,i.kt)("p",null,"Currently, there is no main grid displaying connection role records since no need was expressed. To view all connection role records, utilize Advanced Find (which is OOB from Dynamics.)  "),(0,i.kt)("h2",{id:"connection-role-main-form"},"Connection Role Main Form"),(0,i.kt)("p",null,"When creating a ",(0,i.kt)("a",{parentName:"p",href:"/docs/Patients/Connection"},"Connection")," record, 1 field is 'Related To Patient As'. This lists out all the possible relationships the contact may have to the Patient. By clicking on 1 of the options or choosing to create a new one, the Connection Role Main Form will open. The Connection Role Main Form has 1 tab to display all information needed. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The General tab has 1 section.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name (Required). "),(0,i.kt)("li",{parentName:"ul"},"Connection Role Category - This categories the type of connection."),(0,i.kt)("li",{parentName:"ul"},"Description")))))),(0,i.kt)("h2",{id:"-add-new-connection-role-"},(0,i.kt)("u",null," Add New Connection Role ")),(0,i.kt)("p",null,"A new connection role record can be created from a ",(0,i.kt)("a",{parentName:"p",href:"/docs/Patients/Connection"},"Connection")," record. Upon clicking into the 'Related To Patient As' field, select the option 'New Connection Role Record' to open the Connection Role Main Form."),(0,i.kt)("p",null,"In order to ensure the Connection Role displays in the 'Related To Patient As' field on the Connection Main Form, the 'Connection Role Category' must be set as 'Contact Relationship'. "),(0,i.kt)("h2",{id:"-edit-connection-"},(0,i.kt)("u",null," Edit Connection ")),(0,i.kt)("p",null,"A connection role record can be edited by opening the connection role record. Upon populating the 'Related To Patient As' field and clicking the connection role, the Connection Role Main Form will be opened."))}p.isMDXComponent=!0}}]);