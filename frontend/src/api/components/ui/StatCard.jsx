export default function StatCard({ title, value, subtitle, icon, tone = "blue" }) {
    const tones = {
      blue: "bg-blue-50 text-blue-600",
      red: "bg-red-50 text-red-600",
      orange: "bg-orange-50 text-orange-600",
      green: "bg-green-50 text-green-600",
      purple: "bg-purple-50 text-purple-600",
    };
  
    return (
      <div className="card p-5">
        <div className="flex items-start gap-4">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center ${
              tones[tone] || tones.blue
            }`}
          >
            {icon}
          </div>
  
          <div>
            <p className="text-sm text-slate-500">{title}</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">{value}</h2>
  
            {subtitle && (
              <p className="text-xs text-blue-600 font-medium mt-2">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }