---
id: AC 4.0.2
title: Autism Care 4.0.2
---

# Autism Care 4.0.2 - May 2025

- 📊Robust Utilization Dashboard: Stay on tune with your authorization utilization rates with a flexible, visual utilization report that empowers you with weekly, monthly, or total utilization monitoring. With robust filtering options, you can track, analyze, and optimize usage, ensuring your resources are always in harmony with your needs. [Learn about the utilization dashboard](../Overview/Dashboards.md/#utilization).

- [Supervision Ratios Report](../Overview/Dashboards.md/#supervision-ratios) Enhancements:
    - Selecting a BCBA filters the report to patients who currently have a Supervising assignment with that BCBA, even if no supervision sessions have been held yet.
    - All direct treatment hours for the patient are displayed, even when filtered by BCBA.
    - Filter by multiple session statuses (e.g., exclude canceled sessions).
    - Only active patients appear in the report.

- [Clone Authorizations](../Patients/Authorization.md/#clone-an-authorization)! Save time on repetitive tasks with the new Clone feature for Authorizations! If a patient is reauthorized, simply click Clone on the past authorization to create a copy of the authorization and its services. Update the auth number, and authorized amounts/dates on authorization services as needed.

- Organization-wide Calendar View: Take advantage of the "Calendar View" on Encounter Services to see a full picture of services conducted by day, week, or month for the entire organization, or for a specific selection of patients/practitioners based on your filters.
    1. Go to Encounter Services on the sitemap.
    2. In the top left corner, click Show As.
    3. Switch to Calendar View.

    Want to see a specific care team’s sessions, but not the whole organization? Click Edit Filters and filter by encounter patient/practitioner to see sessions for multiple contacts on the same view.

- Streamlined Bulk Edits on Encounter Services:
    - Authorization service and care team assignment can now be edited in bulk on encounter services.
    - If some of the selected sessions were already submitted, edits will only apply if the service code is the same as the original submission.
    - If a session has already been billed, the charge item status will be set to Awaiting Resubmission, ensuring billers can review any changes in authorization numbers or coverage.

- [Session Note Export](../Patients/Overview.md/#export-patient-session-notes) Updates:
    - Zeros on behavior objectives are now included.
    - The “Other Individuals Present” section will no longer print when left blank.

- Address search on [locations](../AdminSetup/Location.md): Quickly and accurately enter patient addresses with the new address search feature. Latitude and longitude will also be saved, preparing for the upcoming release of [Electronic Visit Verification](../AdminSetup/EVVSetUp.md) (EVV).


- [Authorization Workflow](../CRM/AuthWF.md) Updates:
    - Patients can now have more than one active authorization workflow (for different coverages).
    - Clicking Finish on an authorization workflow sets its status to Completed and inactive.

- Other Enhancements:
    - View the status reason of a practitioner’s qualifications directly on their profile.
    - Care Team Participant end dates are extended when a new care team assignment is created for the patient/practitioner pair.
    - Charge item statuses update promptly corresponding to encounter service status updates.
    - Episode of care errors minimized. Episode of care auto-populates on care team assignment