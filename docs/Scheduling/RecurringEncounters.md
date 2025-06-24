---
id: RecurringEncounters
title: Recurring Encounters
---
# Recurring Encounters

Recurring Encounters are encounter services that are set to repeat on a recurring schedule, either daily, weekly, or monthly. Each recurring encounter service consists of multiple encounter occurrences – which are the individual sessions.

## Create a Recurring Encounter Service
Recurring Encounter Services set a single encounter service to repeat on a recurring schedule.

Recurring Encounter Services can be created by clicking 'New Recurring Encounter Service' on any Encounter Services grid.

<img src ="/img/newrecurring.png" width="800"/>

1. **Create the Encounter Service** template:

    <details>
    <summary> How to create the Encounter Service template: </summary>

    - *Start Time* - populate the start time of the session. (The start date of the recurrence pattern will be filled out at the next stage.)
    - *End Time* - populate the end time of the session. (The end date of the recurrence pattern will be filled out at the next stage.)
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
    - *Location* - filtered to display addresses related to this Patient (if location type is home, must be a service address) and general addresses (e.g. a school where multiple Patients are serviced). The location will be included as the Place of Service on the Claim. [Read more about locations](../AdminSetup/Location.md).
    - *Telecare* - Toggle on when the session was conducted over telecare.
    <img src ="/img/estemplate.png" width="900" height="200"/>

    </details>

2. Click save to save the template encounter service. Click Next.

3. **Set Up Recurrence Pattern** and click save.

    <details>
    <summary> How to set up recurrence pattern: </summary>

    - *Recurrence Start* - the day on which the recurrence should start repeating.
    - *Repeat* – select the frequency of the recurrence – daily, weekly, monthly, etc.
    - *Every* – Enter the frequency at which the recurrence should repeat – Every 1 week, every 2 weeks, every 3 days, etc.
    - *Days* - (when Repeat = 'Weekly', or 'Monthly– Same Week') – the day/s in the week or months to repeat this recurrence.
    - *Week* - (when Repeat = 'Monthly– Same Week') – the number of weeks into the month to repeat this recurrence – First, Second, Third, Fourth, Last.
    - *Day of Month* - (when Repeat = 'Monthly– Same Day') – the day of the month to repeat this recurrence.
    - *End* – select how to end this recurrence – by an end date, or a number of occurrences.
        - *Recurrence End* (when End is 'By end date') – the day on which the recurrence should stop repeating.
        - *Total Occurrences* (when end is 'By number of occurrences') – the total number of occurrences to generate according to this recurrence pattern.
    
    <img src ="/img/generateocc.png" width="8900" height="200"/>
    </details>

4. Click **Generate Occurrences**.

## Create a Group Recurring Encounter
Group Recurring Encounters set a group of encounter services (e.g., for group behavior treatment, or supervisison and direct care scheduled together, etc.) to repeat on a recurring schedule.

Click 'New Group Recurring Encounter" on any Encounter Services grid to create a group recurring encounter.

Follow the steps to [create an encounter](../Scheduling/SingleEncounters.md/#create-a-single-encounter), then set up a recurrence pattern and generate occurrences.

## Edit a Recurring Encounter
The end date of recurring encounter services can be moved earlier to deactivate encounter occurrences after the updated end date, or later to create additional occurrences against the same pattern through the new end date.

:::note

The end date cannot be changed to a date where there are encounter occurrences after the new end date with observations already collected on them in the Note app.
:::

When a change to a schedule is necessary, end the recurring encounter service on the date of the last session for the previous schedule, and click Copy Encounter to make the edits on a new recurring encounter.


### Copy a Recurring Encounter

Copying a recurring encounter lets you easily adjust a practitioner’s schedule without starting from scratch—while preserving the original schedule history for clear visibility into when each version was in effect.

You can copy recurring encounter services or group recurring encounters.

1. **Open the recurring encounter you would like to edit**. If needed, update the recurrence end on the recurrence pattern to reflect the last day this pattern applied to. This will deactivate all occurrences after the recurrence end.
2. **Click Copy Encounter**. A copy will be created with the recurrence start date set to the day after the end date of the recurring encounter service that was copied.
<img src ="/img/copyencounter.png" width="800" height="200"/>

3. **Edit the recurring encounter** as needed. You can adjust the timing, patient/practitioner, location, or recurrence pattern freely. Then, click save.
4. **Click Generate Occurrences**.