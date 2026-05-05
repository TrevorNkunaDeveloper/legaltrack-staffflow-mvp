import { Outlet } from "react-router-dom";

export default function ClientPortalLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white border-b px-6 py-4">
        <h1 className="text-xl font-bold text-slate-900">
          LegalTrack Client Portal
        </h1>
        <p className="text-sm text-slate-500">
          Secure access to your legal matters
        </p>
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}