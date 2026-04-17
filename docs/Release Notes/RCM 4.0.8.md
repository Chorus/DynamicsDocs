---
id: RCM 4.0.8
title: Claims/RCM 4.0.8
---
# Claims/RCM 4.0.8 - February 2026

New in Billing:
- **Automatic Duplicate Prevention**: [approve charge items](../Billing/BillingSetup.md/#approve-charge-items) efficiently and prevent billing charges with open / already billed duplicates! Skip the duplicate report and set thousands of charge items to ready to bill at once while automatically avoiding charges with “duplicates” that are not submitted yet, or were already billed.
- Place of Service can be updated on [charge items](../Billing/ChargePeriods.md/#charge-items) and is included in charge item views.
- **Generate claims as Draft**: Claims can now be [generated in a Draft status](../Billing/BillingSetup.md/#generate-claims), allowing teams to review claims before they are submitted to the clearinghouse.
    - Draft Claims – Failed Validation view: A new view makes it easy to identify draft claims that failed validation and require attention.
- **Save and Submit in bulk**: Move draft claims that have passed claim validations to Ready to Submit in bulk to save you time and allow you to review claims in batches.


New in RCM:
- Fee schedule item can be edited on draft [claim lines](../Billing/ClaimItems.md).
- Remit line adjustments added manually will be set as cost share adjustments based on the reason code. The reason field on an adjustment is filtered to only show reason codes.
- [Claim line write offs](../RCM/RCMworkflow.md/#write-offs) business unit is set based on the user who created the write off.
- [Coordination of Benefits](../RCM/RCMworkflow.md/#submitting-claims-to-secondary-coverage) updates:
    - All adjustments from the primary claim are included on the coordination of benefits section of the secondary claim.
    - Coordination of Benefits section on secondary claim is populated properly when primary claim’s remit was entered manually (without a transaction).
    - Additional x12 fixes for COB data.