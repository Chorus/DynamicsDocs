---
id: DeactivateEncounters
title: Cancel Encounters
---
# Cancel Encounter Services

To cancel a session, open the encounter service you'd like to cancel, click 'Cancel', and choose from cancellation reasons, including:
- Provider Cancellation
- Learner Absence
- Learner Unavailable
- Mandate Completed This Month
- School Closure
- School Event/Trip
- Holiday

In a group encounter, you can choose to cancel an individual encounter service under the encounter, while leaving the parent encounter and the rest of its encounter services scheduled. You can also cancel the parent encounter to cancel all encounter services it contains.

When an encounter service is canceled, its related charge item and payroll item are deactivated, (unless the payroll item is already in a closed payroll period).

## Deactivate Encounter Services

You can deactivate encounter services when a session was scheduled in error.


:::note
If observations were already collected on the session in the Note app, the encounter service cannot be deactivated. Instead, the practitioner should first [remove the inaccurate observations](https://notedocs.chorus.cloud/docs/DataCollection/EditDataAfterSession) in Note. 

[Scheduler Admins](../AdminSetup/SecurityRoles.md/#special-permissions) have permissions to override this rule if there is an exception and the provider cannot remove the data on their own. The Scheduler admin should deactivate the observations if the data is not valid.

<details>
<summary> How to deactivate observations </summary>

1. On the encounter service, go to Related > Observations.
2. Select all of the observations.
3. Click 'Deactivate' on the observations view.

<img src ="/img/deactivateobs.png" width="700" />

</details>

:::

1.  On any encounter service view, select the encounter services you'd like to deactivate.
2.  Click 'Deactivate' on the ribbon.
3.  Confirm deactivation and select a reason for deactivating.

<img src ="/img/399c27bd-f552-4bb9-9433-5ec75c60271e_image.png" width="500" height="200"/>

4.  All related records (encounter, encounter services, encounter participants) will be deactivated.

An encounter service can also be deactivated by opening the encounter service and clicking 'Deactivate' on the form's ribbon.

## Deactivate Recurring Encounter Services

Recurring encounter services are parents to a set of related encounter services that were generated based on the recurrence pattern selected.

The recurring parent cannot be deactivated. Instead, deactivate the encounter service occurrences by following the steps below.


<details>
<summary> How to deactivate recurring encounter - recurrence pattern set by end date </summary>

1.  Update the end date on the recurrence information to one day before the first scheduled encounter.

<img src ="/img/9b8cb298-2429-44af-bc58-4a6d672f193b_image.png" width="500" height="200"/>

2.  Confirm update

<img src ="/img/ConfirmUpdate.png" width="500" height="200"/>

</details>

<details>
<summary> How to deactivate recurring encounter - recurrence pattern set by number of occurrences </summary>

1.  Navigate to the encounter occurrences tab on the recurring encounter.

<img src ="/img/8f0664c7-33a1-4762-8e69-6cfe0e75ab89_image.png" width="500" height="200"/>

2.  Click on the check on the grid to select all encounter occurrences.

<img src ="/img/e0d315e9-fbe1-46ca-8c1e-2703cc1d0957_image.png" width="500" height="200"/>

3.  Once all encounter occurrences have been selected click deactivate on the grid ribbon.

<img src ="/img/9da78011-dd9f-4d37-af65-c89e3ac683bd_image.png" width="500" height="200"/>

4.  Confirm deactivation.

<img src ="/img/1907150b-ee4e-466e-8b07-cf21d8c468af_image.png" width="500" height="200"/>

5. Only the shown encounter occurrences are deactivated. If there is more than one page to the subgrid this process has to be repeated on the following pages as well.

<img src ="/img/cbfa41a3-9a64-48c7-9bf9-a47ca44e4ce6_image.png" width="500" height="200"/>

</details>


:::note
If observations were already collected on any of the encounter occurrences of a recurring encounter in the Note app, the encounter occurrences cannot be deactivated. Instead, the practitioner should first [remove the inaccurate observations](https://notedocs.chorus.cloud/docs/DataCollection/EditDataAfterSession) in Note. 

Scheduler Admins have permissions to override this rule.
:::


          