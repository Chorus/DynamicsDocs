---
id: PayrollItems
title: Payroll Items
---

# Payroll

To access the payroll workflow, go to the Payroll area of the Sitemap.

Within the Payroll area, there is easy access to a view of practitioners, payroll items, and payroll periods.

## Encounter Service Payroll Items

When an encounter service is submitted in the Note app and a charge item is created for billing, an Encounter Service Payroll Item is also created for that encounter service. The encounter service payroll item is parented by a payroll item.

For group sessions, one payroll item will have many encounter service payroll items.


## Payroll Items

The pay amount for the encounter service is calculated based on the duration of the session and the practitioner's contracted hourly pay rate (or the biling amount for that service on the fee schedule on the practitioner's contract). [Read more about Practitioner Contracts](../Payroll/Contracts.md).

For group sessions, the largest duration from all encounter service payroll items, and the highest rate from payroll fee schedules are applied to the payroll item.

## Create a Payroll Item

In addition to payroll items created when encounter services are submitted, payroll items can be created manually (e.g., for reimbursements). You can create a new payroll item from the Payroll Items main grid in the Payroll area of the sitemap, or from the payroll items subgrid on the Payroll tab of a practitioner record.

- *Payroll Period* - select the [payroll period](#payroll-periods) this payroll item falls in (generally this will be the most recent open payroll period).
- *Practitioner* - select the practitioner to be paid.
- *Earning Code Type* - select the type of payment, either Reimbursement, Mileage, or Service.
    - A mileage payroll item can also be generated by populating the Mileage field on an [encounter service](../Scheduling/SingleEncounters.md/#encounter-services).
- *Pay Amount* - the amount to be paid, when the earning code type is Reimbursement.
- *Encounter Service* - the encounter service the mileage/service is relevant to, when the earning code type is Mileage or Service.
- *Quantity* - the amount of miles travelled, when the earning code type is Mileage.
- *Duration* - the duration of the service, when the earning code type is Service.
- *Rate* - the rate per hour the provider earns for the mileage/service, when the the earning code type is Mileage or Service.

Receipts or other relevant communications or attachments can be added to the *timeline* on the payroll item.


## Payroll Periods

A payroll period is a container for all payroll items. 

A payroll period will start with only the start date populated, and is considered 'open'. Any payroll items you create will be related to the open payroll period (when entering the Payroll Period field on the Payroll Item).

Once you add an end date to a payroll period, a new payroll period is created, with a start date for the day after the end date of the closed payroll period. Payroll items cannot be added to closed payroll periods.

[Export an Excel report](../Overview/ViewsCharts#export-to-excel) of all the payroll items in the closed payroll period to upload to your payroll system.
