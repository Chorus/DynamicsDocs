---
id: Leads
title: Leads
---
**Coming Soon!*

Leads are potential patients or practitioners captured from automated sources like website forms or ad responses. They help manage large volumes of inquiries before qualification. Unlike opportunities, which track confirmed cases moving toward onboarding, Leads are for early-stage interest.

<img src ="/img/leadfunnel.png" width="850"/>

<details>
<summary>How to set your forms to create leads in CRM:</summary>

    1. Reach out to your account manager for your Chorus API key
    2. Configure your form to send a GET request to the following endpoint upon submission:
            Api.chorus.cloud/lead/create?subscriptionkey ={APIKEY}&firstName={FirstName}&lastName={LastName}&primaryContactFirstName={PrimaryContactFirstName}&primaryContactLastName={PrimaryContactLastName}&email={EmailAddres}&phone={PhoneNumber}&addressState={State}&message={Description/Message}&address1_postalcode={ZipCode}&hasDiagnosis={HasAutismDiagnosis}&marketingSourceId={MarketingSourceId}
        The APIKEY should be replaced with the api key provided by your organization, and the Marketing Source ID should be set to the ID of the [marketing source](../AdminSetup/Definitions.md/#marketing-source-definitions) you'd like listed on the lead/opportunity.

</details>

## Patient Leads
Collect demographics, referral, diagnosis, and insurance info. 
Send applications, then qualify to an opportunity when you have enough information to proceed. 
Disqualify the lead if the patient is not proceeding or not qualified for services.


## Practitioner Leads
Gather details and schedule interviews. Qualify when moving forward (with Candidate Review or Offer) or disqualify if not a fit.