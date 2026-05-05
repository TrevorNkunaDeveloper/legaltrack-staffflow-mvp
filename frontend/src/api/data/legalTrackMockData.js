// ======================
// DASHBOARD STATS
// ======================

export const legalTrackStats = {
    activeCases: 42,
    awaitingResponse: 11,
    courtDates: 7,
    closedMatters: 18,
  };
  
  // ======================
  // CASE STATUS SUMMARY
  // ======================
  
  export const caseStatusSummary = [
    { label: "New Enquiry", count: 5, percentage: 12 },
    { label: "In Progress", count: 22, percentage: 53 },
    { label: "Awaiting Response", count: 11, percentage: 26 },
    { label: "Court / Hearing", count: 7, percentage: 17 },
    { label: "Closed", count: 18, percentage: 24 },
  ];
  
  // ======================
  // UPCOMING COURT DATES
  // ======================
  
  export const upcomingCourtDates = [
    {
      id: 1,
      date: "08 May 2026",
      matter: "Lamini v RAF",
      court: "High Court, Pretoria",
    },
    {
      id: 2,
      date: "12 May 2026",
      matter: "Mokoena v ABC Pty Ltd",
      court: "Labour Court, Johannesburg",
    },
    {
      id: 3,
      date: "15 May 2026",
      matter: "State v Nkosi",
      court: "Regional Court, Durban",
    },
  ];
  
  // ======================
  // RECENT CASE UPDATES
  // ======================
  
  export const recentCaseUpdates = [
    {
      id: 1,
      reference: "LT-2026-0001",
      client: "John Mokoena",
      stage: "AWAITING_RESPONSE",
      updated: "06 May 2026",
      updatedBy: "N. Dlamini",
    },
    {
      id: 2,
      reference: "LT-2026-0002",
      client: "Nomsa Dlamini",
      stage: "FILED_WITH_COURT",
      updated: "05 May 2026",
      updatedBy: "Adv. Naidoo",
    },
  ];
  
  // ======================
  // MAIN CASE LIST (TABLE)
  // ======================
  
  export const legalCases = [
    {
      id: 1,
      reference: "LT-2026-0001",
      client: "John Mokoena",
      matter: "Labour Dispute",
      stage: "AWAITING_RESPONSE",
      attorney: "Adv. Sipho Mthembu",
      updatedAt: "06 May 2026",
      court: "Labour Court",
      caseNumber: "LC123/2026",
      status: "ACTIVE",
    },
    {
      id: 2,
      reference: "LT-2026-0002",
      client: "Nomsa Dlamini",
      matter: "Civil Claim",
      stage: "FILED_WITH_COURT",
      attorney: "Adv. Naidoo",
      updatedAt: "05 May 2026",
      court: "High Court",
      caseNumber: "HC456/2026",
      status: "ACTIVE",
    },
    {
      id: 3,
      reference: "LT-2026-0003",
      client: "Thabo Nkosi",
      matter: "Criminal Defence",
      stage: "COURT_DATE_CONFIRMED",
      attorney: "Adv. Khumalo",
      updatedAt: "04 May 2026",
      court: "Regional Court",
      caseNumber: "RC789/2026",
      status: "ACTIVE",
    },
    {
      id: 4,
      reference: "LT-2026-0004",
      client: "Sarah Jacobs",
      matter: "Contract Dispute",
      stage: "DRAFTING_IN_PROGRESS",
      attorney: "Adv. Petersen",
      updatedAt: "03 May 2026",
      court: "Magistrates Court",
      caseNumber: "MC321/2026",
      status: "ACTIVE",
    },
    {
      id: 5,
      reference: "LT-2026-0005",
      client: "Michael Smith",
      matter: "Insurance Claim",
      stage: "DOCUMENTS_RECEIVED",
      attorney: "Adv. Daniels",
      updatedAt: "02 May 2026",
      court: "High Court",
      caseNumber: "HC654/2026",
      status: "ACTIVE",
    },
  ];
  
  // ======================
  // CASE DETAILS (FOR NEXT SCREEN)
  // ======================
  
  export const caseDetailsMock = {
    id: 1,
    reference: "LT-2026-0001",
    client: "John Mokoena",
    matter: "Labour Dispute",
    attorney: "Adv. Sipho Mthembu",
    stage: "AWAITING_RESPONSE",
    court: "Labour Court, Johannesburg",
    caseNumber: "LC123/2026",
    opposingParty: "ABC Pty Ltd",
    openedDate: "20 April 2026",
  };
  
  // ======================
  // CASE TIMELINE (NEXT SCREEN)
  // ======================
  
  export const caseTimeline = [
    {
      id: 1,
      stage: "ENGAGEMENT_CONFIRMED",
      message: "We have been formally appointed to represent you.",
      date: "20 April 2026",
    },
    {
      id: 2,
      stage: "DOCUMENTS_RECEIVED",
      message: "We have received your documents.",
      date: "22 April 2026",
    },
    {
      id: 3,
      stage: "FILED_WITH_COURT",
      message: "Your matter has been filed with the court.",
      date: "28 April 2026",
    },
    {
      id: 4,
      stage: "AWAITING_RESPONSE",
      message: "We are awaiting a response from the other party.",
      date: "06 May 2026",
    },
  ];
  
  // ======================
  // CLIENT PORTAL (NEXT SCREENS)
  // ======================
  
  export const clientCases = [
    {
      id: 1,
      reference: "LT-2026-0001",
      matter: "Labour Dispute",
      stage: "AWAITING_RESPONSE",
      lastUpdate: "We are awaiting a response from the other party.",
    },
  ];
  
  export const clientDocuments = [
    {
      id: 1,
      name: "Signed Contract",
      type: "PDF",
      uploaded: "22 April 2026",
    },
    {
      id: 2,
      name: "Affidavit",
      type: "PDF",
      uploaded: "24 April 2026",
    },
  ];