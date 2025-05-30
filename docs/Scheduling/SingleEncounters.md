---
id: SingleEncounters
title: Encounter Services
---

## Encounter Services 
Encounter services are the sessions conducted by practitioners. Every encounter service is automatically parented by an encounter, to allow scheduling multiple encounter services (group sessions, supervision and direct care, etc.) under one encounter.

There are 3 ways to create encounter services:

1. Create a Single Encounter Service, manually or from [Schedule Assistance](../Scheduling/ScheduleAssistance.md)
2. Create a [Recurring Encounter Service](../Scheduling/RecurringEncounters.md), manually or from [Schedule Assistance](../Scheduling/ScheduleAssistance.md)
3. Create a [Care Team Assignment](../Scheduling/CareTeamAssignments.md) so that a practitioner can create a session in the Note app.

### Create a Single Encounter Service
Single encounter services are scheduled on a one-off basis. 
To create a new encounter service, click 'New Encounter Service' on the Encounter Services subgrid on a patient/practitioner, on the Encounter Services main view, or on any patient/practitioner calendar. 

**Encounter Service Information**
- *Start Date/Time* - populate the start date/time of the session.
- *End Date/Time* - populate the end date/time of the session.
- *Service Type* - choose from 2 options:
    - Assignment - Session will be validated against the Care Team Assignment. Practitioner will have access to edit the session in the Note app.
    - Service - Session will be validated against the Authorization Service. Practitioner will have limited access to edit the session in the Note app (the session can be edited within the same week for the same or shorter duration than originally scheduled, and cannot be canceled).
- *Assignment* - displays on form when Service Type is set to 'Assignment'. The Encounter Patient and Practitioner will be created based on the Patient and Practitioner on the Care Team Assignment.
- *Encounter Patient* - displays on form when Service Type is set to 'Service'. Select the patient.
- *Encounter Practitioner* - displays on form when Service Type is set to 'Service'. Select the practitioner.
- *Authorization Service* - displays on form when Service Type is set to 'Service'. Select the Authorization for this Patient.
:::note
An authorization service for an authorization covered by [secondary coverage](../Patients/Coverages.md) cannot be selected on an encounter service. This is to ensure sessions are always billed to primary coverage before they are resubmitted to secondary.
:::
- *Mileage* - If your organization reimburses for mileage, enter the miles travelled to this session to create a mileage [payroll item](../Payroll/PayrollItems.md).
- *Payroll Modifiers* - add modifiers if a different rate should be applied to this session based on the payroll fee schedule on the practitioner's contract.

**Location Information**
- *Location* - filtered to display addresses related to this Patient (if location type is home, must be a service address) and general addresses (e.g. a school where multiple Patients are serviced). The location will be included as the Place of Service on the Claim. [Read more about locations](../AdminSetup/Location.md).
- *Telecare* - Toggle on when the session was conducted over telecare.
- *Cancelation Reason* displays on form when Status Reason is Canceled.

When an encounter service is saved, encounter participants are created automatically.

**Encounter Participants**

Encounter Participants are generated automatically based on the encounter service.

A Patient Encounter Participant is only generated automatically when the Authorization Service's Service Code (see [Insurance Plan Benefits](../AdminSetup/InsurancePlan.md/#InsurancePlanBenefits)) requires patient present.

Additional Encounter Participants can be created manually (e.g., to add a parent as a participant to a Parent Training session). 
To create an encounter participant, click 'New Encounter Practitioner' on the Encounter Practitioners subgrid.

- *Participant* - select the participant. To filter this lookup, select the Type first, and this lookup will be filtered to Contacts of that type.
- *Type* - select the type of Contact to add:
    - Patient
    - Practitioner
    - Related Contact

### Editing Encounter Services

To update the timing of encounters, choose the **encounter service** for which the timing needs to be updated, and update the relevant fields. 

- The encounter's start time will automatically update to the start time of the earliest encounter service under it, and the encounter's end time will update to the end time of the latest encounter service under it.

:::note
Submitted encounter services cannot be updated. A scheduler admin can [reopen the session](../Scheduling/UnsubmitEncounters.md) to enable editing the session. The practitioner will resubmit the session in Note to place their digital signature on the updated details.
:::

### Encounter Services for Other Time Zones
A notification banner displays when your Dynamics Time Zone settings are set to a different time zone than the patient, to inform you that you are viewing timings in a different time zone than where the session took place.

There are two options for creating sessions for practitioners in other time zones:

1. Schedule any Encounter Services for practitioners in other time zones X hours later than they really took place (so if the session took place at 9:00 AM Central, schedule the session for 10:00 AM (if your personalizations are set to EST), and it will be converted to 9:00 AM for users in the Central time zone).

2. In 'Personalization Settings', before creating Encounter Services for patients in another time zone, set your Dynamics time zone to the time zone of the practitioner. Then, the timings you see will match the timings the practitioner sees and the timings submitted on Claims. 

