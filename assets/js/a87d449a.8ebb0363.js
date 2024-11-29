"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[3292],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7534:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={id:"GoalBankLibrary",title:"Clinical Setup"},i=void 0,l={unversionedId:"AdminSetup/GoalBankLibrary",id:"AdminSetup/GoalBankLibrary",title:"Clinical Setup",description:"Goal Bank Library",source:"@site/docs/AdminSetup/GoalBankLibrary.md",sourceDirName:"AdminSetup",slug:"/AdminSetup/GoalBankLibrary",permalink:"/docs/AdminSetup/GoalBankLibrary",draft:!1,tags:[],version:"current",frontMatter:{id:"GoalBankLibrary",title:"Clinical Setup"},sidebar:"sidebars",previous:{title:"Qualification Definitions",permalink:"/docs/AdminSetup/QualificationDefinition"},next:{title:"Opportunities",permalink:"/docs/CRM/Opportunities"}},s={},p=[{value:"Goal Bank Library",id:"goal-bank-library",level:2},{value:"Assessment Report Templates",id:"assessment-report-templates",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"goal-bank-library"},"Goal Bank Library"),(0,r.kt)("p",null,"Your organization can choose to import a goal bank to provide a library of pre-written goals and targets for your BCBAs to use when creating care plans in the Note app."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://notedocs.chorus.cloud/docs/CarePlan/GoalTargetLibraries"},"Learn more about Goal and Target Libraries in Note"),"."),(0,r.kt)("p",null,"To view the goal bank library, click 'Goal Bank Library' on the Care Plan section of the Setup area of the site menu."),(0,r.kt)("p",null,"You will be able to view the domains imported by your organization. Each domain is given a Domain Description that is included on Assessment Reports generated from the Note app."),(0,r.kt)("p",null,"Under each domain, you can view the subdomains."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The domain and subdomains are consistent across all care plans in your organization. Edits made to the names of domains or subdomains will apply to all patient care plans in your organization.")),(0,r.kt)("p",null,"You can select a subdomain to view the library goals that will be available to your BCBAs as pre-written goals in the Note app."),(0,r.kt)("img",{src:"/img/domain.png",width:"850"}),(0,r.kt)("p",null,"You can select a goal to view the library targets that will be available to you BCBAs as pre-written targets in the Note app."),(0,r.kt)("p",null,"You can select a target to view and edit the default configurations that will be available on this library target when imported to a Patient's care plan.\n",(0,r.kt)("a",{parentName:"p",href:"https://notedocs.chorus.cloud/docs/CarePlan/DefaultConfiguration"},"Learn more about Default Configurations in Note"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Edits made to the goal name, target name, and default target configurations will only affect the goal/target libraries. Edits will not be applied to goals/targets that have been imported from the library to existing patient care plans.")),(0,r.kt)("img",{src:"/img/targetlibrary.png",width:"850"}),(0,r.kt)("h2",{id:"assessment-report-templates"},"Assessment Report Templates"),(0,r.kt)("p",null,"Your organization can choose to provide report templates for initial and follow-up assessment reports, as well graph exports. The template is a word document that is stored on the System Contact in Dynamics."),(0,r.kt)("p",null,"To view your organization's templates, or upload new ones:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Search "System" and open the contact with the name System.'),(0,r.kt)("li",{parentName:"ol"},'On the timeline, there are three notes: "InitialAssessment-Report-Template", "Reassessment-Report-Template", and "Graphs-Template". ',(0,r.kt)("em",{parentName:"li"},"Do not modify the titles of the notes"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The inital assessment report template will be available from sessions in Note that are created for ",(0,r.kt)("a",{parentName:"li",href:"/docs/AdminSetup/HealthcareService"},"healthcare services")," with service type 'initial assessment.'"),(0,r.kt)("li",{parentName:"ul"},"The reassessment report template will be available from sessions in Note that are created for healthcare services with service type 'follow-up assessment.'"),(0,r.kt)("li",{parentName:"ul"},"The graphs template will be the template onto which graphs are exported when the practitioner exports graphs from a learner in Note.")))),(0,r.kt)("img",{src:"/img/assessmentreport.png",width:"900"}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"To upload or switch a template, click the pencil icon on the note of the template you'd like to upload/switch."),(0,r.kt)("li",{parentName:"ol"},"Remove the current attachment if there is one, and upload your updated template.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In order for the Note app to insert care plan data into the assessment report, the following placeholders have to be present in the Word document:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"{{Skill Acquisition}}"),(0,r.kt)("li",{parentName:"ul"},"{{Behaviors}}")),(0,r.kt)("p",{parentName:"admonition"},"Read about the care plan data that is inserted into the report on our ",(0,r.kt)("a",{parentName:"p",href:"https://notedocs.chorus.cloud/docs/Reports/AssessmentReport#assessment-data"},"Note Documentation"),"."),(0,r.kt)("p",{parentName:"admonition"},"Other placeholders you can include in your template to automate patient information into the report:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"patientName")," inserts the patient's first name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"patientFullName")," inserts the patient's full name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"patientDOB")," inserts the patient's date of birth."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"patientAge")," inserts the patient's age (in years and months)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"patientAddress")," inserts the patient's home location."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"authorizationPeriod")," inserts the dates of the patient's current authorization."))))}c.isMDXComponent=!0}}]);