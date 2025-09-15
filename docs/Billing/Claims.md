---
id: Claims
title: Claims
---

# Claims

A claim is a list of services which have been provided to a patient which is sent to an insurer for reimbursement.

The Claim Form is divided into multiple tabs for an organized view of the complete claim.

**Claim Details** 
- *Claim Number* - a unique identifier for the claim.
- *Claim Type* - the category of claim (e.g. professional, institutional, oral, pharmacy, vision).
- *Place of Service* - the location on the encounter.
- *Total Billed* - the sum of the amounts billed for each claim line in the claim.
- *Diagnosis Codes*

The **Patient & Coverage Details** section of a claim display information from the [patient](../Patients/Overview.md) record and the patient's [coverage](../Patients/Coverages.md).
- *Patient*
- *Date of Birth*
- *Patient Address*
- *Gender*
- *Member Id*
- *Coverage*
- *Payer*

**Rendering Provider Details**
- *Rendering Provider* - populated based on the claim settings for either the [business unit](../AdminSetup/BusinessUnit.md/#claim-settings), [payer](../AdminSetup/Account.md/#claim-settings), or [authorization](../Patients/Authorization.md/#claim-settings). 
- *NPI* - NPI of the practitioner populated as the Rendering Provider.

**Referring Provider Details**
- *Referring Provider* - the referring provider on the [episode of care](../Patients/EpisodeOfCare.md)
- *NPI* - NPI of the contact populated as the Referring Provider

The **Paid Amount Details** section displays on a claim when a remit was already posted to the claim.
- *Total Paid - Claim Submissions* - the payment amount on the remit.
- *Total Paid - All Submissions* - the sum of the payment amounts on any remits posted to any submissions of this claim.
- *Total Cost Share Paid* - the sum of the payment amounts on any cost share remits posted to any submissions of this claim.

The **Oustanding Amount Details** section displays on a claim when a remit was already posted to the claim.
- *Total Expected* - the expected amount based on quantity of units billed and the fee schedule for this service.
- *Total Paid* - the sum of the payment amounts on any remits posted to any submissions of this claim.
- *Total Cost Share Adjustments* - the sum of the adjusted amount on any cost share adjustments on any remit lines or remits on any submission of this claim.
- *Total Write-Offs* - the sum of the write-off amount on any [write-offs](../RCM/RCMworkflow.md/#write-offs) posted to this claim or any lines of this claim, on any submissions of this claim.
- *Total Outstanding* - the difference between the Total Expected and the Total Paid. Write-offs and Cost Share Adjustments are deducted from this total so that it presents the balance due from the payer.
- *Total Cost Share Oustanding* - the difference between the Total Cost Share Adjustments and the Total Cost Share Paid, with cost share write-offs deducted. This represents the cost share balance.

The **Submission Details** section displays on a claim when the claim has been modified and resubmitted.
- *Claim Frequency Code*
- *Original Reference Number* 
- *Delay Reason Code*

The **Claim Lines** subgrid displays the claim items on the claim. [Read more about claim items](../Billing/ClaimItems.md).

The **Additional Claim Info** tab contains other information sometimes relevant to claims:
- *Billing Provider*
- *NPI*
- *Tax ID*
- *Facility* - the address of the session location. If there is no address on the session location, and the location type is Office, the Business Unit will be listed, otherwise, the facility will be blank.

The **Submissions Summary** tab shows a list of submissions representing the full story of the claim (how and when it was submitted, modified, resubmitted, etc.).

The **Remits Summary** tab shows [remits](../RCM/Remits.md) that were posted to this claim. Switch between remits that were posted to this submission of the the claim, or all submissions of this claim.

The **Write-Offs** tab shows [write-offs](../RCM/RCMworkflow.md/#write-offs) and write-off lines that were written towards this claim's outstanding balance or cost-share outstanding balance.

The **Cases** tab shows [cases](../RCM/Cases.md) that were opened against this claim.  Switch between cases that were opened for this submission of the claim, or all submissions of this claim.


## Claim Statuses

- **Draft** - Claim has not yet been submitted and fields can be edited.
- **Ready to Submit** - Claim has been saved and submitted and can no longer be edited.
- **Submitted Submission** - Claim has been submitted to the clearinghouse.
- **Historical Submission** - Claim has since been modified and resubmitted, and this is a historical record of a previous submission.

There are 6 views configured for easy access to viewing claims based on their statuses:
1. All Claims
2. Draft Claims
3. Historical Claims
4. Ready to Submit Claims
5. Submitted Claims
6. Inactive Claims

## Claim Validations

Claims will be set to status Draft if they are missing any information that would cause them to be rejected by the clearinghouse.

<details>
<summary>How to correct draft claims</summary>

| **Failed Validation**                                   | **How to Correct**                                                                                                                                                                                                                                 |
|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Patient: Date of Birth                                | Click on the patient contact on the claim, enter the date of birth, and save.                                                                                                                               |
| Patient: Address Line 1, City, State, Zip             | **To correct for this claim**: click on the patient contact on the claim, enter the address, and save. **To prevent for future claims**: open the patient's profile in Autism Care and set a home address as 'Billing Address'. [Learn more about locations](../AdminSetup/Location.md). |
| Policy Holder                                         | Click on the coverage on the claim, and enter a policy holder.                                                                                                                                               |
| Policy Holder Name, DOB, Address, Gender              | Click on the coverage on the claim. Clear the policy holder and choose the correct one, or click on the policy holder to enter the missing information on their contact profile.                             |
| Rendering Provider                                    | Enter the rendering provider on the claim. [Learn more about how rendering provider is set on claims](../Patients/Authorization.md/#rendering-provider-assignments).                                                                                      |
| Rendering Provider: Qualification Identifier (NPI)    | Click on the rendering provider on the claim, enter the NPI Number and save, or clear the rendering provider and choose a different practitioner.                                                           |
| Rendering Provider: Primary Taxonomy Code             | Click on the rendering provider on the claim, enter the primary taxonomy code and save, or clear the rendering provider and choose a different practitioner.                                                |
| Referring Provider                                    | **To correct for this claim**: enter the referring provider on the claim. **To prevent for future claims**: open the patient's profile in Autism Care, Medical Info tab, episode of care, and enter the referring provider. |
| Referring Provider NPI                                | Click on the referring provider on the claim, enter the NPI Number and save, or clear the referring provider and choose a different practitioner.                                                           |
| Billing Provider
Facility
Diagnosis Code

</details>

Correct the missing information, then click 'Save & Submit' to rerun validation. The session will be set to 'Ready to Submit' if there is no more missing information. All 'Ready to Submit' claims are submitted to the clearinghouse on an hourly basis.


## Submit Claims

To submit claims, click 'Save & Submit' on any draft claim. The claim status will become 'Ready to Submit.' All 'Ready to Submit' claims are submitted to the clearinghouse on an hourly basis.

To modify and resubmit a claim, see [Correcting Claims](../RCM/RCMworkflow.md/#correcting-claims)

