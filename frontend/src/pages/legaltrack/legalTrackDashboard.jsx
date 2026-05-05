import {
  Briefcase,
  Clock,
  CalendarDays,
  CheckCircle,
} from "lucide-react";

import StatCard from "../../api/components/ui/StatCard";
import StatusBadge from "../../api/components/ui/StatusBadge";

import {
  legalTrackStats,
  caseStatusSummary,
  upcomingCourtDates,
  recentCaseUpdates,
} from "../../api/data/legalTrackMockData";

export default function LegalTrackDashboard() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="page-title">Overview</h1>
          <p className="text-sm text-slate-500 mt-1">
            Monitor legal matters, upcoming court dates, and client updates.
          </p>
        </div>

        <select className="input">
          <option>Today, 06 May 2026</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Active Cases"
          value={legalTrackStats.activeCases}
          subtitle="View all"
          tone="blue"
          icon={<Briefcase size={22} />}
        />

        <StatCard
          title="Awaiting Response"
          value={legalTrackStats.awaitingResponse}
          subtitle="View all"
          tone="purple"
          icon={<Clock size={22} />}
        />

        <StatCard
          title="Court Dates"
          value={legalTrackStats.courtDates}
          subtitle="View all"
          tone="red"
          icon={<CalendarDays size={22} />}
        />

        <StatCard
          title="Closed Matters"
          value={legalTrackStats.closedMatters}
          subtitle="View all"
          tone="green"
          icon={<CheckCircle size={22} />}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <CaseStatusOverview />
        <UpcomingCourtDates />
      </div>

      <RecentCaseUpdates />
    </div>
  );
}

function CaseStatusOverview() {
  return (
    <div className="card p-5">
      <h2 className="font-bold text-slate-900 mb-5">Case Status Overview</h2>

      <div className="flex items-center gap-8">
        <div className="relative w-40 h-40 rounded-full bg-[conic-gradient(#2563eb_0_38%,#8b5cf6_38%_55%,#f97316_55%_72%,#ef4444_72%_84%,#22c55e_84%_100%)] flex items-center justify-center">
          <div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-slate-900">42</span>
            <span className="text-xs text-slate-500">Total</span>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {caseStatusSummary.map((item, index) => (
            <div key={item.label} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    [
                      "bg-blue-600",
                      "bg-purple-500",
                      "bg-orange-500",
                      "bg-red-500",
                      "bg-green-500",
                    ][index]
                  }`}
                />
                <span className="text-slate-700">{item.label}</span>
              </div>

              <span className="font-medium text-slate-900">
                {item.count} ({item.percentage}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function UpcomingCourtDates() {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-slate-900">Upcoming Court Dates</h2>
        <button className="text-sm text-brand-blue font-medium">
          View calendar
        </button>
      </div>

      <div className="space-y-4">
        {upcomingCourtDates.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between border-b border-slate-100 last:border-0 pb-4 last:pb-0"
          >
            <div className="flex gap-4">
              <div className="text-sm font-bold text-slate-900 min-w-28">
                {item.date}
              </div>

              <div>
                <p className="font-medium text-slate-900">{item.matter}</p>
                <p className="text-xs text-slate-500 mt-1">{item.court}</p>
              </div>
            </div>

            <button className="text-xs text-brand-blue font-medium">
              View case
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecentCaseUpdates() {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-slate-900">Recent Case Updates</h2>
        <button className="text-sm text-brand-blue font-medium">
          View all updates
        </button>
      </div>

      <table className="w-full text-sm">
        <thead className="text-slate-500 border-b border-slate-100">
          <tr>
            <th className="text-left py-3">Case Reference</th>
            <th className="text-left py-3">Client</th>
            <th className="text-left py-3">Stage</th>
            <th className="text-left py-3">Updated</th>
            <th className="text-left py-3">By</th>
          </tr>
        </thead>

        <tbody>
          {recentCaseUpdates.map((item) => (
            <tr key={item.id}>
              <td className="py-4 font-medium text-brand-blue">
                {item.reference}
              </td>
              <td className="py-4">{item.client}</td>
              <td className="py-4">
                <StatusBadge value={item.stage} />
              </td>
              <td className="py-4">{item.updated}</td>
              <td className="py-4">{item.updatedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}