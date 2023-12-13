"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[1270],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(r),u=i,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||n;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(7462),i=(r(7294),r(3905));const n={id:"BasicInfo",title:"Overview"},o="Practitioners",s={unversionedId:"Practitioners/BasicInfo",id:"Practitioners/BasicInfo",title:"Overview",description:"A Practitioner refers to the ABA provider who is servicing a client. The practitioner profile is where all of a practitioner\u2019s information is tracked, managed and viewed.",source:"@site/docs/Practitioners/BasicInfo.md",sourceDirName:"Practitioners",slug:"/Practitioners/BasicInfo",permalink:"/docs/Practitioners/BasicInfo",draft:!1,tags:[],version:"current",frontMatter:{id:"BasicInfo",title:"Overview"},sidebar:"sidebars",previous:{title:"Calendar",permalink:"/docs/Patients/PatientCalendar"},next:{title:"Practitioner Roles",permalink:"/docs/Practitioners/PractitionerRole"}},c={},l=[{value:"Create a Practitioner Contact",id:"create-a-practitioner-contact",level:2},{value:"Search Contacts",id:"search-contacts",level:2},{value:"Archive Practitioners",id:"archive-practitioners",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"practitioners"},"Practitioners"),(0,i.kt)("p",null,"A Practitioner refers to the ABA provider who is servicing a client. The practitioner profile is where all of a practitioner\u2019s information is tracked, managed and viewed."),(0,i.kt)("h2",{id:"create-a-practitioner-contact"},"Create a Practitioner Contact"),(0,i.kt)("p",null,"The 'Contact Type' fied in the header sets the form as either Patient, Practitioner, or Related Person."),(0,i.kt)("p",null,"The Contact Main Form for a Practitioner is divided into multiple tabs for an organized view of the complete practitioner record."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Profile Info")," tab is for general practitioner information, usually collected upon intake. This tab is divided into a few sections:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"General Information")," - This section displays the First Name, Last Name, Known As, Date of Birth, Gender, Marital Status, NPI Number, and Employee ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Address Information")," - This section displays the practitioner's address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Contact Information")," - This section displays the contact information for the practitioner, including Cell Phone, Home Phone, Work Phone, Email Address, and Preferred Contact Method. The Email Address here is the email address the practitioner will use to access the Note app."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Provider Preferences")," - This section does not have to be populated. The information listed here is based on what the practitioner prefers. When using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/Scheduling/ScheduleAssistance"},"Schedule Assistance")," tool to find a practitioner to service a patient, the filters are populated with the patient's preferences.  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Documents")," - This section is for uploading and accessing practitioner documents, such as resume, photo ID, or I-9 forms."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Roles")," - This subgrid displays the Practioner Role for the practitioner: either BCBA or Behavior Technician. ",(0,i.kt)("a",{parentName:"li",href:"/docs/Practitioners/PractitionerRole"},"Read more about Practitioner Roles"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Timeline")," - This is the last section on this tab. It displays all communication related to the practitioner: emails, calls, appointments, notes, or tasks.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Qualifications")," tab is for information regarding the practitioner's certification to practice. A practitioner can have multiple qualifications, such as a Behavior Technician who gets certified as a BCBA, or a BCBA-LBA.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Care Team Assignments")," tab is for assigning a utilization of hours authorized for a certain authorization service to a practitioner. ",(0,i.kt)("a",{parentName:"p",href:"../Scheduling/CareTeamAssignments"},"Read more about Care Team Assignments"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Encounters")," tab lists the scheduled encounters for the practitioner. This tab is divided into 2 sub grids: "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Recurring Encounters")," - The top subgrid displays encounters that are recurring for a period of time. ",(0,i.kt)("a",{parentName:"li",href:"/docs/Scheduling/RecurringEncounters"},"Read more about Recurring Encounters"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Single Encounters")," - The bottom subgrid displays individual encounters (encounter occurrences). ",(0,i.kt)("a",{parentName:"li",href:"/docs/Scheduling/SingleEncounters"},"Read more about Single Encounters"),". The default view is set to 'Upcoming Encounters' - all Encounters where the Start Date/Time is in the future and the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Calendar")," tab displays the practitioner's calendar of encounter services scheduled for them. ",(0,i.kt)("a",{parentName:"p",href:"/docs/Practitioners/PractitionerCalendar"},"Read more about the practitioner's Calendar"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Payroll")," tab is for tracking the practitioner's contract and payroll information.  This tab is divided into 2 sub grids:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Payroll Items")," - The left subgrid displays payroll items for the practitioner. The default view is set to 'Payroll Items - Current Payroll Periods' - all payroll items in the open payroll period. ",(0,i.kt)("a",{parentName:"li",href:"/docs/Payroll/PayrollItems"},"Read more about Payroll Items"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Practitioner Contracts")," - The right subgrid displays the ",(0,i.kt)("a",{parentName:"li",href:"/docs/Payroll/Contracts"},"Practitioner's contracts"),". ")))),(0,i.kt)("h2",{id:"search-contacts"},"Search Contacts"),(0,i.kt)("p",null,"Select 'Contacts' on the left navigation bar in the Clinical Area to open the Contact Main Grid. The Contact Main Grid has 4 views related to Practitioner contacts. All views display the First Name, Last Name, Known As, Date of Birth, Address and Status Reason.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Active Practitioners",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Active Practitioners view displays Practitioner Contact records that are Active."))),(0,i.kt)("li",{parentName:"ul"},"Active BCBAs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Active BCBAs view displays Practitioner Contact records that are Active and have a ",(0,i.kt)("a",{parentName:"li",href:"/docs/Practitioners/PractitionerRole"},"Practitioner Role")," that is current with the Practitioner Role Code 'BCBA.'"))),(0,i.kt)("li",{parentName:"ul"},"Active BTs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Active BTs view displays Practitioner Contact records that are Active and have a ",(0,i.kt)("a",{parentName:"li",href:"/docs/Practitioners/PractitionerRole"},"Practitioner Role")," that is current with the Practitioner Role Code 'Behavior Technician.'"))),(0,i.kt)("li",{parentName:"ul"},"All Practitioners",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The All Practitioners view displays all the Practitioners in the system. This includes Active and Inactive records. (This is helpful when a Practitioner stops servicing clients at your organization and their record is deactivated but later wants to continue servicing. You can reactivate their contact record from this view.)")))),(0,i.kt)("h2",{id:"archive-practitioners"},"Archive Practitioners"),(0,i.kt)("p",null,'When offboarding a practitioner, click "Archive Contact" so that data they collected still displays on the patient\'s graphs. The status reason of the Contact will become "Not Active" and the contact will not show on Active Contact views.'),(0,i.kt)("p",null,"If the practitioner did not collect any data, the contact can be deactivated through the deactivate button."))}d.isMDXComponent=!0}}]);