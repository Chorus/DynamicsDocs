--- 
id: Cases
title: Cases
---

# Cases
Create a case to track information regarding resubmissions or outreach to payers regarding denials or outstanding balances. A case can be created for one claim or for a group of claims.

## Create a Case
<details>
<summary>How to create a case for a group of claims</summary>

1. On any claims view, select the claims for which you'd like to track a case.
2. Click 'New Case'
3. Fill in the relevant details on the case.
4. Click 'Save and Close'

</details>

<details>
<summary>How to create a case for one claim</summary>

1. On a claim, go to the Cases tab.
2. Switch from the 'All Submissions view of cases' to the 'This submission' view so the case will be created for this version of the claim.
3. Click 'Add Existing Case', then click 'New' and click 'Cases'
4. Fill in the relevant details on the case.
5. Click 'Save and Close'
6. Click 'Add" to add the new case to the claim.

</details>

<details>
<summary>How to add a claim to an existing case</summary>

Either:
1. Open the case. 
2. In the Bulk Case Claims section, click 'Add Existing Claim'. 
3. Choose the claim(s) to link to this case.

or:
1. On each claim you'd like to link to this case, go to the Cases tab. 
2. Switch from the 'All Submissions view of cases' to the 'This submission' view.
3. Click 'Add Existing Case'. 
4. Choose the case to link to this claim.

</details>

<img src ="/img/caseform.png" width="800"/>

**Claim Details**

- *Payer* - the payer on the claim(s) this case was created for.
- *Patient* - the patient on the claim(s) this case was created for.

**Case Details**
- *Subject* - the reason for the denial that is being disputed (authorization exceeded, service not covered, duplicate charges, patient responsibility, etc.).
- *Tags*
- *CARC Codes* - the claim adjustment remit codes (CARC) for the denial that is being disputed (OA-18, CO-16 etc.).
- *Description* - notes about the source of the denial, investigations underway, etc.
- *Follow Up By* - the date on which the owner of the case should follow up with the relevant party regarding payment.
- *Open Tasks*- a list of the tasks opened on the case timeline, for easy visibility on views.
- *Resolved CARC Codes* - the adjustment reasons that were already resolved, if multiple reasons are being disputed on one case.
- *Priority* - low, normal, or high.
- *Owner* - the user or team member accountable for recovering payment for the affected claims.

Track emails, phone calls, notes, and tasks on the case timeline for historical tracking of actions taken against this case.

**Bulk Case Claims**
- *Billable Start* - earliest date of service from the claims linked to this case.
- *Billable End* - latest date of service from the claims linked to this case.
- *Total Outstanding* - sum of outstanding amounts from the claims linked to this case.
- *Total Cost Share Outstanding* - sum of cost share outstanding amounts from the claims linked to this case.
- *Total Paid* - sum of paid amounts from the claims linked to this case.
- *Total Expected* - sum of expected amounts from the claims linked to this case.

- Review the claims linked to this case. You can remove claims from this case or add other claims to this case from here.

## Case Stages

Cases have 3 active stages:

1. New
2. In Progress
3. Awaiting Payment


- The **New** stage is for filling in the initial details of the case and assigning it to a team member to take next steps on. 
- The **In Progress** stage is for contacting the relevant parties (payer, patient, internal team members, etc.) about the outstanding balance for the claim(s) and why it was denied (investigating a duplicate charge, contacting a payer about timely filing exceptions, etc.).
- The **Awaiting Payment** stage is to track claims for which action was taken and a response is expected from the payer. Use the *Follow Up By* field to ensure regular follow-ups are performed.

Click 'Resolve Case' at any point to mark a claim as resolved. Click 'Cancel Case' at any point to mark a claim as canceled.

:::note
Only one active case can be tracked against a claim at any point. To open a new case against a claim, resolve or cancel the existing case.
:::

There are 6 views configured for easy access to viewing cases based on their statuses:
1. All Cases
2. Open Cases (new, in progress, or awaiting payment)
3. My Open Cases (open cases the logged in user is the owner of)
4. Cases In Progress
5. Cases Awaiting Payment
6. Resolved Cases

<img src ="/img/caseview.png" width="800"/>


## Case Dashboards

<img src ="/img/casedashboard.png" width="800"/>

Reference the Case Insights dashboard to easily understand how many open cases your organization has with each payer for each case subject, how much is outstanding on claims with open cases, and how many cases are canceled/resolved/in progress.

Drill down by case owner or CARC code to get even deeper insights.

<img src ="/img/tier1.png" width="800"/>

The Tier 1 dashboard gives you quick access to active cases, and resolved cases, draft emails, and open activities (tasks, appointments, etc.).