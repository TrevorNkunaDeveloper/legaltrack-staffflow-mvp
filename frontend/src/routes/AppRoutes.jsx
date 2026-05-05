import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "../api/components/layout/AppShell.jsx";
import Login from "../pages/auth/Login";
import LegalTrackDashboard from "../pages/legaltrack/legalTrackDashboard";
import LegalTrackCases from "../pages/legaltrack/legalTrackCases";
import LegalTrackCaseDetails from "../pages/legaltrack/legalTrackCaseDetails.jsx";
import LegalTrackClients from "../pages/legaltrack/LegalTrackClients";

import StaffFlowDashboard from "../pages/staffflow/StaffFlowDashboard";
import StaffFlowEmployees from "../pages/staffflow/StaffFlowEmployees";
import StaffFlowLeaveRequests from "../pages/staffflow/StaffFlowLeaveRequests.jsx";
import StaffFlowLeaveCalendar from "../pages/staffflow/StaffFlowLeaveCalendar";

import ClientPortalLayout from "../api/components/layout/ClientPortalLayout";
import ClientPortalHome from "../pages/portal/ClientPortalHome";
import ClientCaseProgress from "../pages/portal/ClientCaseProgress";
import ClientDocuments from "../pages/portal/ClientDocuments.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/legaltrack/dashboard" replace />} />
      <Route path="/login" element={<Login />} />

      <Route element={<AppShell />}>
        <Route path="/legaltrack/dashboard" element={<LegalTrackDashboard />} />
        <Route path="/legaltrack/cases" element={<LegalTrackCases />} />
        <Route path="/legaltrack/cases/:caseId" element={<LegalTrackCaseDetails />} />
        <Route path="/legaltrack/clients" element={<LegalTrackClients />} />
        
        <Route path="/staffflow/dashboard" element={<StaffFlowDashboard />} />
        <Route path="/staffflow/employees" element={<StaffFlowEmployees />} />
        <Route path="/staffflow/leave-requests" element={<StaffFlowLeaveRequests />} />
        <Route path="/staffflow/leave-calendar" element={<StaffFlowLeaveCalendar />} />
      </Route>

      <Route path="/portal" element={<ClientPortalLayout />}>
        <Route index element={<ClientPortalHome />} />
        <Route path="cases/:caseId" element={<ClientCaseProgress />} />
        <Route path="cases/:caseId/documents" element={<ClientDocuments />} />
      </Route>
    </Routes>
  );
}