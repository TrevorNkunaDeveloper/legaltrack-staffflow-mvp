import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />

      <div className="flex-1">
        <TopNav />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}