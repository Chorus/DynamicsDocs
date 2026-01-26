---
id: RCM 4.0.8
title: Claims/RCM 4.0.8
---
# Claims/RCM 4.0.8 - January 2026

**Coming Soon!**

New in Billing:
- **Automatic Duplicate Prevention**: [approve charge items](../Billing/BillingSetup.md/#approve-charge-items) efficiently and prevent billing charges with open / already billed duplicates! Skip the duplicate report and set thousands of charge items to ready to bill at once while automatically avoiding charges with “duplicates” that are not submitted yet, or were already billed.
- Place of Service can be updated on [charge items](../Billing/ChargePeriods.md/#charge-items) and is included in charge item views.
- **New [Modifier Automations](../AdminSetup/InsurancePlan.md/#insurance-plan-billing-requirements)**
    - Billing Requirement Modifier XE
    - Billing Requirement Modifier 76
    - Billing Requirement Modifier 77, Don't split by Rendering Provider

New in RCM:
- Fee schedule item can be edited on draft [claim lines](../Billing/ClaimItems.md).
- Remit line adjustments added manually will be set as cost share adjustments based on the reason code. The reason field on an adjustment is filtered to only show reason codes.
- [Claim line write offs](../RCM/RCMworkflow.md/#write-offs) business unit is set based on the user who created the write off.
- [Coordination of Benefits](../RCM/RCMworkflow.md/#submitting-claims-to-secondary-coverage) updates:
    - All adjustments from the primary claim are included on the coordination of benefits section of the secondary claim.
    - Coordination of Benefits section on secondary claim is populated properly when primary claim’s remit was entered manually (without a transaction).
    - Additional x12 fixes for COB data.