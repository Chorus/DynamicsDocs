"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={id:"EncounterValidations",title:"Encounter Validations"},o="Encounter Validations",l={unversionedId:"Scheduling/EncounterValidations",id:"Scheduling/EncounterValidations",title:"Encounter Validations",description:"When an Encounter Service is created, it is validated to ensure it passes a number of validation rules:",source:"@site/docs/Scheduling/EncounterValdations.md",sourceDirName:"Scheduling",slug:"/Scheduling/EncounterValidations",permalink:"/docs/Scheduling/EncounterValidations",draft:!1,tags:[],version:"current",frontMatter:{id:"EncounterValidations",title:"Encounter Validations"},sidebar:"sidebars",previous:{title:"Care Team Assignments",permalink:"/docs/Scheduling/CareTeamAssignments"},next:{title:"Cancel Encounters",permalink:"/docs/Scheduling/DeactivateEncounters"}},c={},s=[{value:"Validation Statuses",id:"validation-statuses",level:2},{value:"Invalid Single Encounters",id:"invalid-single-encounters",level:2},{value:"Invalid Recurring Encounters",id:"invalid-recurring-encounters",level:2},{value:"Locate Invalid Encounter on a Recurring Encounter",id:"locate-invalid-encounter-on-a-recurring-encounter",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"encounter-validations"},"Encounter Validations"),(0,r.kt)("p",null,"When an Encounter Service is created, it is validated to ensure it passes a number of validation rules:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An Encounter Participant cannot overlap with another Encounter Participant.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, a patient included as the encounter participant on both an encounter from 12:00 - 2:00 and an encounter from 1:30 - 4:30 would be invalid."),(0,r.kt)("li",{parentName:"ul"},"Direction of Technician and Adaptive Behavior Treatment with Protocol Modification services are allowed to overlap with Direct Treatment services for the same patient when the Encounters are at the same location, or over telecare."))),(0,r.kt)("li",{parentName:"ol"},"An Encounter Service cannot have more units in the given time period than the Authorization Service or Assignment allows."),(0,r.kt)("li",{parentName:"ol"},"The Practitioner Participants on an Encounter Service must have the required credentials for this service (as configured on the ",(0,r.kt)("a",{parentName:"li",href:"/docs/AdminSetup/InsurancePlan/#RequiredQualifications"},"Insurance Plan Benefit"),")."),(0,r.kt)("li",{parentName:"ol"},"The duration on the Encounter Service must be between the min/max units required from the Insurance Plan Benefit."),(0,r.kt)("li",{parentName:"ol"},"The Encounter Services for that service that day cannot exceed the MUE Limit for this service (as configured on the Insurance Plan Benefit)."),(0,r.kt)("li",{parentName:"ol"},"The date of the Encounter Service must be within the Start and End date of the Authorization."),(0,r.kt)("li",{parentName:"ol"},"Direction of Technician services must fully overlap with Direct Treatment sessions."),(0,r.kt)("li",{parentName:"ol"},'Optional- when "Block Supervision Submission" on the ',(0,r.kt)("a",{parentName:"li",href:"/docs/AdminSetup/BusinessUnit"},"business unit")," is set to Yes, a Direction of Technician session will fail validation until an overlapping Direct Treatment session is submitted. This puts additional accountability on BCBAs to encourage timely session submission for sessions they supervise. ")),(0,r.kt)("img",{src:"/img/BUblockSupervision.png",width:"700"}),(0,r.kt)("h2",{id:"validation-statuses"},"Validation Statuses"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When an Encounter is Scheduled, the ",(0,r.kt)("em",{parentName:"li"},"Validation Status")," on each of its Encounter Services is set to 'Pending'. "),(0,r.kt)("li",{parentName:"ul"},"While validation is running, the ",(0,r.kt)("em",{parentName:"li"},"Validation Status")," on the Encounter Service is 'Validating'."),(0,r.kt)("li",{parentName:"ul"},"After validation is completed, the ",(0,r.kt)("em",{parentName:"li"},"Validation Status")," either becomes 'Passed' or 'Failed'.")),(0,r.kt)("h2",{id:"invalid-single-encounters"},"Invalid Single Encounters"),(0,r.kt)("p",null,"When an Encounter Service or Encounter Participant fails validation, in addition to the Validation Status being set to 'failed', a red banner will be displayed at the top of the screen on the Encounter, the failed Encounter Service, and/or the failed Encounter Participant. The banner can be expanded to view the validation that failed."),(0,r.kt)("h2",{id:"invalid-recurring-encounters"},"Invalid Recurring Encounters"),(0,r.kt)("p",null,"On recurring encounters, if one or move child encounter occurrences are invalid the encounter will have a red banner displayed."),(0,r.kt)("h3",{id:"locate-invalid-encounter-on-a-recurring-encounter"},"Locate Invalid Encounter on a Recurring Encounter"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the related tab on the encounter/recurring encounter"),(0,r.kt)("li",{parentName:"ol"},"Select Encounter Validation Failures")),(0,r.kt)("img",{src:"/img/RelatedEncounterValidationFailures.png",width:"700"}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Select the Encounter Validation Failure")),(0,r.kt)("img",{src:"/img/SelectEncounterValidationFailures.png",width:"700"}),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Select the Encounter Service that hasn't passed validation")),(0,r.kt)("img",{src:"/img/FailedEncounterService.png",width:"700"}))}d.isMDXComponent=!0}}]);