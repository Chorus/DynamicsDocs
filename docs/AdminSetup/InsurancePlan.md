---
id: InsurancePlan
title: Insurance Plans
---
# Insurance Plans
Insurance Plans are the various options each insurance provider offers. Add one insurance plan for each of the different plans that you will be accepting for that payer. Each insurance plan can have its own fee schedule to reflect the billing differences for that plan.

The insurance plans you create will show when setting up patient [coverages](../Patients/Coverages.md).

- *Payer* – The payer of this plan
- *Name* – The plan name

Once the Insurance Plan record is saved, you can add Insurance Plan Benefits.

## Insurance Plan Benefits
In each insurance plan, add insurance plan benefits for the services covered by this plan. Here, you will define the payer's requirements that need to be met for this service to be rendered. Insurance plan benefits control how encounters can be scheduled, serviced, and billed. 

The following fields should be set on an Insurance Plan Benefit:

- *Insurance Plan* – Select the Insurance Plan that this Insurance Plan Benefit belongs to.
- *Service* – Select the [Healthcare Service](HealthcareService.md) that best fits this Insurance Plan Benefit. 
:::note
The Service here will control the behavior of the session in the Note app, for each encounter scheduled against this Insurance Plan Benefit. [Learn more about Healthcare Service Types](HealthcareService.md).
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


### Required Qualifications
In each Insurance Plan Benefit, add Required Qualifications- the credentials that are required by this plan for this service. On each required qualification, you can choose from [qualification definitions](../AdminSetup/QualificationDefinition.md) in your system, and choose whether that qualification is required to perform the session (Encounter), or required in order to be listed on the claim as the rendering provider (Claim). To streamline compliance, add claim required qualifications to every insurance plan benefit, and encounter required qualifications when relevant.

<img src ="/img/ReqType.png" width="800"/>

Each required qualification should be added individually. If a required qualification can be interchanged with another qualification (i.e. BCBA and BCaBA), they can be added as one required qualification, which will be read as requiring either one or the other of the qualifications listed.

