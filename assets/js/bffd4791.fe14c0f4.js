"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[6625],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),f=n,h=u["".concat(d,".").concat(f)]||u[f]||c[f]||i;return a?r.createElement(h,o(o({ref:t},l),{},{components:a})):r.createElement(h,o({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={id:"EpisodeOfCare",title:"Episodes of Care"},o="Episodes of Care",s={unversionedId:"Patients/EpisodeOfCare",id:"Patients/EpisodeOfCare",title:"Episodes of Care",description:"The Episode of Care is a complete period that a patient is receiving health care. It generally begins with the patient\u2019s referral or expressed interest in care, and ends with their discharge.",source:"@site/docs/Patients/EpisodeOfCare.md",sourceDirName:"Patients",slug:"/Patients/EpisodeOfCare",permalink:"/docs/Patients/EpisodeOfCare",draft:!1,tags:[],version:"current",frontMatter:{id:"EpisodeOfCare",title:"Episodes of Care"},sidebar:"sidebars",previous:{title:"Conditions",permalink:"/docs/Patients/Conditions"},next:{title:"Coverages",permalink:"/docs/Patients/Coverages"}},d={},p=[{value:"Create an Episode of Care",id:"create-an-episode-of-care",level:2},{value:"Episode Of Care Validation",id:"episode-of-care-validation",level:2},{value:"Episode Of Care History",id:"episode-of-care-history",level:2}],l={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"episodes-of-care"},"Episodes of Care"),(0,n.kt)("p",null,"The Episode of Care is a complete period that a patient is receiving health care. It generally begins with the patient\u2019s referral or expressed interest in care, and ends with their discharge. "),(0,n.kt)("p",null,"An Episode of Care includes all the services provided to the patient to treat their clinical condition during that time period. Tracked on the Episode of Care record, are the start/end dates that the patient was in each stage of intake and when active services began. "),(0,n.kt)("p",null,"(Patients in Autism Care usually have just one Episode of Care record, unless they leave the organization and later return to reinitiate services with the organization.)"),(0,n.kt)("p",null,"A patient\u2019s episode of care is automatically created when an opportunity record for that patient is created. Further managing and updating statuses happens on the patient\u2019s profile, using the Episode of Care Status History records."),(0,n.kt)("h2",{id:"create-an-episode-of-care"},"Create an Episode of Care"),(0,n.kt)("p",null,"To create a new Episode Of Care, click 'New Episode Of Care' on the Episode Of Care subgrid (on a Patient Contact Form). This will open up the New Episode Of Care Quick Create."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Episode Of Care Information")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Patient"),"- The Patient field is prepopulated with the Patient you are navigating from, and cannot be edited."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Period Start Date")," - The Period Start Date cannot be after the Period End Date. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Period End Date"))),(0,n.kt)("h2",{id:"episode-of-care-validation"},"Episode Of Care Validation"),(0,n.kt)("p",null,"Episode Of Care Validation ensures the data integrity of Encounters."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Period Start Date cannot be modified to be after the start date of any related Encounters with a Validation Status of 'Passed', or a Care Team Assignment with a Status Reason of 'Active'."),(0,n.kt)("li",{parentName:"ol"},"Status Reason cannot be 'Entered in Error' if scheduled or completed Encounters exist."),(0,n.kt)("li",{parentName:"ol"},"Period End Date cannot be before the end date of any related encounters with a Validation Status of 'Passed', or a Care Team Assignment with a Status Reason of 'Active'.")),(0,n.kt)("h2",{id:"episode-of-care-history"},"Episode Of Care History"),(0,n.kt)("p",null,"The Episode Of Care History exists to update the Status Reason of the Episode Of Care and keep track of when the status was updated."),(0,n.kt)("p",null,"To update the status of an episode of care, click 'New Episode Of Care History' on the Status Updates subgrid (on the Episode Of Care Main Form). This will open up the New Episode Of Care History Quick Create. The system will automatically end the previous status history and populate the end date as one day before the new status began."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Status Update Information")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Status")," \u2013 select the status that the Episode of Care is being updated to. Options are Planned, Waitlist, Active, or On hold."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Start Date")," \u2013 set the date that this status began or is set to begin."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"End Date")," \u2013 can either be set manually, otherwise it is prepopulated based on the start date of a new status.\n*** Upon creating a new Episode Of Care History record, the End Date on the previous Episode Of Care History record is set as the day before this Episode Of Care History's Start Date. The previous Episode Of Care History is the record with the latest Start Date and no End Date.")))}c.isMDXComponent=!0}}]);