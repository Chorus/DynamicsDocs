---
id: AC 4.0.5
title: Autism Care 4.0.5
---
# Autism Care 4.0.5 - July 2025

- You can now choose whether a qualification is needed for performing the session or for billing the claim — or both. **What You Need to Do**:
    - Review each [insurance plan benefit’s Required Qualifications](../AdminSetup/InsurancePlan.md/#required-qualificationsrequiredqualifications). Set the Requirement Type to:
        - *Encounter* – needed for the provider to perform the session (e.g., ‘RBT’ for 97153)
        - *Claim* – needed for the provider to be listed as the rendering provider on a claim (e.g., insurance credentials)
        - Both – needed for both performing the session and billing
    - Update each insurance plan benefit so it includes qualifications for both sessions and claims.
    :::note Example
    Previously, you may have only listed RBT as a required qualification for 97153. Now, add any other qualifications the practitioner must have to be listed as the Rendering Provider on the claim — and set those as Claim Requirements.
    :::
    - **How it Works Today**: Session validation now checks for Encounter qualifications only.
    - **Coming Soon**: Claim validation will check the rendering provider has the required Claim qualifications.
- You can now [designate a Rendering Provider for claims based on existing care team assignments](../Patients/Authorization.md/#rendering-provider-assignments), helping your team handle mid-auth restaffing and ensuring rendering providers performed services. 

<details>
<summary> How to designate Rendering Providers through Care Team Assignments</summary>

1. Open an Authorization.
2. Go to the Care Team Assignments tab.
3. Select the care team assignment for the practitioner who should be listed on the claim.
4. Click “Set as Claim Rendering Provider.” (only Authorization Admins have this permission)

You’ll see the Rendering Provider Assignments on the main page of the authorization, and a banner if that practitioner is missing any required claim qualifications.

With this set-up, if there is a mid-auth change to who should be the rendering provider on the claim, simply place an end date on the previous care team assignment and set the care team assignment for the new practitioner to be a Rendering Provider Assignment as well.

</details>


- **Coming Soon**: watch the webinar recording [here](https://chorusdevs2-my.sharepoint.com/:v:/g/personal/mleff_chorus_cloud/EcExRZ3KsHRKpEWNkyxuVv0BB0RWKxT1vrVzaCtp1YjKEg?e=qsTxCE&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D) to get the full preview of what’s coming.
    - The Claim Settings section (rendering provider = practitioner on auth/encounter service) will be removed.
    - The Rendering Provider on a claim will be:
        - The practitioner who performed the service (if they meet the required Claim qualifications)
        - If not qualified, the system will use the practitioner from the Rendering Provider Assignment that matches the date of service.
    - **Start setting up your Rendering Provider Assignments now to prepare for the upcoming change.**

- [EVV Encounter Validation](../Scheduling/EncounterValdations.md/#visit-not-verified--evv-validations): Boost compliance and billing accuracy with built-in EVV (Electronic Visit Verification) validation. Our built-in EVV validation checks:
    - The practitioner clicked “Start Session” and “End Session” in Note, and did not manually edit the times (the practitioner is billing for the time they tracked at their session).
    - The geolocation of the session was tracked and is within the allowed radius of the patient’s address, which you can configure on the patient’s Business Unit.
    You can monitor and override EVV Validation Failures from the EVV Failures view.

