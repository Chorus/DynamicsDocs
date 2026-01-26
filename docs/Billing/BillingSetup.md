---
id: BillingSetup
title: Billing Workflow
---

# Billing Workflow

The majority of the billing workflow is automated to ensure claims are created, scrubbed, and submitted to the clearinghouse seamlessly.

The Billing workflow happens primarily in the **Claims** app. There are 2 parts to the billing workflow:
1. [Approve Charge Items](../Billing/BillingSetup.md/#approve-charge-items)- this will mark charge items as 'Ready to Bill'
2. [Generate Claims](../Billing/BillingSetup.md/#generate-claims)- this will create claims for all Ready to Bill charge items. Claims are automatically submitted the clearinghouse every hour, unless they fail any [claim validations](../Billing/Claims.md/#claim-validations).


## Approve Charge Items

A [charge item](../Billing/ChargePeriods.md) is automatically created when an encounter service is created. The status of the charge item is set to 'Scheduled.'
- When the session is started in the Note app, the charge item is set to status 'Awaiting Submission.'
- When the session is submitted in the Note app, the charge item is set to status 'New.'

Manually update the status of the New charge item to 'Ready to Bill' after reviewing it, individually or through bulk-editing charge items.

**Coming Soon! Easily approve charge items:**

On any charge item view, on a [charge period](../Billing/ChargePeriods.md/#charge-periods), or on an individual charge item, click 'Approve Charges'.
- When on a charge item view, select the date range and business unit(s) of charges to mark as ready to bill.
- Keep 'Don't approve duplicates' checked off if you would only like to approve charge items that do not have duplicates (i.e., for the same patient, date of service, service code, and place of service if relevant) already billed / not submitted yet. 

<img src ="/img/approvecharges.png" width="600"/>

If any charge items have duplicates (i.e., for the same patient, date of service, service code, and place of service if relevant) already billed / not submitted yet, the charge item will remain 'New' (will not be set to 'Ready to Bill'), and the link to the duplicate charge item will show on the charge item.

<img src ="/img/duplicatecharge.png" width="600"/>

To approve 'On Hold' charge items, first move the charge items to 'New.'

### Duplicate Billing Report

Billers can review a "Duplicates Report" to understand which new/ready to bill charge items have "duplicate charge items" (i.e., for the same patient, date of service, and service code) that are still awaiting submission.

This gives billers visibility to sessions that will be grouped together on a claim once all are submitted, and should therefore not be billed yet, as they may face denials if billed on separate claims.

<details>
<summary> How to export a Duplicates Report</summary>

1. In the Claims App, in the Billing area, go to Charge Items on the site menu to open the Charge Items view.
2. Click 'Export Duplicate Report' on the ribbon.
3. Select a start date and end date within which you'd like to check for sessions that would be grouped together on claims once submitted.
4. Click export. The excel export will include all session details as well as links to the encounter services.

</details>

## Generate Claims

Click 'Generate Claims' on any charge items view to create claims and [claim lines](../Billing/ClaimItems.md) from 'Ready to Bill' charge items. The charge items' statuses are updated to 'Claim Line Created.'
- Charge items with the same Patient, Start Date, End Date, Procedure Code, Auth Number, Place of Service, and Rendering Provider are grouped onto one claim line.
- Claim lines with the same Patient, Auth Number, Rendering Provider, Place of Service, and Facility are grouped onto one Claim (not exceeding 50 claim lines per claim).

Claims statuses are automatically set to 'Ready to Submit' if the claim passes all claim validations. Claims that are 'Ready to Submit' are automatically submitted to the clearinghouse and updated to 'Submitted Submission' on an hourly basis. A [claims transaction](../RCM/Transactions.md) is automatically created.

Claims statuses are set to 'Draft' if the claim does not pass all [claim validations](../Billing/Claims.md/#claim-validations). Manually edit Draft claims and click 'Save & Submit' to revalidate the claim and set it to 'Ready to Submit' if the edited claim passes all claim validations.

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