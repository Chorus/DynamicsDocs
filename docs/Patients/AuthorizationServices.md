---
id: AuthorizationServices
title: Authorization Services
---

# Authorization Services 
Authorization Servies track the number of hours/units that were authorized per service. 

##  Create an Authorization Service

To create a new Authorization Service, click 'New Authorization Service' on the Authorization Services subgrid (on an Authorization Form) to open the Authorization Service Quick Create.

**Authorization Information**
- *Authorization Name* - prepopulated with the Authorization you are adding this service to.
- *Service Code* - Select the Insurance Plan Benefit for the authorized service. All scheduling for this authorization service will be validated against the rules set up on this insurance plan benefit.  This option-set displays  Insurance Plan Benefits within the plan that the authorization is covered under.
- *Start Date* - prepopulated with the Authorization Period Start Date and can be changed if necessary.
- *End Date* - prepopulated with the Authorization Period End Date and can be changed if necessary.

**Authorized Units**
- *Authorized As* - Choose how the hours/units were authorized – Hours per week, Hours per month, Units per week, Units per month, or Total units. 
    - This affects how the [Authorization Service Utilization](../Scheduling/Utilization.md/#authorization-service-utilizations) will be created.
- *Amount Authorized* - Enter the number or hours/units authorized for this service, according to the 'Authorized As' selected above.
- *Validate Encounters* - Select how you want the validations for this service to be calculated. They can either be validated as authorized, meaning that sessions exceeding the amount of hours/units for the frequency selected will be rejected. Or, they can be validated by total units for the authorization period, meaning that sessions exceeding the amount of hours/units for the frequency selected will only be rejected if it exceeds the total amount of hours/units for the entire authorization period. The selection here affects how the authorization service utilization report calculates and displays utilization.

## Edit an Authorization Service

Once there are related Encounter Services created against an Authorization Service, the following fields are locked to prevent the Encounter Service from becoming invalid.

- Service Code
- Start Date
- Amount Authorized
- Authorized As

If needed, update the end date on this record, and create a new Authorization Service with the updated information.

A user with the [Authorization Admin](../AdminSetup/SecurityRoles.md/#special-permissions) security role will have edit access to these fields. 
<details>
<summary> Authorization Admins should consider the following when editing Authorization Services:</summary>

- Editing the start date: 
    - Revalidate related encounter services from before the updated start date. 
    - Consider moving sessions from before the updated start date to a different authorization service if one applies. 
    - If there were sessions outside of the authorized date range that were already submitted, notify the billing team to take the relevant steps to correct or void the claim.

- Editing the service code: 
    - The service code will be unlocked for Auth Admins if all sessions for this authorization service are still scheduled. Keep in mind that updating the service code will affect all sessions for this authorization service. Revalidate related encounter services so they are validated against the new service code's requirements.
    - Once there are sessions past scheduled, the service code will be locked to prevent changing the service code on a session that the practitioner already started. If needed, update the end date on this authorization service, and create a new one with the updated information.

- Editing the authorized units:
    - Revalidate related encounter services.
    - If there were sessions that are now over the authorized units that were already submitted, notify the billing team to take the relevant steps to correct or void the claim.

</details>