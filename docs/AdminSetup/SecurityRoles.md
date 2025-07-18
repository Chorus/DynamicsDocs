---
id: SecurityRoles
title: Security Roles
---

## Security Roles

Assigning users to security roles gives you control over who can view and edit the records and entities in your environment.

Our system comes with built-in security roles that are common to the administrative roles in ABA organizations. Additional roles can be configured according to your organization's structure and policies.

| Access           | Description                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Admin            | Admin roles can create, view, edit and share records for entities relevant to that role, no matter the business unit.                                                                                                                                                   |
| Manager          | Manager roles can create, view, edit and share records for entities relevant to that role, so long as the records are part of the user's [business unit](../AdminSetup/BusinessUnit.md). |
| Basic             | Basic roles can view records for entities relevant to that role, so long as the records are part of the user's business unit.                                                                                             
**Intake Roles** have access to CRM records, document locations, and patient/practitioner contacts, as well as insurance plans and qualifications for effectively setting up patient or practitioner profiles.
- *Patient Intake Manager*
- *Patient Intake Admin*
- *Practitioner Intake Manager*
- *Practitioner Intake Admin*

**Scheduler Roles** have access to Patient and Practitioner information and availability, as well as authorizations and assignments, and all other records that contribute to the scheduling workflow.
- *Scheduler Manager*
- *Scheduler Admin* (has access to additional workflows, such as [overriding validation failures](../Scheduling/EncounterValdations.md/#override-validation-failures), and [reopening submitted sessions](../Scheduling/UnsubmitEncounters.md))

**Clinical Roles** have access to Patient and Practitioner information and schedules, as well as to the organization's goal bank library, and clinical data collection and care plan records.
- *Clinical Manager*
- *Clinical Admin*

**Billing Roles** have access to view and edit charge items, generate claims, and access the full RCM workflow (payments, remits, cases, etc.).
- *Billing Manager*
- *Billing Admin*

**Coming Soon:** *Payroll Admin/Manager, Basic Access for all Roles*


## Special Permissions

- **EVV Manager** has access to view, correct, and resubmit [transmissions to Sandata](../AdminSetup/EVVSetUp.md#correct-evv-transmissions-to-sandata).
- **Assignments Admin** has access to edit the date range and assigned units on a [care team assignment](../Scheduling/CareTeamAssignments.md/#edit-care-team-assignments).
- **Authorizations Admin** has access to edit the date range and authorized units on an [authorization service](../Patients/AuthorizationServices.md/#edit-an-authorization-service).
- **Scheduler Admin** has access to [override a validation failure](../Scheduling/EncounterValdations.md/#override-validation-failures), [reopen a submitted session](../Scheduling/UnsubmitEncounters.md), and [deactivate a session with observations](../Scheduling/DeactivateEncounters.md/#deactivate-encounter-services).
- **PII Access - SSN** has access to input, view, and edit the practitioner's SSN.