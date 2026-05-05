import { Search, Filter, Plus, Eye, Pencil, Mail } from "lucide-react";
import StatusBadge from "../../api/components/ui/StatusBadge";
import { legalCases } from "../../api/data/legalTrackMockData";
import { Link } from "react-router-dom";

export default function LegalTrackCases() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="page-title">Cases</h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage matters, clients, case stages, and status updates.
          </p>
        </div>

        <button className="btn-primary flex items-center gap-2">
          <Plus size={17} />
          New Case
        </button>
      </div>

      <div className="card p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative md:col-span-2">
            <Search size={18} className="absolute left-3 top-3 text-slate-400" />
            <input
              className="input w-full pl-10"
              placeholder="Search by reference, client, attorney..."
            />
          </div>

          <select className="input">
            <option>All Stages</option>
            <option>Awaiting Response</option>
            <option>Filed with Court</option>
            <option>Drafting in Progress</option>
            <option>Court Date Confirmed</option>
          </select>

          <button className="btn-outline flex items-center justify-center gap-2">
            <Filter size={17} />
            More Filters
          </button>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-slate-900">All Cases</h2>
            <p className="text-sm text-slate-500">
              Showing {legalCases.length} active matters
            </p>
          </div>

          <select className="input">
            <option>Sort: Recently Updated</option>
            <option>Sort: Case Reference</option>
            <option>Sort: Client Name</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="text-left p-4">Reference</th>
                <th className="text-left p-4">Client</th>
                <th className="text-left p-4">Matter</th>
                <th className="text-left p-4">Attorney</th>
                <th className="text-left p-4">Stage</th>
                <th className="text-left p-4">Updated</th>
                <th className="text-right p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {legalCases.map((item) => (
                <tr key={item.id} className="border-t border-slate-100 hover:bg-slate-50">
                  <td className="p-4">
                    <p className="font-bold text-blue-600">{item.reference}</p>
                    <p className="text-xs text-slate-400">Case #{item.id}</p>
                  </td>

                  <td className="p-4 font-medium text-slate-800">
                    {item.client}
                  </td>

                  <td className="p-4 text-slate-600">
                    {item.matter}
                  </td>

                  <td className="p-4 text-slate-600">
                    {item.attorney}
                  </td>

                  <td className="p-4">
                    <StatusBadge value={item.stage} />
                  </td>

                  <td className="p-4 text-slate-600">
                    {item.updatedAt}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={`/legaltrack/cases/${item.id}`}
                        className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100"
                      >
                        <Eye size={16} />
                      </Link>

                      <button className="w-9 h-9 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center hover:bg-slate-100">
                        <Pencil size={16} />
                      </button>

                      <button className="w-9 h-9 rounded-xl bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-100">
                        <Mail size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-sm">
          <p className="text-slate-500">Page 1 of 1</p>

          <div className="flex gap-2">
            <button className="btn-outline">Previous</button>
            <button className="btn-outline">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}