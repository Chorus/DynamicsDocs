module.exports = {
  sidebars:{
    'Getting Started': [
      'Overview/Welcome',
      'Overview/Dynamics365',
      'Overview/ViewsCharts',
      'Overview/Dashboards',
    //  'Overview/SecurityRoles'
     ],
    'Setup': [
      'AdminSetup/BusinessUnit',
    'AdminSetup/SecurityRoles',
    'AdminSetup/Account', 
    'AdminSetup/HealthcareService',
    'AdminSetup/InsurancePlan',
   'AdminSetup/FeeSchedules',
    'AdminSetup/Location',
    'AdminSetup/QualificationDefinition',
    'AdminSetup/GoalBankLibrary',
  ],
  // 'Clinical Setup':[
  //   'ClinicalSetup/Coverage',
  //   'ClinicalSetup/Authorizations',
  //   'ClinicalSetup/CareTeamAssignment',
  //   'ClinicalSetup/Contacts',
  // ],
  'Patients':[
    'Patients/PatientOverview',
   // 'Patients/Location',
    'Patients/Connection',
    'Patients/Conditions',
    'Patients/EpisodeOfCare',
    'Patients/Coverages',
    'Patients/Authorization',
    'Patients/AuthorizationServices',
    'Patients/CareTeamParticipants',
    //'Patients/CareTeamAssignments',
    //'Patients/PatientEncounters',
    'Patients/PatientCalendar',
  ],
  'Practitioners':[
    'Practitioners/BasicInfo',
    'Practitioners/PractitionerRole',    
    'Practitioners/Qualifications',
    //'Practitioners/CareTeamAssignment',
   // 'Practitioners/PractitionerEncounters',
    'Practitioners/PractitionerCalendar',
   ],
 'Scheduling':[
  'Scheduling/SingleEncounters',
  'Scheduling/RecurringEncounters',
  'Scheduling/ScheduleAssistance',
  'Scheduling/CareTeamAssignments',
  'Scheduling/EncounterValidations',
  'Scheduling/DeactivateEncounters',
  'Scheduling/UnsubmitEncounters',
  'Scheduling/Utilization',
 ],
 'Payroll':[
  'Payroll/Contracts',
  'Payroll/PayrollItems',
 ],
 'Billing':[
  'Billing/BillingSetup',
  'Billing/ChargePeriods',
  'Billing/ClaimSettings',
  'Billing/ClaimItems',
  'Billing/Claims',
 ],
 'RCM':[
  'RCM/RCMworkflow',
  'RCM/Payment',
  //'RCM/Transactions',
  'RCM/Remits',
 ],
//  'CRM':[
//   'CRM/Lead',
//   'CRM/Opportunity',
//  ],
  },
};