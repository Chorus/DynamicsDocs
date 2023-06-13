"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[62],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4136:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={id:"PatientOverview",title:"Overview"},s="Patient",o={unversionedId:"Patients/PatientOverview",id:"Patients/PatientOverview",title:"Overview",description:"A Patient refers to the client or learner who is served by an ABA Provider. Autism Care provides simple and easy forms to enable intake representatives to track all necessary information for a patient.",source:"@site/docs/Patients/Overview.md",sourceDirName:"Patients",slug:"/Patients/PatientOverview",permalink:"/docs/Patients/PatientOverview",draft:!1,tags:[],version:"current",frontMatter:{id:"PatientOverview",title:"Overview"},sidebar:"sidebars",previous:{title:"Welcome",permalink:"/docs/"},next:{title:"Location",permalink:"/docs/Patients/Location"}},l={},c=[{value:"Contact Main Grid",id:"contact-main-grid",level:2},{value:"Contact Main Form",id:"contact-main-form",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"patient"},"Patient"),(0,i.kt)("p",null,"A Patient refers to the client or learner who is served by an ABA Provider. Autism Care provides simple and easy forms to enable intake representatives to track all necessary information for a patient. "),(0,i.kt)("h2",{id:"contact-main-grid"},"Contact Main Grid"),(0,i.kt)("p",null,"Select 'Contacts' on the left navigation bar in the Clinical Area to open the Contact Main Grid. The Contact Main Grid has 3 views related to Patient contacts. All views display the First Name, Last Name, Known As, Date of Birth, Address and Status Reason.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Active Patients",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Active Patients view displays Patient Contact records that are Active."))),(0,i.kt)("li",{parentName:"ul"},"Current Patients",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Current Patients view displays Patient Contact records that are Active and Current. A Patient is considered 'current' if they have an Active ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/EpisodeOfCare"},"Episode of Care"),". "))),(0,i.kt)("li",{parentName:"ul"},"All Patients",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The All Patients view displays all the Patients in the system. This includes Active and Inactive records. (This is helpful when a Patient leaves your company and their record is deactivated but later wants to receive services from you again. You can reactivate their contact record from this view.)")))),(0,i.kt)("h2",{id:"contact-main-form"},"Contact Main Form"),(0,i.kt)("p",null,"Select a record from the Contact Main Grid to open the Contact Main Form. "),(0,i.kt)("p",null,'There are 2 Contact Main Forms. The "Contact Type" fied in the header sets the form as either Patient, Practitioner, or Related Person.'),(0,i.kt)("p",null,"The Contact Main Form for a Patient is divided into multiple tabs for an organized view of the complete Patient record."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Profile Info")," tab is for general Patient Information, usually collected upon intake. This tab is divided into a few sections:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"General Information")," - This contains the First Name, Last Name, Known As, Date of Birth and Gender. The First and Last Name fields are required to save the record."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Patient Addresses")," - This section displays all the addresses related to this Patient. Addresses can be either billing addresses or service addresses. The Patient can only have 1 billing address which is used when billing the Patient. There is no limit to the amount of service addresses a patient can have. ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/Location"},"Read more about addresses.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Related Contacts")," - This sub grid displays all contacts connected to the Patient. The Patient's primary contacts display first. ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/Connection"},"Read more about how to connect the Patient to other Contacts.")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Patient Preferences")," - This section does not have to be populated. The information listed here is based on what the Patient prefers. When using the Schedule Assistance tool to find a Practitioner to service a Patient, the filters are populated with the Patient's preferences. I.e. If a Patient speaks English and would like to work with a Practitioner who speaks English, you would populate the 'Preferred Languages' field with 'English'. When a Scheduler matches the Patient to a Practitioner, they would match this Patient with a Practitioner who speaks English."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Documents")," - This section is for uploading and accessing Patient documents, such as assessment reports, diagnoses, or consent forms."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Timeline")," - This is the last section on this tab. It displays all communication related to the Patient: Emails, calls, appointments, notes, or tasks.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Medical Info")," tab is for information regarding the Patient's diagnosis and treatment. This tab is didvided into 2 subgrids:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Conditions")," - The left sub grid displays the conditions diagnosised to the Patient. ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/Conditions"},"Read more about conditions.")," ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Current Conditions - This view only displays the current conditions of a patient. Once the Historical As Of date is populated, the condition is no longer current. "),(0,i.kt)("li",{parentName:"ul"},"All Conditions - This views displays all the conditions except where the Verification Status is entered in error."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Episode of Care")," - The right sub grid displays the episodes of care. Any Patient with an Active Episode of Care cannot be deactivated. ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/EpisodeOfCare"},"Read more about Episodes of Care.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Coverage & Auth")," tab is for information regarding the Patient's insurance coverage and authorizations. This tab is divided into 2 sub grids:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Coverages")," - The top sugrid displays the coverage records from the insurance company. Coverage records are necessary in order to schedule Encounters. ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/Coverages"},"Read more about Coverages.")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Authorizations")," - The bottom sub grid displays the authorizations receieved from insurance. The authorization includes the coverage record as well as other information needed before scheduling an Encounter. ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/Authorization"},"Read more about Authorizations.")," "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Care Team")," tab is for tracking the practitioners who are servicing the Patient. This tab is divided into 2 sub grids:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Care Team Participants")," - The left sub grid displays Care team Participants. Care Team Participants track Practitioners who are servicing/have serviced this Patient. ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/CareTeamParticipants"},"Read more about Care Team Participants.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Care Team Assignments")," - The right sub grid displays the Care Team Assignments. Care Team Assignments track Practitioners who are assigned a utilization of hours for a certain authorization service with the Patient. ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/CareTeamAssignments"},"Read more about Care Team Assignments.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Encounters")," tab lists the scheduled encounters for the Patient. This tab is divided into 2 sub grids: ",(0,i.kt)("a",{parentName:"p",href:"/docs/Patients/PatientEncounters"},"Read more about Encounters.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Recurring Encounters")," - The top sub grid displays encounters that are recurring for a period of time. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"All Recurring Encounters - This view displays Recurring Encounters. An Encounter is 'recurring' if the Schedule Type is 'Recurring Encounter'. "),(0,i.kt)("li",{parentName:"ul"},"Current Recurring Encounters - This view displays Recurring Encounters with related Encounter Occurences with the Status of Active. "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Single Encounters")," - This displays individual encounters (encounter occurrences). There are 2 views which display the following columns: Practitioners, Schedule Type, Start Date/Time, Duration, End Date/Time, Location, Service and Status Reason. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"All Enounters - This displays all Encounters where the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'."),(0,i.kt)("li",{parentName:"ul"},"Upcoming Encounters - This displays all Encounters where the Start Date/Time is in the future and the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Calendar")," tab displays the Patient's calendar of Encounter Services scheduled for them. ",(0,i.kt)("a",{parentName:"p",href:"/docs/Patients/PatientCalendar"},"Read more about Calendars")))))}p.isMDXComponent=!0}}]);