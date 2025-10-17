---
id: BillingSetup
title: Billing Workflow
---

# Billing Workflow

The majority of the billing workflow is automated to ensure claims are created, scrubbed, and submitted to the clearinghouse seamlessly.

The Billing workflow happens primarily in the **Claims** app.

1. A [charge item](../Billing/ChargePeriods.md) is automatically created when an encounter service is created. The status of the charge item is set to 'Scheduled.'
    - When the session is started in the Note app, the charge item is set to status 'Awaiting Submission.'
    - When the session is submitted in the Note app, the charge item is set to status 'New.'
2. A billing reviewer manually updates the status of the New charge item to 'Ready to Bill' after reviewing it. Charge items can be updated in bulk.
    - A billing reviewer also manually updates the status of Awaiting Resubmission charge items 'Claim Line Created' after determining if the edits made to the session necessitate modifying and resubmitting the claim. Update charge item from 'Awaiting Resubmission' to 'Claim Line Created' and [modify and resubmit](../RCM/RCMworkflow.md/#correcting-claims) the claim based on the updates made to the session.
3. A biller can click 'Generate Claims' on any charge items view to create [claim lines](../Billing/ClaimItems.md) from 'Ready to Bill' charge items. The charge items' statuses are updated to 'Claim Line Created.'
    - Charge items with the same Patient, Start Date, End Date, Procedure Code, Auth Number, Place of Service, and Rendering Provider are grouped onto one claim line.
    - Claim lines with the same Patient, Auth Number, Rendering Provider, Place of Service, and Facility are grouped onto one Claim (not exceeding 50 claim lines per claim).
4. Claims and claim line statuses are automatically updated to 'Draft' if the claim does not pass all claim validations.
5. A billing reviewer can manually edit Draft claims and click 'Validate' to revalidate the claim that did not pass all claim validations.
6. Claims and claim line statuses are automatically updated to 'Ready to Submit' if the claim passes all claim validations. 
7. Claims and claim line statuses that are 'Ready to Submit' are automatically submitted to the clearinghouse and updated to 'Submitted' on an hourly basis. A [claims transaction](../RCM/Transactions.md) is automatically created.


## Duplicate Billing Report

Billers can review a "Duplicates Report" to understand which new/ready to bill charge items have "duplicate charge items" (i.e., for the same patient, date of service, and service code) that are still awaiting submission.

This gives billers visibility to sessions that will be grouped together on a claim once all are submitted, and should therefore not be billed yet, as they may face denials if billed on separate claims.

<details>
<summary> How to export a Duplicates Report</summary>

1. In the Claims App, in the Billing area, go to Charge Items on the site menu to open the Charge Items view.
2. Click 'Export Duplicate Report' on the ribbon.
3. Select a start date and end date within which you'd like to check for sessions that would be grouped together on claims once submitted.
4. Click export. The excel export will include all session details as well as links to the encounter services.

</details>


## Billing Export

If your organization uses an external billing system, when you are ready to bill for the charge items in a charge period, generate a billing export to upload to your billing system.

1. On tny Charge Items or Charge Periods view, click 'Billing Export'. 
2. Choose a start and end date of services you'd like to include in the billing export.
3. An csv file will be generated with the following columns:
    - Charge Item Name
    - Modifiers
    - Place Of Service
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
    - Rendering Provider (based on the practititioner who performed the session if they are [qualified](../AdminSetup/InsurancePlan.md/#required-qualificationsrequiredqualifications), or the [rendering provider assignment](../Patients/Authorization.md/#claim-settings) if they are not.)
    - Rendering Provider NPI
4. You will be prompted whether you'd like to mark the exported charge items as 'billed externally' to track that these charge items have been exported for billing through an external system.