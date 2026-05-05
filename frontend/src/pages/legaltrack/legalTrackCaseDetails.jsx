import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  FileText,
  Mail,
  Pencil,
  Plus,
  User,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import StatusBadge from "../../api/components/ui/StatusBadge";
import { caseDetailsMock, caseTimeline } from "../../api/data/legalTrackMockData";

const stages = [
  "DOCUMENTS_RECEIVED",
  "CASE_REVIEW",
  "DRAFTING_IN_PROGRESS",
  "FILED_WITH_COURT",
  "AWAITING_RESPONSE",
  "COURT_DATE_CONFIRMED",
  "JUDGMENT_DELIVERED",
  "SETTLEMENT_REACHED",
  "CLOSED_SUCCESSFUL",
];

export default function LegalTrackCaseDetails() {
  const [showModal, setShowModal] = useState(false);
  const [updates, setUpdates] = useState(caseTimeline);
  const [currentStage, setCurrentStage] = useState(caseDetailsMock.stage);

  function handleSaveUpdate(formData) {
    const newUpdate = {
      id: updates.length + 1,
      stage: formData.stage,
      message: formData.message,
      date: "06 May 2026",
    };

    setUpdates([newUpdate, ...updates]);
    setCurrentStage(formData.stage);
    setShowModal(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link
            to="/legaltrack/cases"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-3"
          >
            <ArrowLeft size={16} />
            Back to Cases
          </Link>

          <h1 className="page-title">{caseDetailsMock.reference}</h1>
          <p className="text-sm text-slate-500 mt-1">{caseDetailsMock.matter}</p>
        </div>

        <div className="flex gap-2">
          <button className="btn-outline flex items-center gap-2">
            <Mail size={16} />
            Preview Email
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={16} />
            Add Case Update
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <CaseSummaryCard currentStage={currentStage} />
          <CaseTimelineCard updates={updates} onAdd={() => setShowModal(true)} />
        </div>

        <div className="space-y-6">
          <ClientCard />
          <MatterInfoCard />
          <QuickActionsCard onUpdate={() => setShowModal(true)} />
        </div>
      </div>

      {showModal && (
        <UpdateStatusModal
          currentStage={currentStage}
          onClose={() => setShowModal(false)}
          onSave={handleSaveUpdate}
        />
      )}
    </div>
  );
}

function CaseSummaryCard({ currentStage }) {
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {caseDetailsMock.matter}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Opened on {caseDetailsMock.openedDate}
          </p>
        </div>

        <StatusBadge value={currentStage} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoTile icon={<User size={18} />} label="Client" value={caseDetailsMock.client} />
        <InfoTile icon={<FileText size={18} />} label="Case Number" value={caseDetailsMock.caseNumber} />
        <InfoTile icon={<CalendarDays size={18} />} label="Court" value={caseDetailsMock.court} />
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

function CaseTimelineCard({ updates, onAdd }) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold text-slate-900">Case Timeline</h2>

        <button onClick={onAdd} className="btn-outline flex items-center gap-2">
          <Plus size={16} />
          Add Update
        </button>
      </div>

      <div className="space-y-5">
        {updates.map((item, index) => (
          <div key={item.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-blue-600" />
              {index !== updates.length - 1 && (
                <div className="w-px flex-1 bg-slate-200 mt-2" />
              )}
            </div>

            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <StatusBadge value={item.stage} />
                  <p className="text-sm text-slate-700 mt-3">{item.message}</p>
                  <p className="text-xs text-slate-400 mt-2">{item.date}</p>
                </div>

                <button className="text-slate-400 hover:text-blue-600">
                  <Pencil size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientCard() {
  return (
    <div className="card p-5">
      <h2 className="font-bold text-slate-900 mb-4">Client Details</h2>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
          JM
        </div>

        <div>
          <p className="font-bold text-slate-900">{caseDetailsMock.client}</p>
          <p className="text-sm text-slate-500">john.mokoena@example.com</p>
        </div>
      </div>

      <button className="btn-outline w-full">View Client Profile</button>
    </div>
  );
}

function MatterInfoCard() {
  return (
    <div className="card p-5">
      <h2 className="font-bold text-slate-900 mb-4">Matter Information</h2>

      <InfoRow label="Attorney" value={caseDetailsMock.attorney} />
      <InfoRow label="Opposing Party" value={caseDetailsMock.opposingParty} />
      <InfoRow label="Court" value={caseDetailsMock.court} />
      <InfoRow label="Status" value="ACTIVE" />
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="py-3 border-b border-slate-100 last:border-0">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-sm font-semibold text-slate-900 mt-1">{value}</p>
    </div>
  );
}

function QuickActionsCard({ onUpdate }) {
  return (
    <div className="card p-5">
      <h2 className="font-bold text-slate-900 mb-4">Quick Actions</h2>

      <div className="space-y-2">
        <button onClick={onUpdate} className="btn-primary w-full">Update Stage</button>
        <button className="btn-outline w-full">Upload Document</button>
        <button className="btn-outline w-full">Preview Email</button>
        <button className="btn-outline w-full">Close Matter</button>
      </div>
    </div>
  );
}

function UpdateStatusModal({ currentStage, onClose, onSave }) {
  const [stage, setStage] = useState(currentStage);
  const [message, setMessage] = useState(
    "We are awaiting a response from the other party."
  );
  const [visibleToClient, setVisibleToClient] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!stage || !message.trim()) return;

    onSave({
      stage,
      message,
      visibleToClient,
    });
  }

  return (
    <div className="fixed inset-0 bg-slate-950/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Add Case Update</h2>
            <p className="text-sm text-slate-500">
              Update the matter stage and prepare a client notification.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="text-sm font-semibold text-slate-700">
              New Case Stage
            </label>

            <select
              className="input w-full mt-2"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
            >
              {stages.map((item) => (
                <option key={item} value={item}>
                  {item.replaceAll("_", " ")}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700">
              Client Update Message
            </label>

            <textarea
              className="input w-full mt-2 min-h-28"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter update message visible to the client..."
            />
          </div>

          <label className="flex items-center gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={visibleToClient}
              onChange={(e) => setVisibleToClient(e.target.checked)}
            />
            Visible to client and simulate email notification
          </label>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <p className="text-sm font-bold text-blue-900 mb-2">
              Simulated Email Preview
            </p>

            <p className="text-sm text-blue-900">
              <strong>Subject:</strong> LegalTrack: Update on Your Matter –{" "}
              {caseDetailsMock.reference}
            </p>

            <p className="text-sm text-blue-800 mt-2">
              Your matter has been updated to{" "}
              <strong>{stage.replaceAll("_", " ")}</strong>.
            </p>

            <p className="text-sm text-blue-800 mt-2">{message}</p>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="btn-outline">
              Cancel
            </button>

            <button type="submit" className="btn-primary">
              Save Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}