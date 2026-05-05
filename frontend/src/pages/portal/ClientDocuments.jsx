import { ArrowLeft, Download, FileText, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { clientDocuments, caseDetailsMock } from "../../api/data/legalTrackMockData";

export default function ClientDocuments() {
  return (
    <div>
      <Link
        to="/portal/cases/1"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-5"
      >
        <ArrowLeft size={16} />
        Back to Matter Progress
      </Link>

      <div className="card p-6 mb-6">
        <p className="text-xs text-slate-400">{caseDetailsMock.reference}</p>
        <h1 className="page-title mt-1">Documents</h1>
        <p className="text-sm text-slate-500 mt-1">
          View and download documents shared by your legal team.
        </p>
      </div>

      <div className="card overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-slate-900">Shared Documents</h2>
            <p className="text-sm text-slate-500">
              {clientDocuments.length} document(s) available
            </p>
          </div>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4">Document</th>
              <th className="text-left p-4">Type</th>
              <th className="text-left p-4">Uploaded</th>
              <th className="text-right p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {clientDocuments.map((doc) => (
              <tr key={doc.id} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <FileText size={18} />
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">{doc.name}</p>
                      <p className="text-xs text-slate-400">Client-visible file</p>
                    </div>
                  </div>
                </td>

                <td className="p-4">{doc.type}</td>
                <td className="p-4">{doc.uploaded}</td>

                <td className="p-4">
                  <div className="flex justify-end gap-2">
                    <button className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100">
                      <Eye size={16} />
                    </button>

                    <button className="w-9 h-9 rounded-xl bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-100">
                      <Download size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}