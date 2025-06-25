---
id: CareTeamAssignments
title: Care Team Assignments
---

# Care Team Assignments
To enable practitioners to self-schedule their sessions in the Note app, you can assign a practitioner a total number of hours per week/month/period of a certain service. Based on the care team assignments, practitioners will have access to schedule sessions for those patients in the Note app and the sessions will be validated against the care team assignment.

:::note
Practitioners who are not given a care team assignment for a patient will not be able to self-schedule for that patient in Note- they will only see sessions that were scheduled in Autism Care.

If a session is not scheduled against a care team assignment, the practitioner will only be able to edit the session to the same/shorter duration as the session was originally scheduled in Autism Care, within the same week. They will not be able to cancel the session in Note.
::: 

## Create a Care Team Assignment
To create a new Care Team Assignments:
1. Click the 'New' button on the Care Team Assignments Main Grid to open the Care Team Assignment Main Form.
2. Click 'New Care Plan Activity' on the Care Team Assignments subgrid (on a Patient Contact Form) to open the Care Team Assignment Quick Create form.


**Care Team Assignment Information**
- *Patient* - prepopulated with the Patient navigating from.
- *Episode of Care* - prepopulated with current Episode of Care for this Patient.
- *Authorization Service* - select the authorization service this assignment is based on. This will ensure that the assignment (together with all other assignments for this authorization service) is not going over the maximum authorized hours.
:::note
An authorization service for an authorization covered by [secondary coverage](../Patients/Coverages.md) cannot be selected on a care team assignment. This is to ensure sessions are always billed to primary coverage before they are resubmitted to secondary.
:::
- *Period Start Date* - prepopulated with Authorization Service Start Date and can be changed if necessary.. The Period Start Date of the Care Team Assignment cannot be before the Start Date on the related Authorization Service.
- *Period End Date* - prepopulated with Authorization Service End Date and can be changed if necessary. The Period End Date of the Care Team Assignment cannot be before the Start Date on the related Authorization Service.

**Assigned Practitioner**
- *Practitioner* - select the practitioner you are assigning these hours to. This field is locked after the Care Team Assignment is saved.
- *Practitioner Role* - auto-populated as the active practitioner role for the practitioner selected above and can be changed if necessary.

**Assignment Hours**
- *Amount of Hours* - enter the number of hours being assigned to this practitioner for this service.
- *Frequency* - select the frequency that the amount of hours above can be scheduled at (Hours Per Day, Hours Per Week, Hours Per Month, Hours Per Assignment Period).

**Related Encounters** 

The Related Encounters tab displays 2 sub grids, 1 for recurring enounters and 1 for single encounters. [Read more about Encounters](SingleEncounters).


When a care team assignment is created, the practitioner is added to the ‘Care Team Participants’ sub-grid.

## Edit Care Team Assignments

Once there are related Encounter Services created against a Care Team Assignment, the following fields are locked to prevent the Encounter Service from becoming invalid.
- *Authorization Service*
- *Period Start Date*
- *Amount of Hours*
- *Frequency*

If needed, update the end date on this record, and create a new Care Team Assignment with the updated information.

A user with the [Assignment Admin](../AdminSetup/SecurityRoles.md/#special-permissions) security role will have edit access to these fields. This user should keep in mind the following considerations when editing an care team assignment:

<details>
<summary> Assignment Admins should consider the following when editing Care Team Assignments:</summary>

- Editing the start date: 
    - Revalidate related encounter services from before the updated start date. 
    - Consider moving sessions from before the updated start date to a different care team assignment if one applies. 
    - If there were sessions outside of the assigned date range that were already submitted, notify your billers to take the relevant steps to correct or void the claim.

- Editing the authorization service: 
    - The authorization service will be unlocked for Assignment Admins if all sessions for this care team assignment are still scheduled. After editing the authorization service here, select the related encounter services, and bulk edit the authorization service field to match the updated authorization service on the care team assignment.
    - Once there are sessions past scheduled, the service code will be locked to prevent changing the authorization service on a session that the practitioner already started. If needed, update the end date on this care team assignment, and create a new one with the updated information.

- Editing the assigned units:
    - Revalidate related encounter services.
    - If there were sessions that are now over the assigned units that were already submitted, notify your billers to take the relevant steps to correct or void the claim.

</details>

## Search Care Team Assignments

Select 'Care Team Assignments' on the site menu in the Clinical Area of the site menu to open the Care Team Assignments Main Grid. The Care Team Assignments Main Grid has 3 different views.
- All Care Team Assignments (default)
    - The All Care Team Assignments view displays all the Care Team Assignment records in the system. The view is sorted by the Period Start Date with the newer dates displaying first. 
- Current Care Team Assignments
    - The Current Care Team Assignments view displays Care Team Assignment records in the system where the Period End Date is in the future. The view is sorted by the Period Start Date with the newer dates displaying first. 
- Expiring Care Team Assignments 
    - The Expiring Care Team Assignments view displays Care Team Assignments records in the system where the Period End Date is in the next 30 days. The view is sorted by the Period End Date with the older dates displaying first.