<img src ='/img/personalizationSettings.png' width='180'/>

<img src ='/img/timezone.png' width='500'/>


## Group Encounters
If you'd like to schedule one encounter that contains multiple encounter services (group sessions, supervision and direct care, etc.), start by creating an encounter.

There are 2 ways to create encounters:

1. Create a Group Encounter to schedule on a one-off basis
2. Create a [Group Recurring Encounter](../Scheduling/RecurringEncounters.md) to schedule a group encounter to repeat on a schedule.

### Create a Group Encounter

To create a new group encounter, click 'New Group Encounter' on the Encounter Services subgrid on a patient/practitioner, or on the Encounter Services main view.

#### Set Timing and Duration
Select the date, time, service, and duration of the session.
- *Start Date/Time* - the start date and time of the session.
- *Duration* - the duration of the session (can be automatically calculated based on start/end time)
- *End Date/Time* - the end date and time of the session (can be automatically calculated based on start time/duration)

Click Next on the Encounter setup flow to add encounter services.

#### Encounter Services
Click 'New Encounter Service' on the Encounter Services subgrid. The encounter services you add do not need to have the same timing as the parent Encounter. However, the Encounter timing needs to include the timing of any encounter services under it. 

For example, if a Behavior Techician has a direct care session from 9:00-12:00, and the BCBA supervises from 10:00-11:00, there would be 2 encounter services with their respective timings, under one Encounter with timing 9:00-12:00.

**Encounter Service Information**
- *Encounter* - prepopulated with the Encounter you are adding the Encounter Service to.
- *Service Type* - choose from 2 options:
    - Assignment - Session will be validated against the Care Team Assignment. Practitioner will have access to edit the session in the Note app.
    - Service - Session will be validated against the Authorization Service. Practitioner will have limited access to edit the session in the Note app (the session can be edited within the same week for the same or shorter duration than originally scheduled, and cannot be canceled).
- *Assignment* - displays on form when Service Type is set to 'Assignment'. The Encounter Patient and Practitioner will be created based on the Patient and Practitioner on the Care Team Assignment.
- *Encounter Patient* - displays on form when Service Type is set to 'Service'. Select the patient.
- *Encounter Practitioner* - displays on form when Service Type is set to 'Service'. Select the practitioner.
- *Authorization Service* - displays on form when Service Type is set to 'Service'. Select the Authorization for this Patient.
:::note
An authorization service for an authorization covered by [secondary coverage](../Patients/Coverages.md) cannot be selected on an encounter service. This is to ensure sessions are always billed to primary coverage before they are resubmitted to secondary.
:::
- *Start Date/Time* - prepopulated with the start date/time of the Encounter you are adding the Encounter Service to.
- *End Date/Time* - prepopulated with the end date/time of the Encounter you are adding the Encounter Service to.
- *Mileage* - If your organization reimburses for mileage, enter the miles travelled to this session to create a mileage [payroll item](../Payroll/PayrollItems.md).
- *Payroll Modifiers* - add modifiers if a different rate should be applied to this session based on the payroll fee schedule on the practitioner's contract.
- *Location* - filtered to display addresses related to this Patient (if location type is home, must be a service address) and general addresses (e.g. a school where multiple Patients are serviced). The location will be included as the Place of Service on the Claim. [Read more about locations](../AdminSetup/Location.md).

**Location Information**
- *Location* - filtered to display addresses related to this Patient (if location type is home, must be a service address) and general addresses (e.g. a school where multiple Patients are serviced). The location will be included as the Place of Service on the Claim. [Read more about locations](../AdminSetup/Location.md).
- *Telecare* - Toggle on when the session was conducted over telecare.

When an encounter service is saved, encounter participants are created automatically.

**Encounter Participants**

Encounter Participants are generated automatically based on the encounter service.

A Patient Encounter Participant is only generated automatically when the Authorization Service's Service Code (see [Insurance Plan Benefits](../AdminSetup/InsurancePlan.md/#InsurancePlanBenefits)) requires patient present.

Additional Encounter Participants can be created manually (e.g., to add a parent as a participant to a Parent Training session). 
To create an encounter participant, click 'New Encounter Practitioner' on the Encounter Practitioners subgrid.

- *Participant* - select the participant. To filter this lookup, select the Type first, and this lookup will be filtered to Contacts of that type.
- *Type* - select the type of Contact to add:
    - Patient
    - Practitioner
    - Related Contact


## Search Encounter Services

You can use the main Encounter Services view to locate sessions for a specific service, patient/practitioner, status reason, validation status, etc.

To display the main Encounter Services view in a calendar format:
1. Go to Encounter Services on the sitemap.
2. In the top left corner, click Show As.
3. Switch to Calendar View.
4. Click Edit Filters and filter by encounter patient/practitioner to see sessions for multiple contacts on the same view.
