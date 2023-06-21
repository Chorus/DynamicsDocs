"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[6565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=o(n),h=i,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=n(7462),i=(n(7294),n(3905));const a={id:"ScheduleAssistance",title:"Schedule Assistance"},l=void 0,c={unversionedId:"Scheduling/ScheduleAssistance",id:"Scheduling/ScheduleAssistance",title:"Schedule Assistance",description:"The schedule assistance functionality was added to Autism Care to simplify the workflow for schedulers. Schedulers can now see the availability of all practitioners based on an authorization service, client's language, and gender preference.",source:"@site/docs/Scheduling/ScheduleAssistance.md",sourceDirName:"Scheduling",slug:"/Scheduling/ScheduleAssistance",permalink:"/docs/Scheduling/ScheduleAssistance",draft:!1,tags:[],version:"current",frontMatter:{id:"ScheduleAssistance",title:"Schedule Assistance"},sidebar:"sidebars",previous:{title:"Care Team Assignment",permalink:"/docs/Scheduling/CareTeamAssignments"},next:{title:"Single Encounter",permalink:"/docs/Scheduling/SingleEncounters"}},s={},o=[{value:"Availability",id:"availability",level:2},{value:"Scheduling an Encounter",id:"scheduling-an-encounter",level:2}],u={toc:o};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The schedule assistance functionality was added to Autism Care to simplify the workflow for schedulers. Schedulers can now see the availability of all practitioners based on an authorization service, client's language, and gender preference."),(0,i.kt)("img",{src:"/img/ScheduleAssistanceOverview.png",width:"700"}),(0,i.kt)("h2",{id:"availability"},"Availability"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shading is based on availability with dark red being unavailable"),(0,i.kt)("li",{parentName:"ul"},"The shading is based on a 6 month period (typical period of an authorization service)"),(0,i.kt)("li",{parentName:"ul"},"If the practitioner is less than 50% available during the selected time period they will not be returned as available"),(0,i.kt)("li",{parentName:"ul"},"The shading is used for recurring encounters to take note of timing when the practitioner isn't available recurringly at a specified time.")),(0,i.kt)("img",{src:"/img/ScheduleAssistanceShading.png",width:"700"}),(0,i.kt)("h2",{id:"scheduling-an-encounter"},"Scheduling an Encounter"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click and drag on the calendar at the desired time")),(0,i.kt)("img",{src:"/img/ScheduleAssistanceCalendar.png",width:"500"}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Select schedule type and update timing if necessary")),(0,i.kt)("img",{src:"/img/SelectScheduleType.png",width:"500"}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Click save"),(0,i.kt)("li",{parentName:"ol"},"View encounter and related encounter service and participants")),(0,i.kt)("img",{src:"/img/ViewRelated.png",width:"500"}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Recurring Encounter: Set up occurrence patten")),(0,i.kt)("img",{src:"/img/RecurrencePattern.png",width:"500"}))}d.isMDXComponent=!0}}]);