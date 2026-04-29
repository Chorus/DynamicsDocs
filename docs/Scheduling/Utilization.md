---
id: Utilization
title: Authorization Utilization- Retired July 2025
---

:::note
The Authorization Utilization view was retired in July 2025. Instead, learn about monitoring utilization from the [Utilization Dashboard](../Overview/Dashboards.md/#utilization).
:::

# Authorization Utilization- Retired July 2025

To easily monitor how many authorized units were utilized per service per authorization, click 'Utilization' on the Insights section of Clinical area of the site menu.

Customize the filters on the report to monitor utilizations the way your organization would like to monitor them.

For example, to monitor authorizations per patient per month, adjust the Start and End Date filters to filter by 'This Month' and the Patient column to filter by the Patient you are reviewing.

## Authorization Service Utilizations

An Authorization Service Utilization record is automatically generated for every Authorized Unit on the Authorization Service. 

For example, if an Authorization Service is authorized as 2 hours per week, an Authorization Service Utlization record is generated for every week of the Authorization Period.

When an Encounter Service is created for that Authorization service, it is related to the Authorization Service Utilization and the aggregates on the Utilization are updated.

For example, when a BCBA schedules a 1 hour session on January 1st for an Authorization Service that is Authorized as 2 hours per week, the Encounter Service created gets related to the Authorization Service Utilization record that includes January 1st, and the aggregates are updated.

The following aggregates are tracked:

- *Completed* - how many authorized units were already completed this week/month.
- *Scheduled* - how many authorized units are scheduled to be completed this week/month.
- *Remaining* - how many authorized units remain to be utilized this week/month.
- *% Utilized* - percent of utilized units out of total authorized units this week/month.



