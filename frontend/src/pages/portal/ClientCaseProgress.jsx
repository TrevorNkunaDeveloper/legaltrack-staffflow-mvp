import { ArrowLeft, CalendarDays, FileText, User } from "lucide-react";
import { Link } from "react-router-dom";
import StatusBadge from "../../api/components/ui/StatusBadge";
import { caseDetailsMock, caseTimeline } from "../../api/data/legalTrackMockData";

export default function ClientCaseProgress() {
    return (
        <div>
            <Link
                to="/portal"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-5"
            >
                <ArrowLeft size={16} />
                Back to My Matters
            </Link>

            <div className="card p-6 mb-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-xs text-slate-400">{caseDetailsMock.reference}</p>
                        <h1 className="page-title mt-1">{caseDetailsMock.matter}</h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Current stage of your matter
                        </p>
                    </div>

                    <StatusBadge value={caseDetailsMock.stage} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <InfoTile icon={<User size={18} />} label="Client" value={caseDetailsMock.client} />
                    <InfoTile icon={<CalendarDays size={18} />} label="Opened" value={caseDetailsMock.openedDate} />
                    <InfoTile icon={<FileText size={18} />} label="Reference" value={caseDetailsMock.reference} />
                </div>
            </div>

            <div className="card p-6">
                <div className="mb-6">
                    <h2 className="font-bold text-slate-900">Matter Progress Timeline</h2>
                    <p className="text-sm text-slate-500 mt-1">
                        Below are the latest visible updates from your legal team.
                    </p>
                </div>

                <div className="space-y-5">
                    {caseTimeline.map((item, index) => (
                        <div key={item.id} className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div
                                    className={`w-4 h-4 rounded-full ${index === caseTimeline.length - 1
                                            ? "bg-blue-600"
                                            : "bg-green-500"
                                        }`}
                                />

                                {index !== caseTimeline.length - 1 && (
                                    <div className="w-px flex-1 bg-slate-200 mt-2" />
                                )}
                            </div>

                            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <StatusBadge value={item.stage} />
                                        <p className="text-sm text-slate-700 mt-3">
                                            {item.message}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-2">
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <Link
                        to="/portal/cases/1/documents"
                        className="btn-outline inline-flex items-center gap-2 mb-6"
                    >
                        <FileText size={16} />
                        View Documents
                    </Link>
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-4">
                    <p className="text-sm text-blue-800">
                        Your legal team will notify you when the next update is available.
                    </p>
                </div>
            </div>
        </div>
    );
}

function InfoTile({ icon, label, value }) {
    return (
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                {icon}
            </div>
            <p className="text-xs text-slate-500">{label}</p>
            <p className="text-sm font-bold text-slate-900 mt-1">{value}</p>
        </div>
    );
}