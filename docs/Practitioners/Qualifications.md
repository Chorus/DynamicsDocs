---
id: Qualifications
title: Qualifications
---
# Qualifications

The Qualifications subgrid displays the Qualification Name, Certification Date, Expiration Date and the Qualification Number. 

## Create a Practitioner Qualification 

To create a new Practitioner Qualification, click 'New Practitioner Qualification'. 

<img src ="/img/qualification.jpg" width="900"/>

- *Practitioner* - This field is prepopulated with the Practitioner navigating from.
- *Qualification* - Choose from [qualification definitions](../AdminSetup/QualificationDefinition.md).
- *Certification Date*
- *Expiration Date*
- *Qualification Number*

On existing practitioner qualifications, use the timeline, status reason, and application fields to track the workflow for getting this qualification credentialed by insurance:
- *Status Reasons*:
    - Active (default)
    - Pending (use this status when the practitioner does not have the required qualification if you'd like to create a view of providers who *are not* qualified with a certain payer)
    - Application Sent to Provider
    - Provider Application Received
    - Credentialed Effectively
    - Denied
- *Application Sent* - date the application was sent to the practitioner
- *Signed Application Received* - date the signed application was returned by the practitioner
- *Submitted to Insurance* - date the credentialing application was submitted to insurance

Applications can be uploaded to the timeline on the right side of the practitioner qualification form. Relevant communications regarding credentialing for this practitioner can also be tracked here. 

:::note
It is important that the qualification and the dates are accurate for claim and encounter validations based on the required qualifications on the insurance plan benefit.
- [Learn about Insurance Plan Benefit Required Qualifications](../AdminSetup/InsurancePlan.md/#required-qualifications).
- [Learn about Practitioner Qualification Encounter Validation](../Scheduling/EncounterValdations.md/#practitioner-does-not-have-required-credentials).
- [Learn about Claim Validations](../Billing/Claims.md/#claim-validations).
:::

<img src ="/img/PractitionerQualification.jpg" width="1300" height="400"/>

## Qualifications Dashboard

Go to 'Dashboards' on the site menu and select the Qualifications Dashboard to review:
- expired and expiring (in the next 30 days) qualifications to help you streamline requesting renewed credentials/certifications for practitioners.
- practitioner qualifications per qualification type, to help you understand how many practitioners you have with a certain credential.
- practitioner qualifications per status reason, to help you easily filter to specific stages of the credentialing process to take next steps.
- denied or not credentialed qualifications, to help you easily work through qualifications that were not yet credentialed effectively for any reason.
- insurance plan benefit required qualifications, to give you one place to view and update required qualifications. [Learn more about insurance plan benefit required qualifications](../AdminSetup/InsurancePlan.md/#required-qualifications).

<img src ="/img/qualificationdashboard.png" width="950"/>


