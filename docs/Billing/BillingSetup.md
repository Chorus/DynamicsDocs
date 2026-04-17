---
id: BillingSetup
title: Billing Workflow
---

# Billing Workflow

A [charge item](../Billing/ChargePeriods.md) is automatically created when an encounter service is created. The status of the charge item is set to 'Scheduled.'
- When the session is started in the Note app, the charge item is set to status 'Awaiting Submission.'
- When the session is submitted in the Note app, the charge item is set to status 'New.'

The Billing workflow starts with New charge items, primarily in the **Claims** app. There are 2 parts to the billing workflow:
1. [Approve Charge Items](../Billing/BillingSetup.md/#approve-charge-items)- this will mark charge items as 'Ready to Bill'
2. [Generate Claims](../Billing/BillingSetup.md/#generate-claims)- this will create claims for all Ready to Bill charge items. Claims are automatically submitted the clearinghouse every hour, unless they fail any [claim validations](../Billing/Claims.md/#claim-validations).


## Approve Charge Items

Review new charge items and determine whether they are ready to bill.

When you are ready to bill the new charges, on any charge item view, on a [charge period](../Billing/ChargePeriods.md/#charge-periods), or on an individual charge item, click 'Approve Charges'.
- When on a charge item view, select the date range and business unit(s) of charges to mark as ready to bill.
- Keep 'Don't approve duplicates' checked off if you would only like to approve charge items that do not have duplicates (i.e., for the same patient, date of service, service code, and place of service if relevant) already billed / not submitted yet. 

<img src ="/img/approvecharges.png" width="800"/>

If any charge items have duplicates (i.e., for the same patient, date of service, service code, and place of service if relevant) already billed / not submitted yet, the charge item will remain 'New' (will not be set to 'Ready to Bill'), and the link to the duplicate charge item will show on the charge item.

<img src ="/img/duplicatecharge.png" width="800"/>

To approve 'On Hold' charge items, first move the charge items to 'New.'

## Generate Claims 

When you are ready to create claims for all ready to bill charge items, click 'Generate Claims' on any charge items view to create claims and [claim lines](../Billing/ClaimItems.md) from 'Ready to Bill' charge items based on [billing rules](../AdminSetup/InsurancePlan.md/#insurance-plan-billing-requirements) and configuration. The charge items' statuses are updated to 'Claim Line Created.'
- Charge items with the same Patient, Start Date, End Date, Procedure Code, Auth Number, Place of Service, and Rendering Provider are grouped onto one claim line.
- Claim lines with the same Patient, Auth Number, Rendering Provider, Place of Service, and Facility are grouped onto one Claim (not exceeding 50 claim lines per claim).

When generating claims, billers can control whether claims are created in **Draft** (editable) or **Ready to Submit** [status](../Billing/Claims.md/#claim-statuses).

<img src ="/img/Generateclaims.png" width="600"/>

When "Generate as Draft" is checked, all generated claims will be created in **Draft** status for review. Leaving it unchecked will generate claims as **Ready to Submit** if they pass all [claim validations](../Billing/Claims.md/#claim-validations) and **Draft** only if they fail validation.
- When generating as draft use the "Draft Claims - Failed Validation" view for a focused view of claims that require edits, instead of all draft claims.

Manually edit Draft claims and click 'Save & Submit' on one or multiple claims to revalidate the claim and set it to 'Ready to Submit' if the edited claim passes all claim validations.

Claims that are 'Ready to Submit' are automatically submitted to the clearinghouse and updated to 'Submitted Submission' on an hourly basis. A [claims transaction](../RCM/Transactions.md) is automatically created.


## Review Awaiting Resubmission Charge Items

When an encounter service was reopened to allow the practitioner to make edits, if a claim line was already created, the charge item will be moved from 'Claim Line Created' to 'Awaiting Resubmission.'

Review 'Awaiting Resubmission' charge items to determine if the edits made to the session necessitate [modifying and resubmitting](../RCM/RCMworkflow.md/#correcting-claims) the claim.

Update charge item from 'Awaiting Resubmission' to 'Claim Line Created' and modify and resubmit the claim based on the updates made to the session.


## Billing Export

If your organization uses an external billing system, when you are ready to bill for the charge items in a charge period, generate a billing export to upload to your billing system.

1. On any Charge Items or Charge Periods view, click 'Billing Export'. 
2. Choose a start and end date of services you'd like to include in the billing export.
3. An csv file will be generated with the following columns:
    - Charge Item Name
    - Modifiers
    - Place of Service
    - Location Type (on the encounter [location](../AdminSetup/Location.md))
    - Telecare
    - Business Unit
    - Billable Units
    - Patient First and Last Name
    - Patient MRN
    - Practitioner First and Last Name
    - Practitioner Qualification (based on the practitioner's [qualifications](../Practitioners/Qualifications.md))
    - Start Date and Time
    - End Date and Time
    - Duration
    - Billing Unit Type (on the [insurance plan benefit](../AdminSetup/InsurancePlan.md/#insurance-plan-benefits))
    - Procedure Code (on the [insurance plan benefit](../AdminSetup/InsurancePlan.md/#insurance-plan-benefits))
    - Authorization #
    - Rendering Provider (based on the practitioner who performed the session if they are [qualified](../AdminSetup/InsurancePlan.md/#required-qualifications), or the [rendering provider assignment](../Patients/Authorization.md/#claim-settings) if they are not.)
    - Rendering Provider NPI
4. You will be prompted whether you'd like to mark the exported charge items as 'billed externally' to track that these charge items have been exported for billing through an external system.