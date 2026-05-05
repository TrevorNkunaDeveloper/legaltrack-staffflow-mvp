import { Mail, Phone, Plus, Search, User } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "John Mokoena",
    email: "john.mokoena@example.com",
    phone: "082 123 4567",
    matters: 1,
    status: "Active",
  },
  {
    id: 2,
    name: "Nomsa Dlamini",
    email: "nomsa.dlamini@example.com",
    phone: "083 456 7890",
    matters: 2,
    status: "Active",
  },
];

export default function LegalTrackClients() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="page-title">Clients</h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage client profiles and linked matters.
          </p>
        </div>

        <button className="btn-primary flex items-center gap-2">
          <Plus size={17} />
          New Client
        </button>
      </div>

      <div className="card p-5 mb-6">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-slate-400" />
          <input
            className="input w-full pl-10"
            placeholder="Search clients by name, email, or phone..."
          />
        </div>
      </div>

      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4">Client</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Phone</th>
              <th className="text-left p-4">Matters</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <User size={18} />
                    </div>
                    <p className="font-bold text-slate-900">{client.name}</p>
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail size={15} />
                    {client.email}
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone size={15} />
                    {client.phone}
                  </div>
                </td>

                <td className="p-4">{client.matters}</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    {client.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}