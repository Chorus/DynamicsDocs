---
id: ClaimItems
title: Claim Lines
---

# Claim Lines

On every claim, claim items are listed as claim lines detailing the service provided to the patient.

:::note
Charge items with the same Patient, Start Date, End Date, Procedure Code, Auth Number, Place of Service, and Rendering Provider are grouped onto one claim line.

Claim lines with the same Patient, Auth Number, Rendering Provider, Place of Service, and Facility are grouped onto one Claim (not exceeding 50 claim lines per claim).
:::

**Service Details**
- *Claim* - the claim this claim line is included on.
- *Status Reason* - the status of the claim.
- *Product or Service* - the service code being billed.
- *Service Start* - the start date of the service.
- *Modifiers* - modifiers that were submitted on the claim.
- *Service End* - the end date of the service.
- *Place of Service* - the place of service code for the location of the service.
- *Quantity* - the quantity of units billed for that service.
- *Billed Unit Price*
- *Billed* - the dollar amount billed.

**Diagnosis Pointers**
- Condition code for this patient.

**Claim Item Amounts**
- *Expected Amount* - the dollar amount expected.
- *Paid Amount* - the sum of all paid amounts on all remit lines posted to this claim line, on any version of the claim.
- *Total Cost Share Adjustments*  - the sum of all cost share adjustments on all remit line adjustments for this claim line, on any version of the claim.
- *Total Write-Offs*  - the sum of the write-off amount on any [write-offs](../RCM/RCMworkflow.md/#write-offs) created for this claim line, on any version of the claim.
- *Outstanding* - the difference between the expected amount and the paid amount. Write-offs and [cost share remit lines](../RCM/RCMworkflow.md/#posting-cost-share-payments) are deducted from this total so that it presents the balance due from the payer.
- *Cost Share Paid* - the sum of all paid amounts on all [cost share remit lines](../RCM/RCMworkflow.md/#posting-cost-share-payments) posted to this claim line, on any version of the claim. 
- *Cost Share Outstanding* - the difference between the cost share adjustments and the cost share paid, with cost share write-offs deducted. This represents the cost share balance.

**Provider Details**
- *Rendering Provider* - the rendering provider, based on the [claim settings](../Billing/ClaimSettings.md)
- *Rendering Provider Type* - either individual or organization.
- *NPI* - the rendering provider's NPI.
- *Facility*

**Additional Details**
- *Authorization # Override*
- *Description*

The **Remit Lines** tab lists all remit lines for this claim line.

## Claim Line Views

- The **Submitted Claim Lines** view displays all claim lines on submitted claims.
- The **Denied Claim Lines** view displays claim lines on claims that were received a remit, but nothing was paid on the remit.
- The **Partially Denied Claim Lines** view displays claim lines that received a remit, but only a portion of the expected amount was paid.
- The **Open Balance - Payer** view displays claim lines on submitted claims with an outstanding amount greater than zero.
- The **Open Balance - Cost Share** view displays claim lines on submitted claims with a cost share outstanding amount greater than zero.
- The **Open Balance - Case Details** view displays claim lines on submitted claims with either an outstanding amount or a cost share outstanding amount greater than zero, and an active [case](../RCM/Cases.md) on the claim. This view shows the description, follow up by date, and subject from the case.
- The **Overpaid Claim Lines** view displays claim lines on submitted claims with a negative outstanding amount (where the paid amount and write off amounts together exceeds the expected amount).

