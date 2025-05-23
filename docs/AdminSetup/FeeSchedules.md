---
id: FeeSchedules
title: Fee Schedules
---

# Fee Schedules

Fee schedules are price lists where you can track a billing amount and an expected amount for the services you provide. 

- *Name* - Name the fee schedule for easy reference.
- *Fee Schedule Type* - Choose whether this fee schedule is for Billing or Payroll.

Fee schedules where Fee Schedule Type is 'Billing' can be related to a [Business Unit](../AdminSetup/BusinessUnit.md) or to a specific [Insurance Plan](../AdminSetup/InsurancePlan.md).

Once the fee schedule is saved, Fee Schedule Items can be added.

## Fee Schedule Items

- *Product/Service* - the service code being billed.
- *Expected Amount* - the contracted rate.
- *Billing Amount* - included on the claim as the price per unit of this service.

Organizations can choose to bill with the contracted rate by keeping Expected and Billing Amounts the same, or leaving the Expected Amounts blank.

Organizations can also choose to use the same Billing Rates per service for all payers, by populating Billing Amount on the Business Unit Fee Schedule and payer-specific Expected amounts on [Insurance Plan Fee Schedules](../AdminSetup/InsurancePlan.md/#insurance-plan-fee-schedules).

## Modifiers

Modifiers are related to Fee Schedule Items to be included on the Claims for that service code.

To create a modifier, go to Related > Modifiers on the Fee Schedule Item, and create a new Modifier.

- *Name* - Name the modifier for easy reference, so schedulers and billers can know which modifier to add when scheduling or billing.
- *Modifier* - Choose from modifier codes. Additional modifier codes can be set up for your organization by support.
- *Order* - Enter the order number (1, 2, etc.) in which this modifier should appear on a claim, if the claim line has more than one modifier.
- *Billing Amount* - overrides the billing amount on the fee schedule when this modifier is included on a claim
- *Expected Amount* - overrides the expected amount when this modifier is included on a claim

Modifiers can be added to [encounter services](../Scheduling/SingleEncounters.md/#encounter-services) by schedulers, or to a charge item before the claim is submitted.

Modifiers will be automatically added to charge items / claim lines if they are included on both the fee schedule item for the service code they apply to, and the [insurance plan billing requirements](../AdminSetup/InsurancePlan.md/#insurance-plan-billing-requirements).

## Payroll Fee Schedules

Fee schedules where the Fee Schedule Type is Payroll are used to override a practitioner's contracted hourly rate with a specific rate per service or per patient.

For example, to set a higher rate for group treatment (97154), create a fee schedule item with the higher rate as the 'Billing Amount', and populate that fee schedule on the [practitioner contract](../Payroll/Contracts.md).

To set a different rate for a specific patient/practitioner:
1. Go to the fee schedule for this practitioner (the fee schedule populated on the practitioner contact). If there is no fee schedule for this practitioner yet, create a new one and populate it on the practitioner contract.
2. Create fee schedule items for the services that the practitioner provides. Enter the regular rate the practitioner recieves for those services as the billing amount.
3. On the Fee Schedule Item for the services that will have a different rate per patient, go to Related > Modifiers. Create a new modifier, and give it a meaningful name.
<img src ="/img/payrollmod.png" width="700"/>
4. Request a codeable concept for this modifier from support. (Support will create a codeable concept in system https://schemas.chorus.cloud/payrollmodifier.)
5. Enter the adjusted rate for this patient and this service as the billing amount on the modifier.
6. Now, any time a session is scheduled for this patient, practitioner, and service, select the modifier you created on the encounter service payroll modifiers field, or by going to Related Encounter Service Payroll Modifiers on the encounter service, creating a new encounter service payroll modifier, and selecting the modifier.




