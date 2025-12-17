---
id: Account
title: Accounts
---
## Payer Accounts
A payer account represents a payer that will be reimbursing your organization for services you provide to clients. Essentially, these are the insurance companies that your organization works with. 

The following fields and settings on an account should be set:

- *Account Type* – Payer
- *Name* – The payer’s name
- *Phone, Fax, Website, Address*

Once the Payer account is saved, you can add [Insurance Plans](../AdminSetup/InsurancePlan.md) and [Required Patient Documents](../AdminSetup/).

### Ghost Payers
One generic payer account and insurance plan ("ghost insurance") can be created per organization to use in the case where an organization elects to service a patient that has not (yet) been authorized for services by their insurance. 

Since all services that are scheduled for a patient are validated against an authorization, and ‘Plan’ is a required field on an authorization, this generic plan would enable the patient to be serviced under the organization’s authorization.

For example, when a BCBA was late in submitting a reassessment, causing a delay in receiving the patient’s reauthorization, the organization may decide to continue servicing the patient for those days (even though they won’t be able to bill insurance), to fill the gap between authorizations. In such a case, an authorization would be created with the organization as the authorizing payer/plan, for the exact services that the organization is authorizing, and encounters can be scheduled for the patient, against this authorization. 

Other scenarios can include a patient that has a lapse in coverage while switching from one payer and plan to another. 

## Referral Accounts
**Coming Soon!**
A referral account is an organization that refers patients or practitioners to your organization. You'll be able to associate opportunities to referral accounts to help you measure growth based on referral partnerships.

- *Account Type* – Referral
- *Name* – The organization's name
- *Category* - The type of organization it is (e.g. care management association, college, etc.). To add a category, set up custom [referral account category definitions](../AdminSetup/Definitions.md/#referral-category-definitions).
- *Phone, Fax, Website, Address*
- *Primary Contact* - choose the primary contact for the organization. 

Once the Referral account is saved, you can add specific contacts from the organization who your organization communicates with. These contacts can be set to contact type "External Contact". You'll be able to associate opportunities to the individual at the referral account who referred that patient/practitioner.

