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

EVV is captured on sessions that meet the following criteria:
- The EVV Billing Requirement is set up against the insurance plan for this patient's coverage. [Read how to add an insurance plan billing requirement](../AdminSetup/InsurancePlan.md/#insurance-plan-billing-requirements).
- The [insurance plan benefit](../AdminSetup/InsurancePlan.md/#insurance-plan-benefits) is set to Requires Patient Present.
- The location type of the patient-specific location this session takes place at is home or other.
- The provider is using a mobile device, allowed location access (the app requests access to their location), and pressed start/end session on the day of the session. (Currently, start/end session only shows on direct care sessions. Coming soon for all service types that require EVV!)

When the above criteria are met:
- When the practitioner presses Start Session:
    - The start time of their session is updated to match the exact time they pressed Start Session.
    - Their exact geolocation (latitude and longitude) is tracked.
- When the practitioner presses End Session:
    - The end time of their session is updated to match the exact time they pressed End Session.
    - Their exact geolocation (latitude and longitude) is tracked.


**Coming Soon:** EVV Integration with Sandata, and EVV Encounter Validations
