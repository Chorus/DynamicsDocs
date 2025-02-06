"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[6565],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(i),h=n,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||r;return i?a.createElement(m,l(l({ref:t},u),{},{components:i})):a.createElement(m,l({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<r;c++)l[c]=i[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},7170:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=i(7462),n=(i(7294),i(3905));const r={id:"ScheduleAssistance",title:"Schedule Assistance"},l=void 0,s={unversionedId:"Scheduling/ScheduleAssistance",id:"Scheduling/ScheduleAssistance",title:"Schedule Assistance",description:"Schedule Assistance simplifies the scheduling workflow by making it quick and easy to identify fitting practitioners for each patient, based on the patient's availability, the practitioner's availability, the patient's preferences, and the insurance plan's required credentials.",source:"@site/docs/Scheduling/ScheduleAssistance.md",sourceDirName:"Scheduling",slug:"/Scheduling/ScheduleAssistance",permalink:"/docs/Scheduling/ScheduleAssistance",draft:!1,tags:[],version:"current",frontMatter:{id:"ScheduleAssistance",title:"Schedule Assistance"},sidebar:"sidebars",previous:{title:"Recurring Encounters",permalink:"/docs/Scheduling/RecurringEncounters"},next:{title:"Care Team Assignments",permalink:"/docs/Scheduling/CareTeamAssignments"}},o={},c=[{value:"Apply Filters",id:"apply-filters",level:2},{value:"Availabile Practitioners",id:"availabile-practitioners",level:2},{value:"Scheduling an Encounter",id:"scheduling-an-encounter",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Schedule Assistance simplifies the scheduling workflow by making it quick and easy to identify fitting practitioners for each patient, based on the patient's availability, the practitioner's availability, the patient's preferences, and the insurance plan's required credentials. "),(0,n.kt)("p",null,"You can access Schedule Assistance from the site menu, or from a specific authorization service (for a service authorized in hours per week)."),(0,n.kt)("h2",{id:"apply-filters"},"Apply Filters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Authorization Service")," - choose the authorization service you'd like to find available practitioners for.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Only authorizations services authorized in Hours per Week can be selected. If you'd like to find an available practitioner for a patient whose services are authorized per month/total, you can leave this field blank."),(0,n.kt)("li",{parentName:"ul"},"Selecting an authorization service will populate the rest of the filters automatically. You can review the filters, adjust as needed, and click 'Apply Filters'."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Insurance Plan Benefit")," - choose the insurance plan benefit you'd like to find available practitioners for."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Patient")," - choose the patient you'd like to find available practitioners for."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Business Unit")," - choose the business unit you'd like to search for practitioners within, or clear this field if you do not want to filter by a specific business unit."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Start Date")," - select the start date of the time period you'd like to schedule for."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"End Date")," - select the end date of the time period you'd like to schedule for."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Duration")," - select the range of the duration of the session you'd like to schedule (e.g., 1-3 hours). This will find practitioners with availability for more than the minimum duration of the session for 50% of the weeks in the date range being searched."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Hours Per Week")," - select the amount of hours per week you'd like to schedule. This will find practitioners with availability with at least this many hours available per week for 50% of the weeks in the date range being searched."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Working Hours")," - set the timing range you'd like to view results in (e.g., 9:00 am - 4:00 pm)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Languages")," - select the patient's preferred language, if relevant."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Provider Gender Preference")," - select the gender for provider that the patient prefers, if relevant."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Required Credentials")," - select the required credentials. This will find practitioners who have current qualifications for the selected credentials.")),(0,n.kt)("p",null,"After setting your filters, click 'Apply Filters' to find available practitioners."),(0,n.kt)("h2",{id:"availabile-practitioners"},"Availabile Practitioners"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Time slots are shaded based on availability, with white being completely available, and red being unavailable."),(0,n.kt)("li",{parentName:"ul"},"The shading is based on the date range selected. If a provider is available some weeks of the date range and not all, the time slot will have a lighter red gradient."),(0,n.kt)("li",{parentName:"ul"},"If the practitioner is less than 50% available during the selected time period, they will not be listed as available.")),(0,n.kt)("img",{src:"/img/ScheduleAssistanceShading.png",width:"700"}),(0,n.kt)("h2",{id:"scheduling-an-encounter"},"Scheduling an Encounter"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click and drag on the calendar at the desired time")),(0,n.kt)("img",{src:"/img/ScheduleAssistanceCalendar.png",width:"500"}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Select schedule type and update timing if necessary")),(0,n.kt)("img",{src:"/img/SelectScheduleType.png",width:"500"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Click save"),(0,n.kt)("li",{parentName:"ol"},"View encounter and related encounter service and participants")),(0,n.kt)("img",{src:"/img/ViewRelated.png",width:"500"}),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Recurring Encounter: Set up occurrence patten")),(0,n.kt)("img",{src:"/img/RecurrencePattern.png",width:"500"}))}d.isMDXComponent=!0}}]);