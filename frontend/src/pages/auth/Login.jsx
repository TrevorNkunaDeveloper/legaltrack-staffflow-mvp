export default function Login() {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">
          <h1 className="text-3xl font-bold text-slate-900">FirmSuite</h1>
          <p className="text-slate-500 mt-1">
            LegalTrack + StaffFlow MVP
          </p>
  
          <div className="mt-8 space-y-4">
            <input
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
              placeholder="Email address"
            />
  
            <input
              type="password"
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
              placeholder="Password"
            />
  
            <button className="w-full bg-blue-600 text-white rounded-xl py-3 font-semibold">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }