---
id: Authorization
title: Authorizations
---

# Authorizations 
Authorizations are the force behind the entire scheduling and billing workflow. Each encounter is validated against an authorization, to ensure it is scheduled correctly and will be able to be billed. 

## Create an Authorization  

To create a new Authorization, click 'New Authorization' on the Authorization subgrid (on a Patient Contact Form, under the 'Coverages and Auths' tab) or click the 'New' button on the Authorization main view.

**Authorization Information**
- *Patient* - prepopulated as the patient whose profile you are navigating from when entering the authorization.
- *Episode of Care* - prepopulated with the Active Episode of Care record for this Patient. 
- *Coverage* - Populated with the Active Coverage record with the latest End Date (or no End Date) for this Patient.
    - If a patient has more than one active coverage, ensure that the selected coverage is the one the authorization is covered by, otherwise select the correct coverage.
- *Authorization Number* - Enter the authorization number. This will be included on the claims created against this authorization.
- *Authorization Type* - Select whether this is an assessment authorization (authorizing an initial/follow-up assessment to be completed) or a service authorization. Only service authorizations will generate authorization workflows prior to expiration. [Read more about authorization workflows](../CRM/AuthWF.md).
- *Period Start Date* - Enter the start date that the authorization is valid from.
- *Period End Date* - The End Date is prepopulated to 6 months after the Start Date, and you can edit it as needed. This is the date the authorization is valid until. 
- *Practitioner* - Select the practitioner on the authorization.

Once the Authorization is saved, [Authorization Services](../Patients/AuthorizationServices.md) can be added. 

### Clone an Authorization
When an existing patient is reauthorized by the same coverage, click 'Clone Authorization' on the existing authorization to create a copy of the authorization and its services. After cloning the authorization, be sure to update the authorization # and date range on the authorization, as well as the amount authorized on each authorization service, to ensure they match what was authorized by the payer.

## Claim Settings

This section displays fields related to billing Claims.

- *Rendering Provider* - This field determines which practitioner should be populated as the Rendering Provider on the claim. Some Payers require that only a properly credentialed provider (the BCBA overseeing the case) should be entered as the Rendering Provider for all services. Other Payers require that the provider who actually rendered the services during the Encounter be entered. Since the Rendering Provider is Payer based, the Account Main Form has a field to determine how to set the Rendering Provider on a claim (see [Payer Claim Settings](../AdminSetup/Account.md/#claim-settings)), and all authorizations with this payer will default to the setting on the account. However, since it is possible to have exceptions, the ‘Rendering Provider’ field on the Authorization (and Authorization Service) allows you to change the setting for a specific authorization (or authorization service). Rendering Provider can be  set as one of these two options:
    1. Practitioner on Authorization - this fills the rendering provider box on the claim with the practitioner on the authorization.
    2. Practitioner on Encounter Service - this fills the rendering provider box on the claim with the practitioner on the encounter service.

:::note
Session Note exports will print the Supervising BCBA for the case based on the rendering provider on the Claim for that session.
- When the Practitioner on the Authorization changes mid-authorization, first bill the claims that the previous BCBA supervised, then update the Practitioner on the authorization before generating new claims.
- If necessary, claims can be [modified and resubmitted](../RCM/RCMworkflow.md/#correcting-claims) to adjust the rendering provider for sessions billed during this transition.
:::

- *Account Rendering Provider* - This field displays the Rendering Provider field from the Account Main Form, this way it is easy to see what the setting is on the Account. 
- *Billing Provider* - This field determines which practitioner or group practice should be set as the Billing Provider on the claim. By default, the billing provider is set to be the billing provider set up on the business unit. However, in some scenarios, you may want to have a different practitioner serve as the billing provider for some authorizations. Here you have the ability to select either the practitioner on the authorization, or a different practitioner to be the billing provider on all claims for this authorization. 

:::note
When a practitioner is selected as a billing provider, the ‘Provider Type’ field on their profile should be populated to ensure the claims are generated properly. 
:::

- *Business Unit Billing Provider* - When the Billing Provider field is set to 'Business Unit', this field displays the Billing Provider field from the Business Unit Main Form.
- *Billing Provider on Claim* - If the Billing Provider field is set to 'Select New Practitioner', this field displays the Billing Provider on Claim field. Any Practitioner can be selected as the Billing Provider. 

Every Claim has a *Billing Provider*. This is the Practitioner with the correct credentials for the services rendered.

## Pending Authorizations

If an authorization is pending approval from insurance, set the status reason to Pending Authorization. [Charge items](../Billing/ChargePeriods.md/#charge-item-statuses) for pending authorizations will not be able to be billed. Once insurance approves the authorization, either set the authorization status reason to active, or create a new authorization and move the relevant sessions to authorization services from the new authorization.

- *Reason Pending* - Track the reason why this authorization was not approved by the payer yet (late assessment submission, gap in coverage, gap in authorization, or coverage change).

## Authorization Validation

Once a practitioner is populated on the authorization, the authorization is validated to ensure the practitioner has all of the [required qualifications](../AdminSetup/InsurancePlan.md/#required-qualificationsrequiredqualifications) for the authorization services on the authorization that will be billed with the practitioner on the authorization as the rendering provider on the claim.

  <img src ='/img/authValidation.png' width='900'/> 

If an authorization service is being billed with the practitioner on the encounter service as the rendering provider on the claim, the encounter service will be validated instead. [Read more about encounter validations](../Scheduling/EncounterValdations.md/#practitioner-does-not-have-required-credentials).

## Search Authorizations

Select 'Authorizations' on the left site menu in the Clinical Area of the site menu to open the Authorizations Main Grid. The Authorizations Main Grid is a nested grid; upon clicking on the arrow on the Authorization record, the children Authorization Service records will display. The Authorizations Main Grid has 3 different views:
- The **Active Authorizations** (default) view displays all active Authorizations in the system. The view is sorted by the Period Start Date with the newer dates displaying first. 
- The **All Authorizations** view displays all Authorizations in the system. The view is sorted by the Period Start Date with the newer dates displaying first.
- The **Expiring Authorizations** view displays all active Authorizations in the system where the Period End Date is in the next 30 days. The view is sorted by the Period End Date with the older dates displaying first.
- The **Pending Authorizations** view displays all active Authorizations in the system where the Status Reason is Pending Authorization. The view displays the Reason Pending. 

The nested Authorization Service are sorted by the Start Date with the newer dates displaying first.
