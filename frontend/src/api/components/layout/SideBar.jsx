import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  CalendarDays,
  FileText,
  Settings,
  UserRoundCheck,
  ChevronDown,
  Bell,
} from "lucide-react";

const legalLinks = [
  { to: "/legaltrack/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/legaltrack/cases", label: "Cases", icon: Briefcase },
  { to: "/legaltrack/clients", label: "Clients", icon: Users },
  { to: "/legaltrack/documents", label: "Documents", icon: FileText },
  { to: "/notifications", label: "Notifications", icon: Bell },
];

const staffLinks = [
  { to: "/staffflow/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/staffflow/employees", label: "Employees", icon: Users },
  { to: "/staffflow/leave-requests", label: "Leave Requests", icon: UserRoundCheck },
  { to: "/staffflow/leave-calendar", label: "Leave Calendar", icon: CalendarDays },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-[#061E3A] to-[#0A2E5C] text-white min-h-screen p-4 flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center font-bold">
          F
        </div>

        <div>
          <h1 className="text-xl font-bold">FirmSuite</h1>
          <p className="text-xs text-slate-400">LegalTrack + StaffFlow</p>
        </div>
      </div>

      <Section title="LegalTrack" links={legalLinks} />
      <Section title="StaffFlow" links={staffLinks} />

      <div className="mt-auto border-t border-white/10 pt-4">
        <NavItem to="/settings" label="Settings" Icon={Settings} />

        <div className="flex items-center gap-3 mt-6">
          <div className="w-10 h-10 rounded-full bg-slate-300" />

          <div className="flex-1">
            <p className="text-sm font-semibold">Admin User</p>
            <p className="text-xs text-slate-400">Firm Admin</p>
          </div>

          <ChevronDown size={16} />
        </div>
      </div>
    </aside>
  );
}

function Section({ title, links }) {
  return (
    <div className="mb-6">
      <p className="text-[11px] uppercase tracking-wide text-slate-400 mb-2">
        {title}
      </p>

      <nav className="space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavItem key={to} to={to} label={label} Icon={Icon} />
        ))}
      </nav>
    </div>
  );
}

function NavItem({ to, label, Icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `sidebar-link ${
          isActive
            ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
            : "text-slate-300 hover:bg-white/10 hover:text-white"
        }`
      }
    >
      <Icon size={18} />
      {label}
    </NavLink>
  );
}