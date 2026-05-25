---
id: AC 4.0.9
title: Autism Care 4.0.9
---
# Autism Care 4.0.9 - May 2026

**New in CRM**

- The following fields can now be set automatically on [automated leads](../CRM/Leads.md):
    - Business Unit
    - Insurance (patient)
    - Email Address (practitioner)
    - Cell Phone (practitioner)
- Files attached by the parent / practitioner will be attached to the lead timeline for review (e.g, insurance card, resume, etc.). Learn how to set up your forms to create leads with attachments [here](../CRM/Leads.md).
- Patient leads can be [qualified](../CRM/Leads.md/#patient-lead-workflow) to opportunities at any stage of the lead workflow.
- Additional preferences can be added to patients, practitioners, and opportunities:
    - Preferred scheduled
    - Telehealth staffing
    - Travel preferences    
- Background Check can be marked as approved or flagged on [practitioner opportunities](../CRM/Opportunity.md/#create-a-practitioner-opportunity).
- Documents can be uploaded on the Documents tab on practitioner opportunities.
- Business unit is set on all records created within the opportunity workflow (e.g. Related Contacts, Condition, Coverage, Qualification, Practitioner Contract, etc.) based on the business unit of the opportunity. Business Unit is updated on such records when the Business Unit of the Contact is updated.
- See the opportunity status on any [practitioner view](../Practitioners/BasicInfo.md/#search-contacts) to get the full picture of where each practitioner is up to, regardless of whether they are in the hiring process or actively providing services.
- A timeline shows on [Accounts](../AdminSetup/Account.md) for tracking communications with referral sources / payers.

**New in Autism Care**

- [Eligibility](../Patients/Coverages.md/#check-eligibility) requests now include additional fields to better meet payer-specific requirements and increase the eligibility response success rate across payers.
- Authorizations and Authorizations services with active encounter services cannot be deactivated until the encounter services are moved to a different authorization service, to prevent scheduling and billing discrepancies. Learn how to move encounter services [here](../Patients/Authorization.md/#edit-an-authorization).
- When an authorization is deactivated, all related authorization services are deactivated.
- Authorization Admins can set the multiple care team assignments as [claim rendering providers](../Patients/Authorization.md/#claim-settings) at once.
- Care Team Assignment dates are properly validated against authorization service dates.
- Sessions created in Note for a date outside of the organization [grace period](../Scheduling/EncounterValdations.md/#encounter-service-is-not-within-grace-period) fail validation properly.
- Bulk editing [payroll items](../Payroll/PayrollItems.md) is enabled.
- Payroll modifiers can be added to recurring encounter templates to apply to all encounter services in the recurrence.

**Dashboard Updates**

- Targets of all forms of measure show on the [Session Data dashboard](../Overview/Dashboards.md/#session-data), including targets measured by Duration and Rate.
- Timing shows based on user time-zone on the [Supervision Ratios](../Overview/Dashboards.md/#supervision-ratios) and Session Data dashboards.

**Session Note Export Updates**

- [Location Name](../AdminSetup/Location.md) shows on session note instead of location type, allowing you to set a specific name (e.g. “Community” for location type “other”).
    - Location Type: corresponds to the POS code on the claim (can only be home, school, office, or other).
    - Location Description: shows in Note (custom text)
    - Location Name: shows on Session Notes (defaults to Location Description unless adjusted).
- Task analysis and Prompt scores are calculated accurately in all scenarios.
- [Qualifications](../AdminSetup/QualificationDefinition.md) set as “Show on Session Notes” show anywhere the practitioner is listed in the note (within the header and signature).

**New in Billing**

- Warning banners on [Locations](../AdminSetup/Location.md) and [Business Units](../AdminSetup/BusinessUnit.md) notify users that edits will impact all associated sessions, claims, and related records.
- [A Patient Condition](../Patients/Conditions.md) can be marked as Primary Diagnosis for Claim to drive which diagnosis is used on claims. Validation enforces only one condition being set as the primary diagnosis per patient.
- Encounter Service Status shows on the [Awaiting Resubmission charge item](../Billing/BillingSetup.md/#review-awaiting-resubmission-charge-items) form and view so you can efficiently review where the reopened session is holding and review what details were changed. 

**New Modifier Automations**:

- Billing Requirement Modifier **XE**: When there are multiple claim lines on the same claim with the same patient, service code, date of service, but different places of service, XE is added to the last claim line. (This rule works in conjunction with the “don’t split by place of service” billing rule).
- Billing Requirement Modifier **76**: When there are multiple claim lines on the same claim with the same patient, service code, date of service, but different places of service, 76 is added to the last claim line. (This rule works in conjunction with the “don’t split by place of service” billing rule).
- Billing Requirement Modifier **77**, Don't split by Rendering Provider: When there are multiple claim lines with the same patient, service code, date of service, place of service, but different rendering providers, they are included on the same claim, and 77 is added to the last claim line.
- Billing Requirement Modifier **UA** for Comprehensive Services: When a claim is generated for a healthcare service marked as Comprehensive, and the applicable fee schedule includes the UA modifier, UA is added to the claim line.

Learn how to apply modifier rules [here](../AdminSetup/InsurancePlan.md/#insurance-plan-billing-requirements).