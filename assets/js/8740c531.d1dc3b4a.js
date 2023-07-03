"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[140],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(h,o(o({ref:n},s),{},{components:t})):r.createElement(h,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={id:"EncounterValidations",title:"Encounter Validations"},o="Encounter Validations",l={unversionedId:"Scheduling/EncounterValidations",id:"Scheduling/EncounterValidations",title:"Encounter Validations",description:"When an Encounter Service is created, it is validated to ensure it passes a number of validation rules:",source:"@site/docs/Scheduling/EncounterValdations.md",sourceDirName:"Scheduling",slug:"/Scheduling/EncounterValidations",permalink:"/docs/Scheduling/EncounterValidations",draft:!1,tags:[],version:"current",frontMatter:{id:"EncounterValidations",title:"Encounter Validations"},sidebar:"sidebars",previous:{title:"Care Team Assignments",permalink:"/docs/Scheduling/CareTeamAssignments"},next:{title:"Cancel Encounters",permalink:"/docs/Scheduling/DeactivateEncounters"}},c={},u=[{value:"Validation Statuses",id:"validation-statuses",level:2},{value:"Invalid Single Encounters",id:"invalid-single-encounters",level:2},{value:"Invalid Recurring Encounters",id:"invalid-recurring-encounters",level:2},{value:"Locate Invalid Encounter on a Recurring Encounter",id:"locate-invalid-encounter-on-a-recurring-encounter",level:3}],s={toc:u};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"encounter-validations"},"Encounter Validations"),(0,i.kt)("p",null,"When an Encounter Service is created, it is validated to ensure it passes a number of validation rules:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An Encounter Participant cannot overlap with another Encounter Participant.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, a patient included as the encounter participant on both an encounter from 12:00 - 2:00 and an encounter from 1:30 - 4:30 would be invalid."))),(0,i.kt)("li",{parentName:"ol"},"An Encounter cannot have more Encounter Services units in the given time period than the Authorization Services or Assignments allow."),(0,i.kt)("li",{parentName:"ol"},"The Practitioner Participants on an Encounter Service must have the required credentials for this service (as configured on the ",(0,i.kt)("a",{parentName:"li",href:"/docs/AdminSetup/InsurancePlan/#RequiredQualifications"},"Insurance Plan Benefit"),")."),(0,i.kt)("li",{parentName:"ol"},"The duration on the Encounter Service must be between the min/max units required from the Insurance Plan Benefit."),(0,i.kt)("li",{parentName:"ol"},"The date of the Encounter Service must be within the Start and End date of the Authorization.")),(0,i.kt)("h2",{id:"validation-statuses"},"Validation Statuses"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When an Encounter is Scheduled, the ",(0,i.kt)("em",{parentName:"li"},"Validation Status")," on each of its Encounter Services is set to 'Pending'. "),(0,i.kt)("li",{parentName:"ul"},"While validation is running, the ",(0,i.kt)("em",{parentName:"li"},"Validation Status")," on the Encounter Service is 'Validating'."),(0,i.kt)("li",{parentName:"ul"},"After validation is completed, the ",(0,i.kt)("em",{parentName:"li"},"Validation Status")," either becomes 'Passed' or 'Failed'.")),(0,i.kt)("h2",{id:"invalid-single-encounters"},"Invalid Single Encounters"),(0,i.kt)("p",null,"When an Encounter Service or Encounter Participant fails validation, in addition to the Validation Status being set to 'failed', a red banner will be displayed at the top of the screen on the Encounter, the failed Encounter Service, and/or the failed Encounter Participant. The banner can be expanded to view the validation that failed."),(0,i.kt)("h2",{id:"invalid-recurring-encounters"},"Invalid Recurring Encounters"),(0,i.kt)("p",null,"On recurring encounters, if one or move child encounter occurrences are invalid the encounter will have a red banner displayed."),(0,i.kt)("h3",{id:"locate-invalid-encounter-on-a-recurring-encounter"},"Locate Invalid Encounter on a Recurring Encounter"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the related tab on the encounter/recurring encounter"),(0,i.kt)("li",{parentName:"ol"},"Select Encounter Validation Failures")),(0,i.kt)("img",{src:"/img/RelatedEncounterValidationFailures.png",width:"700"}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Select the Encounter Validation Failure")),(0,i.kt)("img",{src:"/img/SelectEncounterValidationFailures.png",width:"700"}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Select the Encounter Service that hasn't passed validation")),(0,i.kt)("img",{src:"/img/FailedEncounterService.png",width:"700"}))}d.isMDXComponent=!0}}]);