"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[3200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,f=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),i=(n(7294),n(3905));const a={id:"Location",title:"Locations"},r="Locations",s={unversionedId:"AdminSetup/Location",id:"AdminSetup/Location",title:"Locations",description:"Locations are for tracking any addresses relevant to your organization, such as offices, schools, patient billing addresses, and more.",source:"@site/docs/AdminSetup/Location.md",sourceDirName:"AdminSetup",slug:"/AdminSetup/Location",permalink:"/docs/AdminSetup/Location",draft:!1,tags:[],version:"current",frontMatter:{id:"Location",title:"Locations"},sidebar:"sidebars",previous:{title:"Fee Schedules",permalink:"/docs/AdminSetup/FeeSchedules"},next:{title:"Qualification Definitions",permalink:"/docs/AdminSetup/QualificationDefinition"}},c={},l=[{value:"Create a Location",id:"create-a-location",level:2},{value:"Search Locations",id:"search-locations",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"locations"},"Locations"),(0,i.kt)("p",null,"Locations are for tracking any addresses relevant to your organization, such as offices, schools, patient billing addresses, and more. "),(0,i.kt)("h2",{id:"create-a-location"},"Create a Location"),(0,i.kt)("p",null,"A new Location record can be created from a few places. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clinical Area - When on a ",(0,i.kt)("a",{parentName:"p",href:"/docs/Patients/PatientOverview"},"Patient")," Contact record, the Profile Info tab has a section called 'Patient Addresses'. Clicking on the 3 dots on the Patient Addresses subgrid, displays a few options. Upon clicking 'New Location', the Location Main Form opens.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Setup Area - The setup area has a group called 'Services Setup' with Locations listed. Upon clicking 'Locations', the Location Main Form opens."),(0,i.kt)("p",{parentName:"li"}," The ",(0,i.kt)("strong",{parentName:"p"},"Address Information")," section contains the basic information to differentiate locations. This section has the following fields. "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- *Description* - This field can be populated to give the location a clear name for easy reference (e.g., Steven's summer home). \n:::note\nThe Location Description is displayed on a practitioner's session details view in the Note app.\n:::\n- *Location Type* - This field defines the location type \u2013 home, school, office, telecare, or other. On the claim, the location code will be based on the value in this field, for all encounters taking place at this address. (Required field.)\n    - *Address Type* - If the Location Type is 'Home,' this field must be populated with 'Billing Address', 'Service Address' or both. A Patient can only have 1 address as their 'Billing Address'.\n- *Patient* - This field defines the patient this address is related to. This address will display as an encounter location option when an encounter is scheduled for this patient. If this Location is a general location (e.g. a school), where numerous patients are serviced, this field would be left empty. \n    - When \u2018Home\u2019 is selected as the \u2018Location Type\u2019, this field becomes required.\n    - Once the record is saved, the Patient field locks and cannot be changed.\n")),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Address Details"),' section contains the address: Street Address, Apt, Unit, Floor, City, State, Zip Code, and Additional Directions (any additional directions so that practitioners can find their way easily, e.g., "first door on the right side of the house").  '))),(0,i.kt)("h2",{id:"search-locations"},"Search Locations"),(0,i.kt)("p",null,"Select 'Location' on the left navigation bar in the Setup Area to open the Location Main Grid. The General Service Locations view displays active Locations which are not related to a Patient record. The All Service Locations view displays all the active Locations in the system."))}p.isMDXComponent=!0}}]);