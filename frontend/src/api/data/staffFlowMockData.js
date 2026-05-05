export const employees = [
    {
      id: 1,
      employeeNumber: "EMP-001",
      fullName: "Thabo Nkosi",
      position: "Associate Attorney",
      department: "Litigation",
      status: "ACTIVE",
      annualLeave: 18,
      sickLeave: 7,
    },
    {
      id: 2,
      employeeNumber: "EMP-002",
      fullName: "Nomsa Dlamini",
      position: "Legal Secretary",
      department: "Admin",
      status: "ACTIVE",
      annualLeave: 12,
      sickLeave: 10,
    },
  ];
  
  export const leaveRequests = [
    {
      id: 1,
      employee: "Thabo Nkosi",
      leaveType: "Annual Leave",
      from: "12 May 2026",
      to: "13 May 2026",
      days: 2,
      status: "PENDING",
    },
    {
      id: 2,
      employee: "Nomsa Dlamini",
      leaveType: "Sick Leave",
      from: "08 May 2026",
      to: "08 May 2026",
      days: 1,
      status: "PENDING",
    },
  ];