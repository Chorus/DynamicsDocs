"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[62],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),p=i,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4136:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={id:"PatientOverview",title:"Overview"},s="Patient",o={unversionedId:"Patients/PatientOverview",id:"Patients/PatientOverview",title:"Overview",description:"In our system a Patient refers to the learner or student who is served by an ABA Provider. Our PMS can keep track of anything needed for the Patient. The Intake Rep has simple and easy forms enabling them to enter the necessary information.",source:"@site/docs/Patients/Overview.md",sourceDirName:"Patients",slug:"/Patients/PatientOverview",permalink:"/docs/Patients/PatientOverview",draft:!1,tags:[],version:"current",frontMatter:{id:"PatientOverview",title:"Overview"},sidebar:"sidebars",previous:{title:"Welcome",permalink:"/docs/"},next:{title:"Location",permalink:"/docs/Patients/Location"}},l={},c=[{value:"Contact Main Grid",id:"contact-main-grid",level:2},{value:"Contact Main Form",id:"contact-main-form",level:2}],d={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"patient"},"Patient"),(0,i.kt)("p",null,"In our system a Patient refers to the learner or student who is served by an ABA Provider. Our PMS can keep track of anything needed for the Patient. The Intake Rep has simple and easy forms enabling them to enter the necessary information. "),(0,i.kt)("h2",{id:"contact-main-grid"},"Contact Main Grid"),(0,i.kt)("p",null,"By clicking on 'Contacts' on the left navigation bar in the Clinical Area, the Contact Main Grid will open up. The Contact Main Grid has a few different views which display Contact records. There are 3 views related to Patients. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Active Patients",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Active Patients view displays Patient Contact records that are Active. The view displays the First Name, Last Name, Known As, Date of Birth and Address. These are fields most companies find helpful to differentiate between Patients. "))),(0,i.kt)("li",{parentName:"ul"},"Current Patients",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Current Patients view displays Patient Contact records that are Active and Current. A Patient is considered 'current' if they have an Active Episode of Care. The view displays the First Name, Last Name, Known As, Date of Birth and Address. These are fields most companies find helpful to differentiate between Patients."))),(0,i.kt)("li",{parentName:"ul"},"All Patients",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The All Patients view displays all the Patients in the system. This includes Active and Inactive records. (This is helpful when a Patient leaves your company and their record is deactivated but later wants to receive services from you again, you can reactivate their contact record from this view.) The view displays the First Name, Last Name, Known As, Date of Birth, Address and Status Reason. These are fields most companies find helpful to differentiate between Patients.")))),(0,i.kt)("h2",{id:"contact-main-form"},"Contact Main Form"),(0,i.kt)("p",null,"By selecting a record from the Contact Main Grid, the Contact Main Form will open. The Contact Main Form for a Patient has a few tabs to display all information needed. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There is a Profile Info tab with the general patient information including Name, DOB, Address, patient preferances etc. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This tab is divided into a few sections:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"General Information - This contains the First Name, Last Name, Known As, Date of Birth and Gender. The First and Last Name fields are required to save the record. To help eliminate error, the DOB field has a validation which blocks saving the record if the DOB is a date in the future or a date too far in the past. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Error Message: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'If you populate the DOB field with a DOB in the future, the following error message will display "Birth Date cannot be in the future." '),(0,i.kt)("li",{parentName:"ul"},'If you populate the DOB field with a DOB 120 years before todays date, the following error message will display "Birth Date cannot be more than 120 years in the past."'))))),(0,i.kt)("li",{parentName:"ul"},"Patient Addresses - This section displays all the addresses related to this Patient in a card form. The address can be a billing address or a service address. The Patient can only have 1 billing address which is used when billing the Patient. There is no limit to the amount of service addresses a patient can have. When scheduling an Encounter, the Location field is filtered to display addresses related to this Patient and general addresses i.e. a school where multiple Patients are serviced. To read more about addresses, ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/Location"},"click here.")),(0,i.kt)("li",{parentName:"ul"},"Related Contacts - This sub grid displays all contacts connected to the Patient. The first column, Patients Primary Contact, is used to sort the sub grid. The Patients primary contacts display first. The columns listed after are: Full Name, Role, Preferred Conact Method, Home Phone, Mobile Phone and Email. To read more about how to connect the Patient to other Contacts, ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/Connection"},"click here.")," "),(0,i.kt)("li",{parentName:"ul"},"Patient Preferences - This section does not have to be populated. The information listed here is based on what the Patient prefers. When using the Schedule Assistance tool to find a Practitioner to service a Patient, we populate the filters with the Patients preferences. I.e. If a Patient speaks english and would like to work with a Practitioner who speaks English, you would populate the 'Preferred Languages' field with 'English'. When a Scheduler matches the Patient to a Practitioner, they would match this Patient with a Practitioner who speaks English. Currently, the important preferences are: Preferred Language, Provider Gender Preference and Case Management Notes. The Preferred Languages field can be managed by an organizations needs. "),(0,i.kt)("li",{parentName:"ul"},"Timeline - This is the last section on this tab. It displays all communication related to the Patient. I.e. emails, calls, appointments, notes, etc."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The next tab is called Medical Info. This displays 2 sub grids side by side. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Conditions - The left sub grid displays the conditions diagnosised to the Patient. To read more about conditions, ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/Conditions"},"click here.")," ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"There are 2 views. Both views display the following columns: Condition Code, Onset and Clinical Status. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Current Conditions - This view only displays the current conditions of a patient. Once the Historical As Of date is populated, the condition is no longer current. This view also excludes any condition where the Verification Status is entered in error."),(0,i.kt)("li",{parentName:"ul"},"All Conditions - This views displays all the conditions except where the Verification Status is entered in error."))))),(0,i.kt)("li",{parentName:"ul"},"Episode of Care - The right sub grid displays the episodes of care. It displays the Status, Period Start Date and Period End Date. Any Patient with an Active EOC cannot be deactivated. To read more about Episode of Care, ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/EpisodeOfCare"},"click here.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The next tab is the Coverage & Auth tab. This tab displays 2 sub grids as well, but 1 on top of the next. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Coverages sub grid is on top. This displays the coverage records from the insurance company. We must have a coverage record to schedule Encounters. The columns displayed here are: Name, Beneficiary (Patient), Policy Start Date, Policay End Date and Plan. To read more about Coverages, ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/Coverages"},"click here.")," "),(0,i.kt)("li",{parentName:"ul"},"The Authorizations sub grid displays the authorization receieved from insurance. The authorization includes the coverage record as well as other information needed before scheduling an Encounter. The columns displayed on the grid are: Plan (Coverage), Patient Name, Authorization Number, Period Start Date, Period End Date and Status Reason. To read more about Authorization, ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/Authorization"},"click here.")," "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The next tab is called Care Team. This has 2 sub grids 1 which lists the Providers working with the Patient and the other with Care Team Assignments. These sub grids are side by side. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Care Team Participants - Practitioners who are working/have worked with this Patient. This sub grid displays in a card form so only the Practitioner name is displayed. To read more about the Care Team Participants, ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/CareTeamParticipants"},"click here.")),(0,i.kt)("li",{parentName:"ul"},"Care Team Assignments - The right sub grid displays the Care Team Assignments. This is used to relate a Practitioner to an Authorization Service. To read more about Care Team Assignments, ",(0,i.kt)("a",{parentName:"li",href:"/docs/Patients/CareTeamAssignments"},"click here."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"There are 2 views:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Current Care Team Assignments - This displays Care Team Assignments where the Period End Date is in the future and the status is active. The columns are Practitioner, Authorization Service, Amount of Hours, Frequency, Period Start Date and Period End Date."),(0,i.kt)("li",{parentName:"ul"},"All Care Team Assignments - This displays Care Team Assignments where the status is active. The columns are Practitioner, Authorization Service, Amount of Hours, Frequency, Period Start Date, Period End Date and Status Reason."))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The next tab, the Encounters tab, lists the scheduled encounters for the patient divided into 2 grids. 1 for recurring enounters and 1 for single encounters. To read more about Encounters, ",(0,i.kt)("a",{parentName:"p",href:"/docs/Patients/PatientEncounters"},"click here.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Recurring Encounters - This displays encounters that are recurring for a period of time. There are 2 views which display the following columns: Practitioners, Start Date/Time, Duration, End Date/Time, Repeat, Location, Service and Status Reason. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"All Recurring Encounters - This view displays Recurring Encounters. An Encounter is 'recurring' if the Schedule Type is 'Recurring Encounter'. "),(0,i.kt)("li",{parentName:"ul"},"Current Recurring Encounters - This view displays Recurring Encounters with related Encounter Occurences with the Status of Active. "))),(0,i.kt)("li",{parentName:"ul"},"Single Encounters/ Encounter Occurrences - This displays encounters that only happen once. There are 2 views which display the following columns: Practitioners, Schedule Type, Start Date/Time, Duration, End Date/Time, Location, Service and Status Reason. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"All Enounters - This displays all Encounters where the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'."),(0,i.kt)("li",{parentName:"ul"},"Upcoming Encounters - This displays all Encounters where the Start Date/Time is in the future and the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The last tab is the Calendar tab. This displays the Patients calendar with the Encounter Services scheduled for them. To read more about Calendars, ",(0,i.kt)("a",{parentName:"p",href:"/docs/Patients/PatientCalendar"},"click here.")))),(0,i.kt)("p",null,"--Patient availability--"))}h.isMDXComponent=!0}}]);