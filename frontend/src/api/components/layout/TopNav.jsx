import { Bell, Menu, Search } from "lucide-react";

export default function TopNav() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <button className="text-slate-600">
          <Menu size={22} />
        </button>

        <div>
          <h2 className="font-bold text-slate-900">Dashboard</h2>
        </div>
      </div>

      <div className="relative w-full max-w-md">
        <Search size={18} className="absolute left-3 top-3 text-slate-400" />
        <input
          className="input w-full pl-10"
          placeholder="Search employees, cases, requests..."
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="relative text-slate-700">
          <Bell size={22} />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] rounded-full px-1.5">
            5
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-semibold text-slate-900">Lindiwe Mokoena</p>
            <p className="text-xs text-slate-500">HR Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}