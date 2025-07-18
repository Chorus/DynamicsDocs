---
id: EVVSetup
title: EVV Setup
---

:::note EVV (electronic visit verification) 
EVV requires capturing 6 data elements to verify the service being billed:
1. Patient receiving the services
2. Practitioner providing the service
3. Type of service
4. Location of service
5. Date of the service
6. Time the service begins and ends.
:::

## EVV through Sandata

<details>
<summary>How to Set Up EVV Integration with Sandata</summary>

Before starting, request for your account manager to connect your Sandata account to Chorus.


 1. On Business Units for practitioners who will be capturing EVV, set "EVV Enabled" to yes.
 2. On Insurance Plans for which you’d like to verify sessions through EVV, add “EVV Required” as an [Insurance Plan Billing Requirement](../AdminSetup/InsurancePlan.md/#insurance-plan-billing-requirements).
 3. On the Insurance Plan:
    - Fill out the EVV Payer ID assigned by Sandata
    - Set the Medicaid toggle to Yes
 4. On patient coverages for Medicaid insurance plans, fill out the patient’s Medicaid ID
 5. On practitioner contacts, fill out the practitioner’s SSN. (Only users with [PII Access Role](../AdminSetup/SecurityRoles.md/#special-permissions) will be able to fill out the SSN).
 6. Notify your providers that EVV has been enabled and request that they allow location access when the Note app requests it upon pressing 'Start Session'.

</details>

When EVV is set up:
- When the practitioner presses Start Session:
    - The start time of their session is updated to match the exact time they pressed Start Session.
    - Their exact geolocation (latitude and longitude) is tracked.
- When the practitioner presses End Session:
    - The end time of their session is updated to match the exact time they pressed End Session.
    - Their exact geolocation (latitude and longitude) is tracked.

This applies to sessions where:
- The [insurance plan benefit](../AdminSetup/InsurancePlan.md/#insurance-plan-benefits) is set to Requires Patient Present.
- The patient's location that the session is scheduled at has location type "home" or "other".
- The provider is using a mobile device, allowed location access, and pressed start/end session on the day of the session.

### Correct EVV Transmissions to Sandata

An [EVV Manager](../AdminSetup/SecurityRoles.md/#special-permissions) can view, correct, and resubmit visits that were rejected or failed to transmit to Sandata.

On the EVV Transmission Dashboard, an EVV Manager can review EVV transmissions and take the relevant next steps:
<img src ="/img/EVVDashboard.png" width="600"/>

| **View**                     | **Description**                                                                                     |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------|
| Encounter Services Pending EVV Review     | Use this view to go through encounter services that need corrections.                               |
| Pending Review Visit Transmission Items   | No geolocation was tracked for this session, or the session was edited and resubmitted.            |
| Pending Review Contact Transmission Items | The Medicaid ID for the patient, or the SSN for the practitioner, is missing or invalid.           |
| Failed Visit Transmission Items           | The visit transmission was rejected by Sandata, see error message on transmission item for details.                                             |
| Failed Contact Transmission Items         | The contact transmission was rejected by Sandata, see error message on transmission item for details.                                                  |


<details>
<summary> How to correct and submit a Pending Review Visit Transmission </summary>

1. On the EVV Transmission Dashboard, open the encounter service pending EVV Review.
2. Fill out the exception you are acknowledging. Exception codes are defined by your state.
3. Fill out the Reason Code. Reason codes are defined by your state.
4. Fill out a Change Memo if your state requires one for the selected Reason code.
5. On the Transmission Item tab, open the transmission item and change the status from Pending Review to Awaiting Submission.

</details>

<details>
<summary> How to correct and submit a Pending Review Contact Transmission </summary>

1. On the EVV Transmission Dashboard, open the contact pending EVV Review.
2. Identify which field is missing (SSN on practitioner, or Medicaid ID on patient coverage) and fill it in.
3. On the EVV Transmission Dashboard, open the transmission item and change the status from Pending Review to Awaiting Submission.

</details>

## EVV Encounter Validation- Coming Soon!

<details>
<summary> Coming Soon- How to Set Up EVV for Encounter Validation </summary>

1. On Insurance Plans for which you’d like to verify sessions through EVV, add “EVV Required” as an [Insurance Plan Billing Requirement](../AdminSetup/InsurancePlan.md/#insurance-plan-billing-requirements).

</details>

When EVV is set up:
- When the practitioner presses Start Session:
    - The start time of their session is updated to match the exact time they pressed Start Session.
    - Their exact geolocation (latitude and longitude) is tracked.
- When the practitioner presses End Session:
    - The end time of their session is updated to match the exact time they pressed End Session.
    - Their exact geolocation (latitude and longitude) is tracked.

This applies to sessions where:
- The [insurance plan benefit](../AdminSetup/InsurancePlan.md/#insurance-plan-benefits) is set to Requires Patient Present.
- The patient's location that the session is scheduled at has location type "home" or "other".
- The provider is using a mobile device, allowed location access, and pressed start/end session on the day of the session.

[Learn when a session passes or fails for EVV validations.](../Scheduling/EncounterValdations.md/#visit-not-verified--evv-validations)