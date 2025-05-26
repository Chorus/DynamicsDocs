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
<detail>
<summary> Coming Soon- How to Set Up EVV Integration with Sandata </summary>
Before starting, request for your account manager to connect your Sandata account to Chorus.

1. On Business Units for practitioners who will be capturing EVV, set "EVV Enabled" to yes.
2. On Insurance Plans for which you’d like to verify sessions through EVV, add “EVV Required” as an Insurance Plan Billing Requirement.
3.	On the Insurance Plan:
    - Fill out the EVV Payer ID assigned by Sandata
    - Set the Medicaid toggle to Yes
4.	On patient coverages for Medicaid insurance plans, fill out the patient’s Medicaid ID
5.	On practitioner contacts, fill out the practitioner’s MMIS
6. Notify your providers that EVV has been enabled and request that they allow location access when the Note app requests it upon pressing 'Start Session'.

</detail>

When EVV is set up:
- When the practitioner presses Start Session:
    - The start time of their session is updated to match the exact time they pressed Start Session.
    - Their exact geolocation (latitude and longitude) is tracked.
- When the practitioner presses End Session:
    - The end time of their session is updated to match the exact time they pressed End Session.
    - Their exact geolocation (latitude and longitude) is tracked.

This applies to sessions where:
- The [insurance plan benefit](../AdminSetup/InsurancePlan.md/#insurance-plan-benefits) is set to Requires Patient Present.
- The location type of the patient-specific location this session takes place at is home or other.
- The provider is using a mobile device, allowed location access, and pressed start/end session on the day of the session.

### Correct EVV Transmissions to Sandata
Comnig Soon!

## EVV Encounter Validation- Coming Soon!

<detail>
<summary> Coming Soon- How to Set Up EVV for Encounter Validation </summary>
1. On Insurance Plans for which you’d like to verify sessions through EVV, add “EVV Required” as an Insurance Plan Billing Requirement.
</detail>

When EVV is set up:
- When the practitioner presses Start Session:
    - The start time of their session is updated to match the exact time they pressed Start Session.
    - Their exact geolocation (latitude and longitude) is tracked.
- When the practitioner presses End Session:
    - The end time of their session is updated to match the exact time they pressed End Session.
    - Their exact geolocation (latitude and longitude) is tracked.

This applies to sessions where:
- The [insurance plan benefit](../AdminSetup/InsurancePlan.md/#insurance-plan-benefits) is set to Requires Patient Present.
- The location type of the patient-specific location this session takes place at is home or other.
- The provider is using a mobile device, allowed location access, and pressed start/end session on the day of the session.

[Learn when a session passes or fails for EVV validations.](../Scheduling/EncounterValdations.md/#visit-not-verified--evv-validations)