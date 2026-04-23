---
id: EligibilityAPI
title: Eligibility API
---
# API Reference – Eligibility Check Entities

This page describes the Dataverse tables (entities) and columns (fields) relevant to running [eligibility checks](../Patients/Coverages.md/#check-eligibility) via the API.

---

### Table of Contents

1. [Patient (Contact)](#1-patient-contact)
2. [Authorization](#2-authorization-cssemr_authorization)
3. [Authorization Service](#3-authorization-service-cssemr_authorizationservice)
4. [Insurance Plan](#4-insurance-plan-cssemr_insuranceplan)
5. [Payer (Account)](#5-payer-account)
6. [Coverage](#6-coverage-msemr_coverage)
7. [Entity Relationships](#7-entity-relationships)

---

### 1. Patient (Contact)

> Patients are stored in the standard **Contact** table.

| Display Name | Logical Name | Type | Notes |
|---|---|---|---|
| Contact ID | `contactid` | Uniqueidentifier | Primary key |
| First Name | `firstname` | String | |
| Last Name | `lastname` | String | |
| Date of Birth | `birthdate` | DateTime | |
| MRN | `css_mrn` | String (100) | Medical Record Number |
| MMIS | `css_mmis` | String (100) | Medicaid Management Info System ID |
| SSN | `cssemr_socialsecuritynumber` | String (11) | Social Security Number |
| Account | `css_account` | Lookup → Account | Associated account/organization |
| Episode of Care | `css_episodeofcare` | Lookup | |
| Case Manager | `css_casemanager` | Lookup → Contact | |
| Clinical Director | `css_clinicaldirector` | Lookup → Contact | |
| Service Location | `css_servicelocation` | Lookup | |
| Email | `emailaddress1` | String | Primary email |
| Phone | `telephone1` | String | Primary phone |
| Address | `address1_composite` | String | Full address |
| Status | `statecode` | OptionSet | 0 = Active, 1 = Inactive |

**Entity Logical Name:** `contact`

---

### 2. Authorization (`cssemr_authorization`)

> Represents a payer authorization for services for a patient.

| Display Name | Logical Name | Type | Notes |
|---|---|---|---|
| Authorization ID | `cssemr_authorizationid` | Uniqueidentifier | Primary key |
| Name | `cssemr_name` | String (100) | |
| Authorization Number | `css_authorizationnumber` | String (100) | Payer-assigned auth number |
| Authorization Type | `css_authorizationtype` | OptionSet | Service (862590000), Assessment (862590001) |
| Patient | `cssemr_subjectpatient` | Lookup → Contact | The patient this auth is for |
| Practitioner | `cssemr_authorpractitioner` | Lookup → Contact | |
| Coverage | `css_coverage` | Lookup → Coverage | Links to insurance coverage |
| Episode of Care | `cssemr_episodeofcare` | Lookup | |
| Period Start Date | `cssemr_periodstartdate` | DateTime | Authorization start |
| Period End Date | `cssemr_periodenddate` | DateTime | Authorization end |
| Rendering Provider | `css_renderingprovider` | Lookup → Contact | |
| Billing Provider | `css_billingprovider` | Lookup → Account | |
| Business Unit | `css_businessunit` | Lookup | |
| Status | `statecode` | OptionSet | 0 = Active, 1 = Inactive |
| Status Reason | `statuscode` | OptionSet | 1 = Active, 2 = Inactive, 862590001 = Expired, 862590002 = Pending Authorization, 119650003 = Entered in Error |

**Entity Logical Name:** `cssemr_authorization`

---

### 3. Authorization Service (`cssemr_authorizationservice`)

> Represents individual service lines within an authorization (e.g., a specific service code with authorized units).

| Display Name | Logical Name | Type | Notes |
|---|---|---|---|
| Auth Service ID | `cssemr_authorizationserviceid` | Uniqueidentifier | Primary key |
| Name | `cssemr_name` | String (850) | |
| Authorization | `cssemr_authorization` | Lookup → Authorization | Parent authorization |
| Authorization Number | `css_authorizationnumber` | String (100) | |
| Service Code | `css_servicecode` | Lookup | The CPT/service code |
| Amount Authorized | `css_amountauthorized` | Decimal | Authorized quantity |
| Unit Type | `css_form_unittype` | OptionSet | Hours/Week (862590000), Hours/Month (862590001), Units/Week (862590002), Units/Month (862590003), Total Units (862590004) |
| Authorized As | `css_authorizedas` | OptionSet | As Authorized (862590000), Total Units per Auth Period (862590001) |
| Start Date | `cssemr_activitystartdate` | DateTime | Service line start |
| End Date | `cssemr_activityenddate` | DateTime | Service line end |
| Rendering Provider | `css_renderingprovider` | Lookup → Contact | |
| Telehealth Allowed | `css_telehealthallowed` | Boolean | |
| Validate Encounters | `css_validateencounters` | OptionSet | |
| Status | `statecode` | OptionSet | 0 = Active, 1 = Inactive |
| Status Reason | `statuscode` | OptionSet | 1 = Active, 2 = Inactive |

**Entity Logical Name:** `cssemr_authorizationservice`

---

### 4. Insurance Plan (`cssemr_insuranceplan`)

> Represents a specific insurance plan offered by a payer.

| Display Name | Logical Name | Type | Notes |
|---|---|---|---|
| Insurance Plan ID | `cssemr_insuranceplanid` | Uniqueidentifier | Primary key |
| Name | `cssemr_name` | String (500) | Plan name |
| Alias | `cssemr_alias` | String (100) | Short name / alias |
| Payer | `cssemr_ownedby` | Lookup → Account | The payer (Account) that owns this plan |
| EVV Payer ID | `css_evvpayerid` | String (64) | Electronic Visit Verification payer identifier |
| Medicaid | `css_medicaid` | Boolean | Whether this is a Medicaid plan |
| Status | `statecode` | OptionSet | 0 = Active, 1 = Inactive |
| Status Reason | `statuscode` | OptionSet | 1 = Active, 2 = Inactive |

**Entity Logical Name:** `cssemr_insuranceplan`

---

### 5. Payer (Account)

> Payers (insurance companies) are stored in the standard **Account** table.

| Display Name | Logical Name | Type | Notes |
|---|---|---|---|
| Account ID | `accountid` | Uniqueidentifier | Primary key |
| Name | `name` | String | Payer / organization name |
| Rendering Provider | `css_renderingprovider` | Lookup → Contact | Default rendering provider |
| Phone | `telephone1` | String | Primary phone |
| Email | `emailaddress1` | String | |
| Address | `address1_composite` | String | Full address |
| Status | `statecode` | OptionSet | 0 = Active, 1 = Inactive |

**Entity Logical Name:** `account`

> **Tip:** To find payer accounts, query Account records that are referenced by Insurance Plans (`cssemr_insuranceplan.cssemr_ownedby`).

---

### 6. Coverage (`msemr_coverage`)

> Links a patient to an insurance plan and represents their insurance coverage.

| Display Name | Logical Name | Type | Notes |
|---|---|---|---|
| Coverage ID | `msemr_coverageid` | Uniqueidentifier | Primary key |
| Name | `msemr_name` | String | |
| Patient | `msemr_beneficiary` | Lookup → Contact | The covered patient |
| Payer | `msemr_payor` | Lookup → Account | The payer |
| Subscriber ID | `msemr_subscriberid` | String | Member / subscriber ID |
| Status | `statecode` | OptionSet | 0 = Active, 1 = Inactive |

**Entity Logical Name:** `msemr_coverage`

---

### 7. Entity Relationships

```
Account (Payer)
  │
  ├──< cssemr_insuranceplan        (via cssemr_ownedby)
  │
  └──< msemr_coverage              (via msemr_payor)
          │
          └──< cssemr_authorization (via css_coverage)
                  │
                  ├── Contact        (via cssemr_subjectpatient = Patient)
                  │
                  └──< cssemr_authorizationservice (via cssemr_authorization)
                          │
                          └── Service Code  (via css_servicecode)
```

### Common Query Patterns

**Find all active authorizations for a patient:**
```
GET /api/data/v9.2/cssemr_authorizations
  ?$filter=cssemr_subjectpatient/contactid eq '{patientId}' and statecode eq 0
  &$select=cssemr_name,css_authorizationnumber,cssemr_periodstartdate,cssemr_periodenddate
```

**Find authorization services for an authorization:**
```
GET /api/data/v9.2/cssemr_authorizationservices
  ?$filter=_cssemr_authorization_value eq '{authorizationId}' and statecode eq 0
  &$select=cssemr_name,css_amountauthorized,cssemr_activitystartdate,cssemr_activityenddate
```

**Find insurance plans for a payer:**
```
GET /api/data/v9.2/cssemr_insuranceplans
  ?$filter=_cssemr_ownedby_value eq '{payerAccountId}' and statecode eq 0
  &$select=cssemr_name,cssemr_alias,css_medicaid
```

**Find coverage for a patient:**
```
GET /api/data/v9.2/msemr_coverages
  ?$filter=_msemr_beneficiary_value eq '{patientId}' and statecode eq 0
  &$select=msemr_name,msemr_subscriberid
```

---
:::note
All lookup fields, when used in OData `$filter`, must be referenced with the `_fieldname_value` syntax (e.g., `_cssemr_subjectpatient_value`). When using `$expand`, use the navigation property name.
:::