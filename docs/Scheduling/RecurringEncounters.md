---
id: RecurringEncounters
title: Recurring Encounters
---
# Recurring Encounter Services

Recurring Encounter Services are encounter services that are set to repeat on a recurring schedule, either daily, weekly, or monthly. Each recurring encounter service consists of multiple encounter occurrences – which are the individual sessions.

## Create a Recurring Encounter Service
Recurring Encounter Services can be created from [Schedule Assistance](../Scheduling/ScheduleAssistance.md), or by clicking 'New Recurring Encounter Service' on any Encounter Services grid.

<img src ="/img/+recurringES.png" width="600" height="200"/>

1. **Create the encounter service** template by following the same steps as when creating a [single encounter service](../Scheduling/SingleEncounters.md/#create-a-single-encounter-service). 

- When selecting the start date, enter the start date and time for the first session of the recurring schedule. The rest of the encounter occurrences will be based on the same start time as scheduled on this encounter service template.
2. Click save to save the template encounter service. Click Next.

<img src ="/img/RecurringES1.png" width="800" height="200"/>

3. **Set up a recurrence pattern** and click save. 

- *Repeat* – select the frequency of the recurrence – daily, weekly, monthly, etc.
- *Every* – Enter the frequency at which the recurrence should repeat – Every 1 week, every 2 weeks, every 3 days, etc.
- *Days* - (when Repeat = 'Weekly', or 'Monthly– Same Week') – the day/s in the week or months to repeat this recurrence.
- *Week* - (when Repeat = 'Monthly– Same Week') – the number of weeks into the month to repeat this recurrence – First, Second, Third, Fourth, Last.
- *Day of Month* - (when Repeat = 'Monthly– Same Day') – the day of the month to repeat this recurrence.
- *End* – select how to end this recurrence – by an end date, or a number of occurrences.
    - *End Date* (when End is 'By End Date') – the day on which the recurrence should stop repeating.
    - *Total Occurrences* (when end is 'By Number of Occurrences') – the total number of occurrences to generate according to this recurrence pattern.
 
<img src ="/img/RecurringES2.png" width="800" height="200"/>

4. **Click Generate Occurrences**.

## Edit a Recurring Encounter
The end date of recurring encounter services can be moved earlier to deactivate encounter occurrences after the updated end date, or later to create additional occurrences against the same pattern through the new end date.

When a change to a schedule is necessary, end the recurring encounter service on the date of the last session for the previous schedule, and create a new recurring encounter service for the updated schedule.
:::note

The end date cannot be changed to a date where there are encounter occurrences after the new end date with observations already collected on them in the Note app.
:::
