import AdminNav from "@/components/AdminNav";
import StatusBadge from "@/components/StatusBadge";

const incidents = [
  { type: "Road accident", area: "Kitwe Central", label: "P1 critical", tone: "critical" as const },
  { type: "Flood", area: "Riverside", label: "P2 high", tone: "high" as const },
  { type: "Streetlight", area: "Parklands", label: "P3 medium", tone: "medium" as const },
];

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AdminNav active="Reports" />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Total</p>
            <p className="text-2xl font-medium mt-1">1,284</p>
          </div>
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Active</p>
            <p className="text-2xl font-medium mt-1">42</p>
          </div>
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Critical</p>
            <p className="text-2xl font-medium mt-1 text-status-criticalText">
              18
            </p>
          </div>
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Responders</p>
            <p className="text-2xl font-medium mt-1">56</p>
          </div>
        </div>

        <p className="text-sm font-medium mb-3">Recent incidents</p>
        <div className="bg-white rounded-card border border-gray-200 divide-y divide-gray-200">
          {incidents.map((r) => (
            <div
              key={r.type + r.area}
              className="flex items-center justify-between px-4 py-3"
            >
              <div className="text-sm">
                <span className="font-medium">{r.type}</span>
                <span className="text-gray-400 ml-2">{r.area}</span>
              </div>
              <StatusBadge label={r.label} tone={r.tone} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
