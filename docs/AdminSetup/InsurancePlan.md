---
id: InsurancePlan
title: Insurance Plans
---
# Insurance Plans
Insurance Plans are the various options each insurance provider offers. Add one insurance plan for each of the different plans that you will be accepting for that payer. Each insurance plan can have its own fee schedule to reflect the billing differences for that plan.

The insurance plans set up here, will be the available options when setting up your patients’ coverage records.

- *Payer* – The payer of this plan
- *Name* – The plan name

Once the Insurance Plan record is saved, you can add Insurance Plan Benefits.

## Insurance Plan Benefits
In each insurance plan, add insurance plan benefits for the services covered by this plan. Here, you will define the payer's requirements that need to be met for this service to be rendered. Insurance plan benefits control how encounters can be scheduled, serviced, and billed. 

The following fields should be set on an Insurance Plan Benefit:

- *Insurance Plan* – Select the Insurance Plan that this Insurance Plan Benefit belongs to.
- *Service* – Select the [Healthcare Service](HealthcareService.md) that best fits this Insurance Plan Benefit. 
:::note
The Service here will control the behavior of the session in the Note app, for each encounter scheduled against this Insurance Plan Benefit. [Read more about Healthcare Service Types](HealthcareService.md).
:::
- *Procedure Code* – Select the procedure code that this service should be billed with. See [Product Codes](#product-codes).
- *Requires Assignment* – Set as ‘Yes’ if you want to restrict scheduling encounters against this service code without an assignment, otherwise set as ‘No’.
- *Requires Patient Present* – Set as ‘Yes’ if you want to restrict scheduling the patient on another encounter at the same time as an encounter for this service is taking place.
- *Unit of Measure* – The number of minutes that a single unit of this service consists of.
- *Minimum Units Required* – The minimum units required to schedule an encounter for this service.
- *Maximum Units Allowed* – The maximum units allowed to schedule for an encounter for this service.
- *MUE Limit* - The maximum units allowed to schedule for this service for a patient on one day.

Once the Insurance Plan Benefit record is saved, the Required Qualifications can be added.

### Product Codes
This is the list of products – service codes – that you will be providing to your clients. These will be carried over to your claims when you bill insurance payers.

Additional product codes can be set up for your organization by support. 


### Required Qualifications{#RequiredQualifications}
In each Insurance Plan Benefit, add Required Qualifications- the credentials that are required by this plan for this service. On each required qualification, you can choose from [qualification definitions](../AdminSetup/QualificationDefinition.md) in your system, and choose whether that qualification is required to perform the session (Encounter), or required in order to be listed on the claim as the rendering provider (Claim). To streamline compliance, add claim required qualifications to every insurance plan benefit, and encounter required qualifications when relevant.

<img src ="/img/ReqType.png" width="800"/>

Each required qualification should be added individually. If a required qualification can be interchanged with another qualification (i.e. BCBA and BCaBA), they can be added as one required qualification, which will be read as requiring either one or the other of the qualifications listed.

[Encounters are validated](../Scheduling/EncounterValdations.md/#practitioner-does-not-have-required-credentials) to ensure the practitioner has the required encounter qualifications for this service code.

**Coming Soon**: Claims will be validated to ensure the practitioner has the required claim qualifications for this service code.


## Insurance Plan Fee Schedules

To create fee schedules specific to an insurance plan (which will override any [business unit fee schedules](../AdminSetup/FeeSchedules.md) for that service code), go to Related > Insurance Plan Fee Schedules on the Insurance Plan, and create a new Insurance Plan Fee Schedule.


## Insurance Plan Billing Requirements

Insurance Plan Billing Requirements control how Claims for an insurance plan are created, or other insurance plan specific requirements (session note settings, etc.).

<details>
<summary> How to add an Insurance Plan Billing Requirement</summary>

1. In the Setup area, go to Insurance Plans on the site menu and open the insurance plan you'd like to add a requirment to.
2. Click 'Related' and select Insurance Plan Billing Requirements
3. Click 'New Insurance Plan Billing Requirement'
4. Fill out the rule by selecting from existing billing rules.

</details>

Select from existing billing rules:
- Modifier 95 for services provided via telehealth
- Modifier GT for all telehealth services
- Modifier 93 audio-only telehealth
- Modifier FQ audio-only telehealth
- Modifier HO BCBA services with GT via telehealth, U7 for out-of-clinic and U6 for in-clinic
- Modifier U5 for BT services with GT via telehealth, U7 for out-of-clinic and U6 for in-clinic
- Modifier U3 for BCBA
- Modifier U1
- POS 02 for all telehealth services
- POS 10 for all telehealth home and 02 for all other
- Referring provider required
- Rendering provider taxonomy code required
- Single claim item per session required
- Include the time portion on claim lines
- Split claim lines with different POS/Modifier combinations: claim lines that have different POS/modifier combinations will not be grouped together, even for the same service/same day.
- Don't split by POS: claim lines that have different places of service will be grouped together if they would otherwise be grouped.
- EVV Required: sessions for insurance plans with this billing requirement will track the exact start and end time, latitude, and longitude when the practitioner presses start/end session in Note on services where the patient is required to be present and the location type is home or other.

:::note
A modifier will only be automatically added to a claim line if the insurance plan billing requirement is set up, and the modifier is added to the fee schedule item for the applicable service code on the [insurance plan fee schedule](../AdminSetup/FeeSchedules.md/#modifiers)