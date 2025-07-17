---
id: Coverages
title: Coverages
---

# Coverages 
Coverage is the reimbursement plan that a patient is subscribed to with an insurance company, who will be paying for the services you provide to the patient. Validations on scheduled services will roll back to the coverage – to make sure the patient has active coverage for the dates of service.

##  Create a Coverage  

Create a new Coverage by clicking 'New Coverage' on the Coverages subgrid (on a Patient Contact Form) or by clicking the 'New' button on the Coverages Main Grid.

**Coverage Information**
- *Status Reason* - Select ‘Active’ when creating a patient’s active coverage record. 
- *Coverage Level* - Set whether this is the patient’s primary or secondary coverage.
- *Member* (Patient) - prepopulated as the patient whose profile you’re on when adding this record.
- *Member ID* - Enter the Member ID as it appears on the patient’s insurance card. The member ID is transferred to the claim. It also enables you to run eligibility checks from within the Autism Care app and receive accurate responses.
- *Medicaid ID* - For coverages from Medicaid plans, enter the patient's Medicaid ID assigned by the state. Medicaid ID is used when [sending EVV Transmissions to Sandata](../AdminSetup/EVVSetUp.md/#evv-through-sandata).
- *Relationship* - Select the option that best describes the relationship of the member/patient to the policy holder (e.g., Self). 
- *Policy Holder* - Select the contact record of the person that is the policy holder. If the relationship is ‘Self’; the ‘Policy Holder’ should be the patient him/herself, otherwise select one of the patient’s [related contacts](Connection.md).
- *Start Date* - Enter the start date for this coverage.
- *End Date* - Enter the end date for this coverage.
- *Plan* - Select the plan the patient is covered under. The options here are based on the plans that you have set up in the system.
- *Payer* - Upon selecting the Plan field on the Coverage record, the Payer field displays the name of the payer on the selected plan.

### Edit a Coverage
Creating an authorization against a coverage will allow you to create an authorization services for the insurance plan benefits on the coverage. Therefore, if the plan on a coverage was not entered correctly, the authorization services have to be corrected as well.

<details>
<summary> How to change a coverage's plan </summary>

**1. Edit the plan on the coverage:**

1. On the coverage, change the plan to the correct plan.

**2. Edit the service code on the authorization services:**

1. Go to the authorizations covered by this coverage.

2. Open each authorization service, and change the service code to the corresponding service code on the coverage's new plan (the service code field will only show insurance plan benefits from the insurance plan on the coverage). 

On some authorization services, the service code will be locked for edit, since some sessions were already billed. When that is the case:

**Create a new authorization service, move encounter services and care team assignments to the new one, and deactivate the old one:**

1. Create a new authorization service, using a service code on the coverage's new plan. Copy the name of the new authorization service.
2. On the old authorization service, go to Related > Encounter Services. Select all, and click 'Edit'.
3. Paste the name of the new authorization service in the authorization service field. Click ' Save'. Sessions that were already billed will be set to Awaiting Resubmission for the biller to review and resubmit to the correct insurance plan.
4. On the old authorization service, go to Related > Care Plan Activities. Select all, and click 'Edit'.
5. Paste the name of the new authorization service in the authorization service field. Click ' Save'.
6. Deactivate the old authorization service.

</details>

## Search Coverages

Select 'Coverages' on the site menu in the Clinical Area to open the Coverages Main Grid. The Coverages Main Grid has 3 different views, all sorted by the Policy End Date with the older dates displaying first.

- The **Active Coverages** view displays all the Active Coverage records in the system. 
- The **Draft Coverages** view displays all the Draft Coverage records in the system. 
- The **Expiring Coverages** view displays all the Coverage records in the system where the Policy End Date is in the next 30 days.