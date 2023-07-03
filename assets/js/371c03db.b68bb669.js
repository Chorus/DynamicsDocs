"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[3200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const o={id:"Location",title:"Locations"},r="Locations",s={unversionedId:"AdminSetup/Location",id:"AdminSetup/Location",title:"Locations",description:"Locations are for tracking any addresses relevant to your organization, such as offices, schools, patient billing addresses, and more.",source:"@site/docs/AdminSetup/Location.md",sourceDirName:"AdminSetup",slug:"/AdminSetup/Location",permalink:"/docs/AdminSetup/Location",draft:!1,tags:[],version:"current",frontMatter:{id:"Location",title:"Locations"},sidebar:"sidebars",previous:{title:"Fee Schedules",permalink:"/docs/AdminSetup/FeeSchedules"},next:{title:"Qualification Definitions",permalink:"/docs/AdminSetup/QualificationDefinition"}},l={},c=[{value:"Create a Location",id:"create-a-location",level:2},{value:"Search Locations",id:"search-locations",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"locations"},"Locations"),(0,a.kt)("p",null,"Locations are for tracking any addresses relevant to your organization, such as offices, schools, patient billing addresses, and more. "),(0,a.kt)("h2",{id:"create-a-location"},"Create a Location"),(0,a.kt)("p",null,"A new Location record can be created from a few places. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clinical Area - When on a ",(0,a.kt)("a",{parentName:"li",href:"/docs/Patients/PatientOverview"},"Patient")," Contact record, the Profile Info tab has a section called 'Patient Addresses'. Clicking on the 3 dots on the Patient Addresses subgrid, displays a few options. Upon clicking 'New Location', the Location Main Form opens."),(0,a.kt)("li",{parentName:"ol"},"Setup Area - The setup area has a group called 'Services Setup' with Locations listed. Upon clicking 'Locations', the Location Main Form opens.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Address Information")," - The 'Address Information' section contains the basic information to differenciate locations. This section has the following fields. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Description")," - This field can be populated to give the location a clear name for easy reference (e.g., Steven's summer home). ",(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Location Description is displayed on a practitioner's session details view in the Note app."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Location Type")," - This field defines the location type \u2013 home, school, office, telecare, or other. On the claim, the location code will be based on the value in this field, for all encounters taking place at this address. (Required field.)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Address Type")," - If the Location Type is 'Home,' this field must be populated with 'Billing Address', 'Service Address' or both. A Patient can only have 1 address as their 'Billing Address'."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Patient")," - This field defines the patient this address is related to. This address will display as an encounter location option when an encounter is scheduled for this patient. If this Location is a general location (e.g. a school), where numerous patients are serviced, this field would be left empty. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When \u2018Home\u2019 is selected as the \u2018Location Type\u2019, this field becomes required."),(0,a.kt)("li",{parentName:"ul"},"Once the record is saved, the Patient field locks and cannot be changed."))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Address Details")," - The 'Address Details' section contains the address. The fields in this section are: Street Address (Required), Apt, Unit, Floor, City (Required), State (Required), Zip Code (Required), Additional Directions (any additional directions so that practitioners can find their way easily, e.g., \"first door on the right side of the house\").  ")),(0,a.kt)("h2",{id:"search-locations"},"Search Locations"),(0,a.kt)("p",null,"Select 'Location' on the left navigation bar in the Setup Area to open the Location Main Grid. The General Service Locations view displays active Locations which are not related to a Patient record. The All Service Locations view displays all the active Locations in the system."))}p.isMDXComponent=!0}}]);