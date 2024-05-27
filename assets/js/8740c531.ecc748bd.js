"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,v=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?i.createElement(v,o(o({ref:t},u),{},{components:n})):i.createElement(v,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={id:"EncounterValidations",title:"Encounter Validations"},o="Encounter Validations",l={unversionedId:"Scheduling/EncounterValidations",id:"Scheduling/EncounterValidations",title:"Encounter Validations",description:"When an Encounter Service is created, it is validated to ensure it passes a number of validation rules:",source:"@site/docs/Scheduling/EncounterValdations.md",sourceDirName:"Scheduling",slug:"/Scheduling/EncounterValidations",permalink:"/docs/Scheduling/EncounterValidations",draft:!1,tags:[],version:"current",frontMatter:{id:"EncounterValidations",title:"Encounter Validations"},sidebar:"sidebars",previous:{title:"Care Team Assignments",permalink:"/docs/Scheduling/CareTeamAssignments"},next:{title:"Cancel Encounters",permalink:"/docs/Scheduling/DeactivateEncounters"}},s={},c=[{value:"Validation Statuses",id:"validation-statuses",level:2},{value:"Invalid Single Encounters",id:"invalid-single-encounters",level:2},{value:"Invalid Recurring Encounters",id:"invalid-recurring-encounters",level:2},{value:"Locate Invalid Encounter on a Recurring Encounter",id:"locate-invalid-encounter-on-a-recurring-encounter",level:3},{value:"Rerun Validation",id:"rerun-validation",level:2},{value:"Override Validation Failures",id:"override-validation-failures",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"encounter-validations"},"Encounter Validations"),(0,a.kt)("p",null,"When an Encounter Service is created, it is validated to ensure it passes a number of validation rules:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The date of the Encounter Service must be within the Start and End date of the Authorization."),(0,a.kt)("li",{parentName:"ol"},"An Encounter Service cannot have more units in the given time period than the Authorization Service or Assignment allows."),(0,a.kt)("li",{parentName:"ol"},"The Encounter Services for that service that day cannot exceed the MUE Limit for this service (as configured on the Insurance Plan Benefit)."),(0,a.kt)("li",{parentName:"ol"},"The duration on the Encounter Service must be between the min/max units required from the Insurance Plan Benefit."),(0,a.kt)("li",{parentName:"ol"},"The Practitioner Participants on an Encounter Service must have the required credentials for this service (as configured on the ",(0,a.kt)("a",{parentName:"li",href:"/docs/AdminSetup/InsurancePlan/#RequiredQualifications"},"Insurance Plan Benefit"),")."),(0,a.kt)("li",{parentName:"ol"},"An Encounter Participant cannot overlap with another Encounter Participant.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For example, a patient included as the encounter participant on both an encounter from 12:00 - 2:00 and an encounter from 1:30 - 4:30 would be invalid."),(0,a.kt)("li",{parentName:"ul"},"Direction of Technician and Adaptive Behavior Treatment with Protocol Modification services are allowed to overlap with Direct Treatment services for the same patient when the Encounters are at the same location, or over telecare."))),(0,a.kt)("li",{parentName:"ol"},"Direction of Technician services must fully overlap with Direct Treatment sessions."),(0,a.kt)("li",{parentName:"ol"},'Optional- when "Block Supervision Submission" on the ',(0,a.kt)("a",{parentName:"li",href:"/docs/AdminSetup/BusinessUnit"},"business unit")," is set to Yes, a Direction of Technician session will fail validation until an overlapping Direct Treatment session (with the same location / telecare) is submitted. This puts additional accountability on BCBAs to encourage timely session submission for sessions they supervise.",(0,a.kt)("img",{src:"/img/BUblockSupervision.png",width:"700"})),(0,a.kt)("li",{parentName:"ol"},'Optional- when "Grace Period Days" on the ',(0,a.kt)("a",{parentName:"li",href:"/docs/AdminSetup/BusinessUnit"},"business unit")," is populated, the encounter service must be submitted within that many days after the scheduled date of the session.")),(0,a.kt)("h2",{id:"validation-statuses"},"Validation Statuses"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When an Encounter is Scheduled, the ",(0,a.kt)("em",{parentName:"li"},"Validation Status")," on each of its Encounter Services is set to 'Pending'. "),(0,a.kt)("li",{parentName:"ul"},"While validation is running, the ",(0,a.kt)("em",{parentName:"li"},"Validation Status")," on the Encounter Service is 'Validating'."),(0,a.kt)("li",{parentName:"ul"},"After validation is completed, the ",(0,a.kt)("em",{parentName:"li"},"Validation Status")," either becomes 'Passed' or 'Failed'.")),(0,a.kt)("h2",{id:"invalid-single-encounters"},"Invalid Single Encounters"),(0,a.kt)("p",null,"When an Encounter Service or Encounter Participant fails validation, in addition to the Validation Status being set to 'failed', a red banner will be displayed at the top of the screen on the Encounter, the failed Encounter Service, and/or the failed Encounter Participant. The banner can be expanded to view the validation that failed."),(0,a.kt)("h2",{id:"invalid-recurring-encounters"},"Invalid Recurring Encounters"),(0,a.kt)("p",null,"On recurring encounters, if one or more child encounter occurrences are invalid the encounter will have a red banner displayed."),(0,a.kt)("h3",{id:"locate-invalid-encounter-on-a-recurring-encounter"},"Locate Invalid Encounter on a Recurring Encounter"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the Encounter Validation Failures on the recurring encounter")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the Encounter Validation Failure"))),(0,a.kt)("img",{src:"/img/SelectEncounterValidationFailures.png",width:"700"}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Select the Encounter Service that hasn't passed validation")),(0,a.kt)("img",{src:"/img/FailedEncounterService.png",width:"700"}),(0,a.kt)("h2",{id:"rerun-validation"},"Rerun Validation"),(0,a.kt)("p",null,'To rerun validation, open the encounter service or encounter participant you\'d like to revalidate, and click "Rerun Validation." Refresh the record to see the updated validation status.'),(0,a.kt)("p",null,"To rerun validation on multiple records:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to an encounter service or encounter participants view."),(0,a.kt)("li",{parentName:"ol"},"Select the encounter services/participants you'd like to revalidate."),(0,a.kt)("li",{parentName:"ol"},'Click "Edit".'),(0,a.kt)("li",{parentName:"ol"},'Navigate to the "Header" tab on the form.'),(0,a.kt)("li",{parentName:"ol"},'Choose "Pending" as the validation status. Save the changes and the selected records will be revalidated.')),(0,a.kt)("h2",{id:"override-validation-failures"},"Override Validation Failures"),(0,a.kt)("p",null,"Users with the Scheduling Admin ",(0,a.kt)("a",{parentName:"p",href:"/docs/AdminSetup/SecurityRoles"},"security role")," can override validation failures to allow the practitioner to submit sessions that failed for certain reasons."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the failed encounter service or participant."),(0,a.kt)("li",{parentName:"ol"},"Go the Related > Encounter Validation Failure that has been approved to be overriden."),(0,a.kt)("li",{parentName:"ol"},'Set "Override Allowed" to Yes. The validation failure record will remain active, but the session will not fail validation for this reason again.')),(0,a.kt)("p",null,"Overriden validatons display in a yellow banner on the encounter service or participant so it is clear that this session previously failed a validation and has since been allowed to pass."))}d.isMDXComponent=!0}}]);