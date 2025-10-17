---
id: AC 4.0.6
title: Autism Care 4.0.6
---
# Autism Care 4.0.6 - October 2025

-The manual Claim Settings (rendering provider = practitioner on auth/encounter service) have been removed. The Rendering Provider on a claim is now the following way:
    - If the practitioner who performed the service has the [required claim qualifications](../AdminSetup/InsurancePlan.md/#required-qualificationsrequiredqualifications) for that insurance plan benefit: Practitioner on Encounter Service.
    - If not: the Practitioner from the [Rendering Provider Assignment](../Patients/Authorization.md/#claim-settings) on the authorization that matches the date of service. 
        - If there is no Rendering Provider Assignments, or multiple Rendering Provider Assignments that cover the same date range, the Claim will go to draft so the biller can select the correct Rendering Provider. [Claim validation](../Billing/Claims.md/#claim-validations) will check the rendering provider selected has the required Claim qualifications.
        - You can review Authorizations missing Rendering Provider Assignments on your [Authorizations view](../Patients/Authorization.md/#search-authorizations) (If you would like to have your rendering provider assignments set up based on the previous claim settings, reach out to your account manager.)
- Review your insurance plan benefit required qualifications straight from the [Qualifications Dashboard](../Overview/Dashboards.md)!
- [Practitioner Qualifications](../Practitioners/Qualifications.md) can now be set to status reason 'Pending' for practitioner qualifications that are not in the process of getting credentialed effectively yet. Only Active or Credentialed Effectively statuses are considered when validating required qualifications.
- You can now [write off](../RCM/RCMworkflow.md/#write-offs) the full outstanding amount on a claim to automatically write off all claim lines on the claim in one go!
- Coordination of Benefits section is now included on claims submitted to secondary so you can submit claims to secondary payers efficiently and accurately!
- Updating the date of an encounter service properly moves the charge item to the correct charge period.
- The Claim Billable Start and Billable End Dates accurately reflect the dates of services on the claim lines.
- The original reference number, as well as any fields that are edited on a draft claim, are saved properly when modified and resubmitted.
