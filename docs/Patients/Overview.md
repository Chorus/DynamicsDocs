---
id: PatientOverview
title: Overview
---

# Patients

A Patient refers to the client or learner who is serviced by an ABA Provider. The patient profile is where all of a patient’s information is tracked, managed and viewed.

## Create a Patient Contact

There are 3 Contact Forms. The 'Contact Type' field in the header sets the form as either Patient, Practitioner, or Related Person.

The Contact Main Form for a Patient is divided into multiple tabs for an organized view of the complete patient record.

- The **Profile Info** tab is for general patient information, usually collected upon intake. This tab is divided into a few sections:
    - *General Information* - Enter the patient’s legal name in the First Name/Last Name fields, and the name they are called in the Known As field. Date of birth and gender are tracked here as well. MRN is a unique identifier for the patient's record that is auto-populated.
    - *Patient Addresses* - These are the locations this patient will be serviced at, and/or an address for billing and mail communications. Addresses listed here should be specific to the patient whose profile it is added to; locations such as the organization’s office or a school would be added as a general service location in the Setup area. [Learn more about addresses](AdminSetup/Location.md). 

    :::note
    The patient’s billing address is used for insurance billing, and should reflect the address that the patient has registered with their insurance. A patient can only have one billing address at any time. 
    :::

    - *Related Contacts* - This is a list of any people that you are in contact with regarding the patient – parent/s, other guardian, school personnel, etc. The Patient's primary contacts display first. [Learn more about how to set up a patient's related contacts](Connection.md).
    - *Documents* - This section is for uploading and accessing Patient documents, such as assessment reports, diagnoses, or consent forms.
    - *Patient History* - This section is for managing a patient’s status. Click 'New Episode of Care History' to choose the status you are updating the patient to, and the date of the change. [Learn more about Episodes of Care](../Patients/EpisodeOfCare.md).
    - *Patient Preferences* - This section lists a patient’s preferences. When using the [Schedule Assistance](Scheduling/ScheduleAssistance.md) tool to find a Practitioner to service a Patient, the filters are populated with the Patient's preferences, and display practitioners who fit these criteria. 
        - Preferred Languages - Select the languages that the patient is comfortable communicating in.
        - Practitioner Gender Preference – if the patient has a preference to the practitioner gender, set it here.
        - Preferred Cultural Background - if the patient has a preference to the practitioner cultural background, set it here.
        - Service Location - Select the general location the patient requested to receive services in (home, school, community, clinic).
        - Preferred Service Times - Select the general timing the patient requested to receive services at (morning, afternoon, evening, weekend).
        - Preferred Start Date - enter the desired start date for services.
        - Case Management Notes - Enter any current relevant information that can affect the patient's case, so that everyone that opens the patient’s contact record can see it at a glance. It is best to include a date here - either the date this note was entered, or specific dates this note is relevant for.
    - *Timeline* - This is a running timeline of any communications or interactions with or regarding the patient. Emails, phone calls, encounters, tasks, and notes related to this patient are all tracked here. You can also initiate emails, phone calls, and tasks directly from the timeline, and the details will be automatically populated. Click the ‘+’ button to add a communication log to the timeline.

- The **Medical Info** tab is for information regarding the patient's diagnosis and treatment. This tab is divided into 2 subgrids:
    - *Conditions* - The left subgrid displays the conditions diagnosed to the patient. The conditions added here are included on the claims created for this patient. [Learn more about conditions](Conditions.md).
        - Current Conditions - This view only displays the current conditions of a patient. Once the Historical As Of date passed, the condition is no longer current. 
        - All Conditions - This view displays all the conditions except where the Verification Status is entered in error.
    - *Patient Documents* - The middle subgrid displays the documents that the payer requires for you to have on file for the patient (diagnostics, referrals, evaluations, etc.). These are automatically created on the opportunity based on the payer's required documents, and they can be added directly to the profile here as well. [Learn more about patient documents](../Patients/PatientDocuments.md).
    - *Episode of Care* - The right subgrid displays the episodes of care. In order for a patient to be actively serviced, they must have an active episode of care. A patient with an active episode of care cannot be deactivated. [Learn more about Episodes of Care](EpisodeOfCare.md).

- The **Coverage & Auth** tab is for information regarding the patient's insurance coverage and authorizations. This tab is divided into 2 sub grids:
    - *Coverages* - The top subgrid displays the patient's coverage records. Coverage records are required in order to enter authorizations and schedule encounters. [Learn more about Coverages](Coverages.md).
    - *Authorizations* - The bottom subgrid displays the patient's authorizations. The authorization includes all the services the patient is authorized to receive, and the number of hours or units per service. The authorization is the driving force behind all encounters – the system runs validations on each scheduled encounter to ensure it meets all the requirements of the authorization service and related insurance plan benefit. [Learn more about Authorizations](Authorization.md).

- The **Care Team** tab is for tracking the practitioners who are servicing the Patient. This tab is divided into 2 sub grids:
    - *Care Team Participants* - The left subgrid displays Care Team Participants. Care team participants track practitioners who are servicing/have serviced this patient. [Learn more about Care Team Participants](CareTeamParticipants.md).
    - *Care Team Assignments* - The right subgrid displays the Care Team Assignments. Care team assignments track practitioners who are assigned a number of hours for a certain authorization service with the patient. [Learn more about Care Team Assignments](../Scheduling/CareTeamAssignments).

