---
id: UnsubmitEncounters
title: Reopen Submitted Encounters
---
# Reopen Submitted Encounters

Users with the Scheduling Admin [security role](../AdminSetup/SecurityRoles.md) can reopen a submitted session so that the practitioner can make edits and resubmit it.

1. Go to the encounter service that needs to be reopened.
2. Change the status from 'Submitted' to 'Ready to Submit.' The practitioner will now be able to make edits to the session in Note.
    - If the related encounter service payroll item is not already in a closed payroll period, it will be deactivated.
    - If the related charge item is not at status 'Claim Line Created', it will become 'Awaiting Submission.'
    - If the related charge item is already at status 'Claim Line Created', it will become 'Awaiting Resubmission.'
3. When the practitioner resubmits the session in Note, the session will once again be locked for edit, a new encounter service payroll item will be created, and the Awaiting Submission charge item will become New. (Awaiting Resubmission charge items will stay as Awaiting Resubmission until a biller reviews the edits made to the session and determines if the claim needs to be modified. [Read more about Charge Item Statuses](../Billing/ChargePeriods.md/#charge-item-statuses).)


## Edit Submitted Encounters

The authorization service or care team assignment can be edited to a different service/assignment *for the same procedure code* on a submitted encounter service without reopening the session.

If the session was already billed, the charge item will be set to Awaiting Resubmission in case there was a change in the auth # or coverage that was originally billed. (Awaiting Resubmission charge items will stay as Awaiting Resubmission until a biller reviews the edits made to the session and determines if the claim needs to be modified. [Read more about Charge Item Statuses](../Billing/ChargePeriods.md/#charge-item-statuses).)