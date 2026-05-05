const styles = {
    ACTIVE: "bg-green-100 text-green-700",
    INACTIVE: "bg-slate-100 text-slate-600",
  
    PENDING: "bg-orange-100 text-orange-700",
    APPROVED: "bg-green-100 text-green-700",
    REJECTED: "bg-red-100 text-red-700",
    CANCELLED: "bg-slate-100 text-slate-600",
  
    NEW_ENQUIRY: "bg-blue-100 text-blue-700",
    CONSULTATION_COMPLETED: "bg-indigo-100 text-indigo-700",
    ENGAGEMENT_CONFIRMED: "bg-green-100 text-green-700",
    DOCUMENTS_RECEIVED: "bg-green-100 text-green-700",
    CASE_REVIEW: "bg-purple-100 text-purple-700",
    DRAFTING_IN_PROGRESS: "bg-orange-100 text-orange-700",
    FILED_WITH_COURT: "bg-emerald-100 text-emerald-700",
    AWAITING_RESPONSE: "bg-blue-100 text-blue-700",
    COURT_DATE_CONFIRMED: "bg-purple-100 text-purple-700",
    JUDGMENT_DELIVERED: "bg-slate-100 text-slate-700",
    SETTLEMENT_REACHED: "bg-green-100 text-green-700",
    CLOSED_SUCCESSFUL: "bg-green-100 text-green-700",
  };
  
  export default function StatusBadge({ value }) {
    const label = value ? value.replaceAll("_", " ") : "UNKNOWN";
  
    return (
      <span
        className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
          styles[value] || "bg-slate-100 text-slate-700"
        }`}
      >
        {label}
      </span>
    );
  }