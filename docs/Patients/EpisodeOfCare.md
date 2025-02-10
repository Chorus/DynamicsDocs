---
id: EpisodeOfCare
title: Episodes of Care
---

# Episodes of Care 
The Episode of Care is a complete period that a patient is receiving health care with your organization. It generally begins with the patient’s referral or expressed interest in care, and ends with their discharge.

An Episode of Care includes all the services provided to the patient to treat their clinical condition during that period of time. Tracked on the Episode of Care record are the start/end dates that the patient is in various stages of care (Planned, Waitlist, On Hold, Active, etc.). 

(Patients in Autism Care usually have just one Episode of Care record, unless they leave the organization and later return to reinitiate services with the organization.)

A patient’s episode of care is automatically created when an opportunity record for that patient is created. Further managing and updating statuses happens on the patient’s profile, using the Episode of Care Status History records.

## Create an Episode of Care

To create a new Episode of Care, click 'New Episode of Care' on the Episode of Care subgrid (on a Patient Contact Form). This will open the New Episode of Care Quick Create form.

**Episode of Care Information**
- *Patient*- The Patient field is prepopulated with the Patient you are navigating from and cannot be edited.
- *Period Start Date* - Enter the start date. The Period Start Date cannot be after the Period End Date. 
- *Period End Date*
- *Referring Provider* - The Contact who referred the patient for services.

## Episode of Care Validation

Episode of Care Validation ensures the data integrity of Encounters.

1. Period Start Date cannot be modified to be after the start date of any related Encounters with a Validation Status of 'Passed', or a Care Team Assignment with a Status Reason of 'Active'.
2. Status Reason cannot be 'Entered in Error' if scheduled or completed Encounters exist.
3. Period End Date cannot be before the end date of any related encounters with a Validation Status of 'Passed', or a Care Team Assignment with a Status Reason of 'Active'.

## Episode of Care History

Each Episode of Care History record updates the Status Reason of the Episode of Care and keeps track of when the status was updated.
<details>
<summary> How to update the status of an Episode of Care</summary>

1. On the Patient record, go to the Medical Info tab. Open the patient's episode of care.
2. Click 'New Episode of Care History' on the Status Updates subgrid to open the episode of care history form. 
 
 <img src ="/img/EOChistory.png" width="600" height="200"/>
3. Select the status the episode of care should be updated to, and the start date on the new status. The previous history record's end date will be automatically populated as one day before the new status began.

</details>


**Status Update Information**
- *Status* – the status that the Episode of Care was updated to (planned, waitlist, active, or on hold).
- *Start Date* – the date that this status began or is set to begin.
- *End Date* – when a new history record is added, end date is auto-populated as the day before the start date of the new status.

The most recent Episode of Care History is the record with the latest start date and no end date. 

<img src ="/img/EOChistoryQC.png" width="600" height="200"/>