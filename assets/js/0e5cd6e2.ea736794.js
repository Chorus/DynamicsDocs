"use strict";(self.webpackChunkdynamics_docs=self.webpackChunkdynamics_docs||[]).push([[2031],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>c});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=u(r),c=o,d=m["".concat(l,".").concat(c)]||m[c]||p[c]||n;return r?a.createElement(d,i(i({ref:t},h),{},{components:r})):a.createElement(d,i({ref:t},h))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const n={id:"Auth Workflows",title:"Auth Workflows"},i=void 0,s={unversionedId:"CRM/Auth Workflows",id:"CRM/Auth Workflows",title:"Auth Workflows",description:"An authorization workflow tracks the process of obtaining an authorization (or re-authorization) for services through submission, review, and approval of an assessment report.",source:"@site/docs/CRM/AuthWF.md",sourceDirName:"CRM",slug:"/CRM/Auth Workflows",permalink:"/docs/CRM/Auth Workflows",draft:!1,tags:[],version:"current",frontMatter:{id:"Auth Workflows",title:"Auth Workflows"},sidebar:"sidebars",previous:{title:"Opportunities",permalink:"/docs/CRM/Opportunities"},next:{title:"Overview",permalink:"/docs/Patients/PatientOverview"}},l={},u=[{value:"Auth Workflow Creation",id:"auth-workflow-creation",level:2},{value:"Auth Workflow Stages",id:"auth-workflow-stages",level:2},{value:"Auth Workflow Emails",id:"auth-workflow-emails",level:2}],h={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An authorization workflow tracks the process of obtaining an authorization (or re-authorization) for services through submission, review, and approval of an assessment report."),(0,o.kt)("img",{src:"/img/authwf.png",width:"900"}),(0,o.kt)("p",null,"There are 3 workflow types:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"New Auth - for new patients receiving an initial assessment."),(0,o.kt)("li",{parentName:"ol"},"Re-auth - for existing patients received a follow-up assessment for reauthorization of services."),(0,o.kt)("li",{parentName:"ol"},"Continuity of Care - for existing patients who do not need a new follow-up assessment, but do need a new authorization request (e.g., for switching organizations mid-authorization).")),(0,o.kt)("p",null,"The workflow type can be set in the header of the authorization workflow."),(0,o.kt)("h2",{id:"auth-workflow-creation"},"Auth Workflow Creation"),(0,o.kt)("p",null,"An authorization workflow can be created the following ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Manually- Select 'Auth Workflows' on the left navigation bar in the CRM Area to open the Auth Workflow Main Grid. Click 'New' to create a new auth workflow."),(0,o.kt)("li",{parentName:"ol"},"Automatically-",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"An auth workflow is automatically created when a new patient opportunity is created. The opportunity field will be automatically populated on the auth workflow."),(0,o.kt)("li",{parentName:"ul"},"An auth workflow is automatically created a certain number of weeks before a service authorization expires. The number of weeks is set on the ",(0,o.kt)("a",{parentName:"li",href:"/docs/AdminSetup/BusinessUnit"},"business unit")," of the authorization. The expiring authorization will be automatically populated on the auth workflow.")))),(0,o.kt)("p",null,"The expiring authorization details and services can be viewed on the ",(0,o.kt)("strong",{parentName:"p"},"Expiring Authorization")," tab. ",(0,o.kt)("a",{parentName:"p",href:"/docs/Patients/Authorization"},"Read more about authorizations"),"."),(0,o.kt)("h2",{id:"auth-workflow-stages"},"Auth Workflow Stages"),(0,o.kt)("p",null,"Authorization workflows have 4 stages:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Assessment Authorization"),(0,o.kt)("li",{parentName:"ol"},"Assessment"),(0,o.kt)("li",{parentName:"ol"},"Assessment Review"),(0,o.kt)("li",{parentName:"ol"},"Service Authorization")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Assessment Authorization"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Assessment Authorization")," stage is about obtaining an authorization for initial/follow-up assessment service. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request Submitted - enter the date the request for the assessment authorization was submitted."),(0,o.kt)("li",{parentName:"ul"},"Assessment Authorization Status - enter the status of the authorization request (approved/denied)."),(0,o.kt)("li",{parentName:"ul"},"Assessment Authorization - once the authorization was received, click 'New Authorization' in the Assessment Authorization field to create the assessment authorization."))),(0,o.kt)("p",null,"When an assessment authorization is received, click 'Next Stage' to move the authorization workflow to the Assessment stage."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Assessment"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Assessment")," stage is for assigning a BCBA to write an assessment report, and tracking it is received in a timely fashion."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assessment BCBA - select the BCBA who is assigned to write the assessment report. Only practitioners with a current BCBA ",(0,o.kt)("a",{parentName:"li",href:"/docs/Practitioners/PractitionerRole"},"practitioner role")," will show as options here."),(0,o.kt)("li",{parentName:"ul"},"Assessment Assigned Date - enter the date the BCBA was assigned to write the report. This will auto-populate with today's date when the assessment BCBA is populated."),(0,o.kt)("li",{parentName:"ul"},"Assessment Due Date - enter the due date the BCBA was given for submitting the completed report. This will auto-populate with today's date plus the number of weeks populated on the ",(0,o.kt)("a",{parentName:"li",href:"/docs/AdminSetup/BusinessUnit"},"business unit")," of the authorization."),(0,o.kt)("li",{parentName:"ul"},"Assessment Received Date - enter the date the BCBA submitted the completed report."))),(0,o.kt)("p",null,"When an assessment report is received, click 'Next Stage' to move the authorization workflow to the Assessment Review stage."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Assessment Review"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Assessment Review")," stage is for assigning QA personnel to review the assessment report, request revisions, and approve the report."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Review Assigned Date - enter the date the QA reviewer was assigned to review the assessment report."),(0,o.kt)("li",{parentName:"ul"},"QA Assignee - select the QA reviewer who is assigned to review the report. Only practitioners with a current BCBA ",(0,o.kt)("a",{parentName:"li",href:"/docs/Practitioners/PractitionerRole"},"practitioner role")," will show as options here."),(0,o.kt)("li",{parentName:"ul"},"BCBA Assigned Revisions - enter the date the QA assignee requested revisions from the BCBA who wrote the report."),(0,o.kt)("li",{parentName:"ul"},"Reviewer Approved - enter the date the QA assignee reviewed the report/revisions."),(0,o.kt)("li",{parentName:"ul"},"Reviewer Comments - enter any comments the QA assignee has regarding the report."))),(0,o.kt)("p",null,"When an assessment report is approved by a QA reviewer, click 'Next Stage' to move the authorization workflow to the Service Authorization stage."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Service Authorization"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Service Authorization")," stage is for requesting an authorization from the payer, and creating the authorization once received."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Authorization Request Type - select the mode through which an authorization was requested from the payer (payer portal / email / phone / fax)."),(0,o.kt)("li",{parentName:"ul"},"Authorization Request Date - enter the date the authorization was requested."),(0,o.kt)("li",{parentName:"ul"},"Authorization Status - enter the payer response to the authorization request (approved / partially denied / denied)."),(0,o.kt)("li",{parentName:"ul"},"Authorization - click 'New Authorization' in the Authorization field to create the authorization received by the payer. ",(0,o.kt)("a",{parentName:"li",href:"/docs/Patients/Authorization"},"Read more about authorizations"),"."),(0,o.kt)("li",{parentName:"ul"},"Notes - enter any notes about the approval/denial, insurance feedback, or peer review comments."),(0,o.kt)("li",{parentName:"ul"},"Resubmitted Date - enter the date the authorization request was resubmitted to the payer (if relevant)."),(0,o.kt)("li",{parentName:"ul"},"Resubmitted Outcome - enter the payer response to the resubmitted authorization request (approved / partially denied / denied)."))),(0,o.kt)("h2",{id:"auth-workflow-emails"},"Auth Workflow Emails"),(0,o.kt)("p",null,"Coming Soon!"))}p.isMDXComponent=!0}}]);