import StatusBadge from "../../api/components/ui/StatusBadge";
import { employees } from "../../api/data/staffFlowMockData";

export default function StaffFlowEmployees() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Employees</h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm">
          + Add Employee
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4">Employee No.</th>
              <th className="text-left p-4">Full Name</th>
              <th className="text-left p-4">Position</th>
              <th className="text-left p-4">Department</th>
              <th className="text-left p-4">Annual Leave</th>
              <th className="text-left p-4">Sick Leave</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4 text-blue-600 font-medium">{item.employeeNumber}</td>
                <td className="p-4">{item.fullName}</td>
                <td className="p-4">{item.position}</td>
                <td className="p-4">{item.department}</td>
                <td className="p-4">{item.annualLeave}</td>
                <td className="p-4">{item.sickLeave}</td>
                <td className="p-4"><StatusBadge value={item.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}