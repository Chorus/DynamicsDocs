---
id: Opportunities
title: Opportunities
---

An Opportunity refers to the potential patient or practitioner who contacted the organization about being serviced / providing services. The opportunity is where the intake process is tracked.

<img src ="/img/opp.png" width="900"/>

## Create a Patient Opportunity

- The **Opportunity Info** tab is for general patient information, usually collected upon intake. This tab is divided into a few sections:
    - *Opportunity Info* - 
        - Patient - click 'New Contact' in the Patient field to create a new [patient contact](../Patients/Overview.md) for this opportunity. Enter the first name, last name, and gender if relevant. If this opportunity represents a patient who was previously serviced by the organization and is returning, choose from existing contacts.
        - Primary Related Contact - click 'New Contact' in the Primary Related Contact field to create the primary related contact you are in contact with regarding the patient (parent/s, other guardian, school personnel, etc.). Enter their contact information on the related contact form.
        - Related As - select how the related contact entered above is related to the patient.
        - Referred by - select the contact that referred the patient, or create a new contact.
        - Current Situation - take notes of the patient's current care setup and other information relevant for intake.
        - Client Need - take notes of the patient's care needs and other information relevant for intake.
        - Proposed Services - take notes of proposal that was made to the patient during intake or other ideas for patient care.
        - Service Location - select the patient's requested service location(s). This information will be stored on the patient's contact as well.
        - Preferred Service Times - select the patient's preferred service times (morning/afternoon/evening/weekend). This information will be stored on the patient's contact as well.

    - *Conditions* - click 'New Condition' to create the condition for the patient. The condition you create here will be available on the patient contact profile. [Read more about how to set up a patient conditions](../Patients/Conditions.md).

    - *Coverages* - click 'New Coverage' to create the coverage(s) for the patient. The coverage(s) you create here will be available on the patient contact profile. [Read more about how to set up a patient coverages](../Patients/Coverages.md).

    - *Stages* - track what stage this patient is at in the intake process by entering the following information:
        - Application Status - select whether the patient's application was Sent, is Pending Review, Approved, or Pending Parent Revisions.
        - Application Sent Date - enter the date the application was sent.
        - Application Received Date - enter the date the application was received.
        - Insurance Card - toggle on when the insurance card has been received.
        - Authorization Workflow - when the opportunity is first saved, an authorization workflow will be created to track the process for obtaining the patient's first authorization. [Read more about authorization workflows](../CRM/AuthWF.md).

    - *Timeline* - This is a running timeline of any communications or interactions with or regarding the patient. Emails, phone calls, encounters, tasks, and notes related to this patient are all tracked here. This timeline is also present with all entries on the patient's contact profile. You can also initiate emails, phone calls, and tasks directly from the timeline, and the details will be automatically populated. Click the ‘+’ button to add a communication log to the timeline.

- The **Application** tab is for documenting information from the patient's application. 

- The **Authorization Workflow** tab is for tracking the process for obtaining this patient's first authorization. [Read more about authorization workflows](../CRM/AuthWF.md).

- The **Files** tab is for uploading patient intake documents such as insurance card, application, or other relevant documents. These documents will be available on the documents subgrid on the patient contact profile.

### Patient Opportunity Workflow

Patient Opportunities have 7 stages:
1. Prospect
2. Application Pending
3. Assessment Authorization
4. Assessment
5. Assessment Review
6. Service Authorization
7. Completed

A patient opportunity is created at the 'Prospect' stage. 

Once an application has been sent to the patient to complete, enter the Application Sent Date and click 'Next Stage' to move the opportunity to the 'Application Pending' stage.

Once the application has been received and approved, the remaining stages of the opportunity take place on the authorization workflow. [Read more about authorization workflows](../CRM/AuthWF.md).


## Create a Practitioner Opportunity
- The **Opportunity Info** tab is for general practitioner information, usually collected upon intake. This tab is divided into a few sections:
    - *Opportunity Info* - 
        - Practitioner - click 'New Contact' in the Practitioner field to create a new [practitioner contact](../Practitioners/BasicInfo.md) for this opportunity. Enter the first name, last name, and contact information. If this opportunity represents a practitioner who was previously employed by the organization and is returning, choose from existing contacts.
        - Provider NPI Number - the NPI number populated on the practitioner contact will display on the opportunity.
        - Proposed Employment - take notes of proposal that was made to the practitioner during intake or other ideas for practitioner service delivery.

    - *Practitioner Qualifications* - click 'New Practitioner Qualification' to create qualifications for the practitioner. The qualifications you create here will be available on the practitioner contact profile. [Read more about practitioner qualifications](../Practitioners/Qualifications.md).

    - *Stages* - track what stage this practitioner is at in the intake process by entering the following information:
        - Application Status - select whether the practitioner's application was Sent, is Pending Review, or Approved.
        - Application Sent Date - enter the date the application was sent.
        - Application Received Date - enter the date the application was received.

    - *Timeline* - This is a running timeline of any communications or interactions with or regarding the practitioner. Emails, phone calls, encounters, tasks, and notes related to this practitioner are all tracked here. This timeline is also present with all entries on the practitioner's contact profile. You can also initiate emails, phone calls, and tasks directly from the timeline, and the details will be automatically populated. Click the ‘+’ button to add a communication log to the timeline.


### Practitioner Opportunity Workflow

Practitioner Opportunities have 4 stages:
1. Prospect
2. Application Pending
3. Role Pending
4. Completed

A practitioner opportunity is created at the 'Prospect' stage. 

Once an application has been sent to the practitioner to complete, enter the Application Sent Date and click 'Next Stage' to move the opportunity to the 'Application Pending' stage.

Once the application has been received and approved, the practitioner's qualifications should be entered before completing the opportunity. Select one of the practitioner's qualifications on the 'Role Pending' stage and click 'Next Stage' to complete the opportunity.

## Search Opportunities

Select 'Opportunities' on the site menu in the CRM Area to open the Opportunity Main Grid. The Opportunity Main Grid has 6 views.
- All Opportunities
    - The All Opportunities view displays all the opportunities in the system. This includes Active and Inactive records. (This is helpful when an opportunity is lost and their record is deactivated but later decides to reapply. You can reactivate their opportunity record from this view.)
- Open Patient Opportunities
    - The Open Patient Opportunities view displays patient opportunity records that are not completed.
- Open Practitioner Opportunities
    - The Open Practitioner Opportunities view displays practitioner opportunity records that are not completed.
- Completed Patient Opportunities
    - The Completed Patient Opportunities view displays patient opportunity records that were completed.
- Completed Practitioner Opportunities
    - The Open Practitioner Opportunities view displays practitioner opportunity records that were completed.
- My Open Opportunities
    - Opportunities created by the user viewing the records that are not completed.

## Close Opportunities

- **Patient Opportunities** are closed as 'Won' when the authorization is populated on the [authorization workflow](../CRM/AuthWF.md) and the workflow is marked as Finished.

  <img src ='/img/wonopp.png' width='600'/> 

- **Practitioner Opportunities** are closed as 'Won' when the practitioner is given a qualification and the workflow is marked as Finished.
- Click 'Close as lost' to close patient/practitioner opportunities as lost. A description of why the opportunity was lost can be recorded.

  <img src ='/img/closeopp.png' width='600'/> 