- The **Encounters** tab lists the scheduled encounters for the patient. This tab is divided into 3 sub grids: 
    - *Recurring Encounters* - The top subgrid displays encounters that are recurring for a period of time. [Learn more about Recurring Encounters](../Scheduling/RecurringEncounters.md).
    - *Single Encounters* - The middle subgrid displays individual encounters (encounter occurrences and single encounters). [Learn more about Single Encounters](../Scheduling/SingleEncounters.md). The default view is set to 'Upcoming Encounters' - all Encounters where the Start Date/Time is in the future.
    - *Encounter Services* - The bottom subgrid displays the encounter services from this patient's encounters. [Learn more about Encounter Services](../Scheduling/SingleEncounters.md/#encounter-services). The default view is set to 'Upcoming Encounter Services' - all Encounter Services where the Start Date/Time is in the future.

- The **Calendar** tab displays a calendar of the patient’s encounter services  scheduled for them. [Learn more about the patient's Calendar](Calendar.md).

- The **Utilization** tab displays the utilized and remaining hours for the patient's authorization services. [Learn more about Utilization](../Overview/Dashboards.md/#utilization).

- The **Workflows** tab allows you to easily access the patient's intake workflows:
    - *Opportunities* - The top subgrid displays the patient's [opportunity(s)](../CRM/Opportunity.md).
    - *Authorization Workflows* - The bottom subgrid displays the patient's [authorization workflows](../CRM/AuthWF.md).

## Search Contacts

Select 'Contacts' on the site menu in the Clinical Area to open the Contact Main Grid. The Contact Main Grid has 3 views related to Patient contacts. All views display the First Name, Last Name, Known As, Date of Birth, Address and Status Reason.  
- Active Patients
    - The Active Patients view displays Patient Contact records that are Active.
- Current Patients
    -  The Current Patients view displays Patient Contact records that are Active and Current. A Patient is considered 'current' if they have an Active [Episode of Care](EpisodeOfCare.md). 
- All Patients
    - The All Patients view displays all the Patients in the system. This includes Active and Inactive records. (This is helpful when a Patient leaves your organization and their record is deactivated but later wants to receive services from you again. You can reactivate their contact record from this view.)

## Archive Patients

When discharging a patient, click 'Archive Contact' so that practitioners who have not finished submitting sessions for the patient will be able to finish submitting their sessions. The status reason of the Contact will become 'Not Active' and the contact will not show on Active Contact views.

If the patient's sessions have all been billed already, the contact can be deactivated through the deactivate button:

1. Place end dates on any active, current care team assignments for the patient.
2. Place an end date on the patient's [episode of care](../Patients/EpisodeOfCare.md/#episode-of-care-history) to mark it as finished, or deactivate the episode of care.
3. Click deactivate on the patient contact.

## Export Patient Session Notes

Patient session notes can be exported from any Encounter Service view:

1. The encounter services main view on the site menu.
2. The encounter services subgrid on the Encounters tab of a contact. 
3. The encounter service form for any single encounter service.


Filter the view to the services, patient, date range, and session status (e.g. only submitted sessions) you'd like to export session notes for. 
Then, click 'Export Session Notes'.
:::note
A session note export can only be created for one patient's sessions at a time. Separate exports can be generated for more than one patient's sessions.
:::
  <img src ='/img/exportsessionnotes2.png' width='900'/> 

The export displays the following:
- Organization logo (based on the logo uploaded to the patient's [business unit](../AdminSetup/BusinessUnit.md))
- Session details:
    - Patient full name
    - Patient DOB
    - Patient diagnosis
    - Date of service rendered
    - Time in
    - Time out
    - Duration of session
    - Units utilized (based on [charge item](../Billing/ChargePeriods.md/#charge-items))
    - Place of service (location type and address of encounter [location](../AdminSetup/Location.md))
    - Conducted over Telecare (when telecare is indicated on the encounter service)
    - Service rendered (procedure code and service name)
    - Rendering Provider (practitioner on encounter service)
    - Supervising BCBA / NPI number (rendering provider on the [claim](../Billing/Claims.md), or the rendering provider assignment on the [authorization](../Patients/Authorization.md/#claim-settings) when the claim has not been generated yet)
    - Other individuals present (name of encounter participants from overlapping encounters)
- Notes (session narrative written in the Note app)
- Primary Targets addressed in this session

    | Area | Subdomain | Goal | Target | Correct/Total Trials | Score|
    |-|-|-|-|-|-|
- Problem Behaviors / Barriers to Treatment Plan Implementation

    | Behavior Category | Behavior | Behavior Objective | Count |
    |-|-|-|-|
- Rendering Provider Name, and their [Qualifications](../AdminSetup/QualificationDefinition.md) that are set to show on session notes.
- Electronically Signed By / Date Signed (for submitted sessions)
- Footer (page number, patient name, patient DOB, member ID from primary [coverage](../Patients/Coverages.md))
