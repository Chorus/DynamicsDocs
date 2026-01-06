---
id: EpisodeOfCare
title: Episodes of Care
---

# Episodes of Care 
The Episode of Care is a complete period that a patient is receiving health care with your organization. It generally begins with the patient’s referral or expressed interest in care, and ends with their discharge.

An Episode of Care includes all the services provided to the patient to treat their clinical condition during that period of time. Tracked on the Episode of Care record are the start/end dates that the patient is in various stages of care (Planned, Waitlist, On Hold, Active, etc.). 

(Patients in Autism Care usually have just one Episode of Care record, unless they leave the organization and later return to re-initiate services with the organization.)

## Create an Episode of Care

A patient’s episode of care is automatically created when an [opportunity](../CRM/Opportunity.md) for that patient is created. Further managing and updating statuses happens on the patient’s profile, using the [Episode of Care Status History](../Patients/EpisodeOfCare.md/#episode-of-care-history) records.

To create a new Episode of Care (for a patient without an opportunity), click 'New Episode of Care' on the Episode of Care subgrid (on the medical info tab of the Patient Contact Form). This will open the New Episode of Care Quick Create form.

**Episode of Care Information**
- *Patient*- The Patient field is prepopulated with the Patient you are navigating from and cannot be edited.
- *Period Start Date* - Enter the start date. The Period Start Date cannot be after the Period End Date. 
- *Period End Date*
- *Referring Provider* - The practitioner contact who referred the patient for services. If creating a new contact, set the contact type to 'External Contact' and populate the NPI on this contact for it to be included on a claim. 

### Episode of Care Validation

Episode of Care Validation ensures the data integrity of Encounters.

1. Period Start Date cannot be modified to be after the start date of any related Encounters with a Validation Status of 'Passed', or a Care Team Assignment with a Status Reason of 'Active'.
2. Status Reason cannot be 'Entered in Error' if scheduled or completed Encounters exist.
3. Period End Date cannot be before the end date of any related encounters with a Validation Status of 'Passed', or a Care Team Assignment with a Status Reason of 'Active'.

## Episode of Care History

Each Episode of Care History record updates the Status Reason of the Episode of Care and keeps track of when the status was updated.

**Automatic History Updates**
- Episodes of Care created from [opportunities](../CRM/Opportunity.md) are created at status Planned.
- When the patient's opportunity is completed, the episode of care is updated to Active.

**Manual History Updates**
- To update the status of an Episode of Care further (e.g., to place on hold or on wait list), open the Patient record, click 'New Episode of Care History' on the Patient History section, and select the status the episode of care should be updated to and the start date on the new status. The previous history record's end date will be automatically populated as one day before the new status began.

<img src ="/img/EOChistoryQC.png" width="600" height="200"/>

- To finish an Episode of Care, open the patient record, go to the episode of care on the medical info tab, and place an end date on the episode of care. An episode of care history will automatically be created showing when the Episode of Care was finished.