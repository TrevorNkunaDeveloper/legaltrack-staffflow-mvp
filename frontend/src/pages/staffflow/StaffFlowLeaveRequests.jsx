import StatusBadge from "../../api/components/ui/StatusBadge";
import { leaveRequests } from "../../api/data/staffFlowMockData";

export default function StaffFlowLeaveRequests() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">
        Leave Requests
      </h1>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4">Employee</th>
              <th className="text-left p-4">Leave Type</th>
              <th className="text-left p-4">From</th>
              <th className="text-left p-4">To</th>
              <th className="text-left p-4">Days</th>
              <th className="text-left p-4">Status</th>
              <th className="text-right p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {leaveRequests.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">{item.employee}</td>
                <td className="p-4">{item.leaveType}</td>
                <td className="p-4">{item.from}</td>
                <td className="p-4">{item.to}</td>
                <td className="p-4">{item.days}</td>
                <td className="p-4"><StatusBadge value={item.status} /></td>
                <td className="p-4 text-right space-x-2">
                  <button className="px-3 py-1 rounded-lg bg-green-100 text-green-700">
                    Approve
                  </button>
                  <button className="px-3 py-1 rounded-lg bg-red-100 text-red-700">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}