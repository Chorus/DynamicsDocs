---
id: Location
title: Locations
---

# Locations
Locations are for tracking any addresses relevant to your organization, such as offices, schools, patient billing addresses, and more. 

**Patient-specific locations** can be created on patients for addresses that are only relevant to that patient. 

**General locations** can be created for locations that apply to the entire organization (offices, schools, etc.)

## Create a Location

Locations can be created from a patient's contact in the Clinical area, or from the Setup area.

- Clinical Area - On a [Patient](Patients/Overview.md) Contact record, on the Profile Info tab, in the 'Patient Addresses' section, click the 3 dots to display more options. Click 'New Location' to open the Location form and create a patient-specific location for this patient.
- Setup Area - In the setup area, go to Locations on the left site menu. Click 'New Location' to create a new location. Leave the patient field blank to make it a general location that is available to the entire organization. 

The **Address Information** section contains the basic information to differentiate locations. This section has the following fields. 
- *Description* - This field can be populated to give the location a clear name for easy reference (e.g., Steven's summer home). 
- *Location Type* - This field defines the location type – home, school, office, or other. On the claim, the place of service code will be based on the value in this field, for all encounters taking place at this address.

    | **Location Type** | **Place of Service Code**                                                                 |
    |-------------------|------------------------------------------------------------------------------------------|
    | Home              | 12 (or 10 if the session was scheduled as telehealth at a home location, for some [insurance plans](../AdminSetup/InsurancePlan.md/#insurance-plan-billing-requirements))                     |
    | Office            | 11                                                                                       |
    | School            | 03                                                                                       |
    | Other             | 99, or (or 02 if the session was scheduled as telehealth at a home location, for some [insurance plans](../AdminSetup/InsurancePlan.md/#insurance-plan-billing-requirements))                                                                                 |

    - *Address Type* - If the Location Type is 'Home,' the address type must be specified as 'Billing Address', 'Service Address' or both. A Patient can only have 1 address as their 'Billing Address' at any time.
- *Patient* - This field defines the patient this address is related to. This address will display as an encounter location option when an encounter is scheduled for this patient. If this Location is a general location (e.g., a school), where numerous patients are serviced, this field would be left empty. 
    - When ‘Home’ is selected as the ‘Location Type’, this field becomes required.
    - Once the record is saved, the Patient field locks and cannot be changed.

:::note
- The Location Description is displayed on a practitioner's session details view in the Note app. 
- Only home addresses where the address type is Service Address (or service and billing) will display in the Note app.
- Currently, a general location will only display in the Note app if there are no patient-specific locations of that location type for the selected patient.
:::
The **Address Details** section contains the address. Search for the address to populate the fields. The *Additional Directions* field can be used to record any directions that will help practitioners find their way easily (e.g., "first door on the right side of the house").  

## Search Locations

Select 'Location' on the site menu  in the Setup Area to open the Location Main View. 

The **General Service Locations** view displays active Locations which are not related to a Patient record. 

The **All Service Locations** view displays all the active Locations in the system.