- [Encounters are validated](../Scheduling/EncounterValdations.md/#practitioner-does-not-have-required-credentials) to ensure the practitioner has the required encounter qualifications for this service code.
- [Claims are validated](../Billing/Claims.md/#claim-validations) to ensure the practitioner has the required claim qualifications for this service code.

You can review all of your insurance plan benefit required qualifications on one view on the [Qualifications Dashboard](../Overview/Dashboards.md)

## Insurance Plan Fee Schedules

Insurance Plan Fee Schedules connect an insurance plan to a fee schedule for each service code (which will override any [business unit fee schedules](../AdminSetup/FeeSchedules.md) for that service code).

1. On the insurance plan, go to Related > Insurance Plan Fee Schedules.
2. Click 'New Insurance Plan Fee Schedule'.
3. Choose an existing fee schedule, or type enter then click '+ New' to create a new fee schedule.
4. Enter the Start Date of the Fee Schedule. The end date can be left blank until the payer's rates are updated.

:::note
Claim billing and expected amounts will be calculated based on the insurance plan fee schedule whose date range covers the date of service on the claim.
If placing an end date on an insurance plan fee schedule, be sure to add a new insurance plan fee schedule to cover sessions after the ended fee schedule.
:::


## Insurance Plan Billing Requirements

Insurance Plan Billing Requirements control how Claims for an insurance plan are created, or other insurance plan specific requirements (session note settings, etc.).

<details>
<summary> How to add an Insurance Plan Billing Requirement</summary>

1. In the Setup area, go to Insurance Plans on the site menu and open the insurance plan you'd like to add a requirement to.
2. Click 'Related' and select Insurance Plan Billing Requirements
3. Click 'New Insurance Plan Billing Requirement'
4. Fill out the rule by selecting from existing billing rules.

</details>

:::note
A modifier will only be automatically added to a claim line if the insurance plan billing requirement is set up, **and the modifier is added to the fee schedule item for the applicable service code** on the [insurance plan fee schedule](../AdminSetup/FeeSchedules.md/#modifiers)
:::

Select from existing billing rules:

| **Billing Rule**                                                                                           | **Description**                                                                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Modifier 95 for services provided via telehealth                                                                  | 95 modifier is added for services conducted via telehealth.                                                                                                                                           |
| Modifier GT for all telehealth services                                                                           | GT modifier is added for services conducted via telehealth.                                                                                                                                               |
| Modifier HO for BCBA services and HM for BT services | HO modifier is added for services done by a practitioner with BCBA qualification. HM modifier is added for services done by a practitioner with Behavior Technician qualification. |
| Modifier HO BCBA services with GT via telehealth, U7 for out-of-clinic and U6 for in-clinic                      | HO modifier is added for services done by a practitioner with BCBA qualification. GT modifier is added for services conducted via telehealth. U7 modifier is added for services done at a non-office location. U6 modifier is added for services done at an office location.                                                                                              |
| Modifier U5 for BT services with GT via telehealth, U7 for out-of-clinic and U6 for in-clinic                     | U5 modifier is added for services done by a practitioner with Behavior Technician qualification. GT modifier is added for services conducted via telehealth. U7 modifier is added for services done at a non-office location. U6 modifier is added for services done at an office location.                                                                                                   |
| Modifier U3 for BCBA                                                                                              | U3 modifier is added for services done by a practitioner with BCBA qualification.                                                                                                                                                                 |
| Modifier HN for BCaBA | HN modifier is added for services done by a practitioner with BCaBA qualification. |
| Modifier XP for BCaBA | XP modifier is added for services done by a practitioner with BCaBA qualification. |
| Modifier U1                                                                                                       | U1 modifier is added.                                                                                                                                                                        |
| Coming Soon: Modifier XE                                                                                                       | XE modifier is added to the last claim line on the claim when there are multiple claim lines with the same patient, service code, date of service, but different places of service, on the same claim. (This rule works in conjunction with the 'don’t split by place of service' rule.)                                                                                                                                                                   |
| Coming Soon: Modifier 76                                                                                                       | 76 modifier is added to the last claim line on the claim when there are multiple claim lines with the same patient, service code, date of service, but different places of service, on the same claim. (This rule works in conjunction with the 'don’t split by place of service' rule.)                                                                                                                                                                        |
| Coming Soon: Modifier 77, Don't split by Rendering Provider                                                                                                       | 77 modifier is added to the last claim line on the claim when there are multiple claim lines with the same patient, service code, date of service, place of service, but different rendering providers on the same claim.                                                                                                                                                                         |
| POS 02 for all telehealth services                                                                                | Place of service 02 for all service conducted via telehealth.                                                                                                                                         |
| POS 10 for all telehealth home and 02 for all other                                                               | Place of service 10 for services conducted via telehealth at a home location, and place of service 02 for services conducted via telehealth at a non-home location.                                                                                                                       |
| Referring provider required                                                                                       | Referring provider must be included on the claim.                                                                                                                                                  |
| Rendering provider taxonomy code required                                                                         | Rendering provider taxonomy code must be included on the claim.                                                                                                                                    |
| Single claim item per session required                                                                            | Only one claim item per session is allowed.                                                                                                                                                        |
| Include the time portion on claim lines                                                                           | Claim lines will include service date and time.                                                                                                                                                         |
| Split claim lines with different POS/Modifier combinations                                                        | Claim lines for the same patient, rendering provider, date, service, and place of service, but different modifiers, will not be included on the same claim.                                                                             |
| Don't split by POS                                                                                                | Claim lines for the same patient, rendering provider, date, and service, but different places of service will be included on the same claim.                                                                                          |
| EVV Required                                                                                                      | Sessions will track exact start/end time, latitude, and longitude when practitioner presses start/end session in Note for services requiring patient present and location type is home or other.    |


