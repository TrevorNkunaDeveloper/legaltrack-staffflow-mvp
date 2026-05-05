import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import StatusBadge from "../../api/components/ui/StatusBadge";
import { clientCases } from "../../api/data/legalTrackMockData";

export default function ClientPortalHome() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="page-title">My Matters</h1>
        <p className="text-sm text-slate-500 mt-1">
          Track the progress of your legal matters in real time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {clientCases.map((item) => (
          <div key={item.id} className="card p-5">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs text-slate-400">{item.reference}</p>
                <h2 className="text-lg font-bold text-slate-900 mt-1">
                  {item.matter}
                </h2>
              </div>

              <StatusBadge value={item.stage} />
            </div>

            {/* Message */}
            <p className="text-sm text-slate-600 mb-5">
              {item.lastUpdate}
            </p>

            {/* Progress bar */}
            <ProgressBar stage={item.stage} />

            {/* Action */}
            <Link
              to={`/portal/cases/${item.id}`}
              className="mt-5 inline-flex items-center justify-center gap-2 w-full btn-primary"
            >
              <Eye size={16} />
              View Progress
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgressBar({ stage }) {
    const stageProgress = {
      NEW_ENQUIRY: 10,
      CONSULTATION_COMPLETED: 20,
      ENGAGEMENT_CONFIRMED: 30,
      DOCUMENTS_RECEIVED: 40,
      CASE_REVIEW: 50,
      DRAFTING_IN_PROGRESS: 60,
      FILED_WITH_COURT: 70,
      AWAITING_RESPONSE: 80,
      COURT_DATE_CONFIRMED: 90,
      JUDGMENT_DELIVERED: 100,
      SETTLEMENT_REACHED: 100,
      CLOSED_SUCCESSFUL: 100,
    };
  
    const value = stageProgress[stage] || 20;
  
    return (
      <div>
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>Progress</span>
          <span>{value}%</span>
        </div>
  
        <div className="h-2 bg-slate-100 rounded-full">
          <div
            className="h-2 bg-blue-600 rounded-full transition-all"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    );
  }