---
id: Auth Workflows
title: Auth Workflows
---

An authorization workflow tracks the process of obtaining an authorization (or re-authorization) for services through submission, review, and approval of an assessment report.

<img src ="/img/authwf.png" width="900"/>

There are 3 workflow types:
1. New Auth - for new patients receiving an initial assessment.
2. Re-auth - for existing patients received a follow-up assessment for reauthorization of services.
3. Continuity of Care - for existing patients who do not need a new follow-up assessment, but do need a new authorization request (e.g., for switching organizations mid-authorization).

The workflow type can be viewed or set in the header of the authorization workflow.

## Auth Workflow Creation
An authorization workflow can be created the following ways:

1. Manually- Select 'Auth Workflows' on the site menu in the CRM Area to open the Auth Workflow Main Grid. Click 'New' to create a new auth workflow.
2. Automatically-
    - A 'New Auth' auth workflow is automatically created when a new patient opportunity is created. The opportunity field will be automatically populated on the auth workflow.
    - A 'Re-auth' auth workflow is automatically created a certain number of weeks before a service authorization expires. The number of weeks is set on the [business unit](../AdminSetup/BusinessUnit.md) of the authorization. The expiring authorization will be automatically populated on the auth workflow.

The expiring authorization details and services can be viewed on the **Expiring Authorization** tab. Notes from the previous authorization workflow can also be viewed there. 
[Read more about authorizations](../Patients/Authorization.md).

<img src ="/img/authwfnotes.png" width="900"/>

## Auth Workflow Stages

Authorization workflows have 4 stages:

1. Assessment Authorization
2. Assessment
3. Assessment Review
4. Service Authorization

<details>
<summary>Assessment Authorization</summary>

The **Assessment Authorization** stage is about obtaining an authorization for initial/follow-up assessment service. 
- Request Submitted - enter the date the request for the assessment authorization was submitted.
- Assessment Authorization Status - enter the status of the authorization request (approved/denied).
- Assessment Authorization - once the authorization was received, click 'New Authorization' in the Assessment Authorization field to create the assessment authorization.

</details>

When an assessment authorization is received, click 'Next Stage' to move the authorization workflow to the Assessment stage.

<details>
<summary>Assessment</summary>

The **Assessment** stage is for assigning a BCBA to write an assessment report, and tracking it is received in a timely fashion.
- Assessment BCBA - select the BCBA who is assigned to write the assessment report. Only practitioners with a current BCBA [practitioner role](../Practitioners/PractitionerRoles.md) will show as options here.
- Assessment Assigned Date - enter the date the BCBA was assigned to write the report. This will auto-populate with today's date when the assessment BCBA is populated.
- Assessment Due Date - enter the due date the BCBA was given for submitting the completed report. This will auto-populate with today's date plus the number of weeks populated on the [business unit](../AdminSetup/BusinessUnit.md) of the authorization.
- Assessment Received Date - enter the date the BCBA submitted the completed report.

</details>

When an assessment report is received, click 'Next Stage' to move the authorization workflow to the Assessment Review stage.

<details>
<summary>Assessment Review</summary>

The **Assessment Review** stage is for assigning QA personnel to review the assessment report, request revisions, and approve the report.
- Review Assigned Date - enter the date the QA reviewer was assigned to review the assessment report.
- QA Assignee - select the QA reviewer who is assigned to review the report. Only practitioners with a current BCBA [practitioner role](../Practitioners/PractitionerRoles.md) will show as options here.
- BCBA Assigned Revisions - enter the date the QA assignee requested revisions from the BCBA who wrote the report.
- Reviewer Approved - enter the date the QA assignee reviewed the report/revisions.
- Reviewer Comments - enter any comments the QA assignee has regarding the report.

</details>

When an assessment report is approved by a QA reviewer, click 'Next Stage' to move the authorization workflow to the Service Authorization stage.

<details>
<summary>Service Authorization</summary>

The **Service Authorization** stage is for requesting an authorization from the payer, and creating the authorization once received.
- Authorization Request Type - select the mode through which an authorization was requested from the payer (payer portal / email / phone / fax).
- Authorization Request Date - enter the date the authorization was requested.
- Authorization Status - enter the payer response to the authorization request (approved / partially denied / denied).
- Authorization - click 'New Authorization' in the Authorization field to create the authorization received by the payer, or open the expiring authorization and click [Clone Authorization](../Patients/Authorization.md/#clone-an-authorization) to create a copy of the past authorization and update its details. [Read more about authorizations](../Patients/Authorization.md).
- Notes - enter any notes about the approval/denial, insurance feedback, or peer review comments.
- Resubmitted Date - enter the date the authorization request was resubmitted to the payer (if relevant).
- Resubmitted Outcome - enter the payer response to the resubmitted authorization request (approved / partially denied / denied).

</details>

When the service authorization was approved and entered onto the authorization workflow, click Finish to set the status reason to Completed and deactivate the workflow.

## Auth Workflow Emails

New auth and Re-auth authorization workflows generate a draft email to the assessment BCBA with patient and past authorization information to streamline communication and provide the details the BCBA needs to write a report.

1. On the Assessment stage of the auth workflow, select the Assessment BCBA. The assigned date will auto-populate with today's date, and the assessment due date will auto-populate with today's date plus the number of weeks populated on the [business unit](../AdminSetup/BusinessUnit.md) of the patient. You can adjust these dates if needed.
2. Click 'Save'.
3. Refresh the page. A draft email will appear on the auth workflow timeline.

:::note
The email template can be customized to your organization's needs. Speak to your account manager about customizing the messaging in the email.
:::

- The **Initial Assessment Email** includes relevant patient information to help the BCBA complete an initial assessment report. It also specifies the due date of the report.
- The **Reassessment Email** includes relevant patient information to help the BCBA complete a reassessment report. The details of the previous authorization services are listed in the email. It also specifies the due date of the report.

