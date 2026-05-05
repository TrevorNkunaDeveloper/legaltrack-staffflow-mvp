export default function StaffFlowLeaveCalendar() {
    const days = Array.from({ length: 31 }, (_, index) => index + 1);
  
    return (
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-6">
          Leave Calendar
        </h1>
  
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
          <div className="grid grid-cols-7 gap-px bg-slate-200 overflow-hidden rounded-xl">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="bg-slate-50 p-3 text-sm font-semibold text-slate-500">
                {day}
              </div>
            ))}
  
            {days.map((day) => (
              <div key={day} className="bg-white min-h-28 p-3 text-sm">
                <p className="font-semibold text-slate-700">{day}</p>
  
                {day === 12 && (
                  <div className="mt-2 bg-blue-100 text-blue-700 rounded-lg p-2 text-xs">
                    Thabo Nkosi · Annual Leave
                  </div>
                )}
  
                {day === 15 && (
                  <div className="mt-2 bg-orange-100 text-orange-700 rounded-lg p-2 text-xs">
                    Nomsa Dlamini · Sick Leave
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }