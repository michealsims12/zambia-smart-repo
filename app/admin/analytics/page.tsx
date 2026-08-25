import AdminNav from "@/components/AdminNav";

const categories = [
  { label: "Road accident", value: 412, pct: 78 },
  { label: "Infrastructure", value: 305, pct: 58 },
  { label: "Fire", value: 198, pct: 38 },
  { label: "Flood", value: 140, pct: 27 },
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AdminNav active="Analytics" />
      <div className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-lg font-medium mb-4">Analytics</h1>
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Total</p>
            <p className="text-xl font-medium mt-1">1,284</p>
          </div>
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Active</p>
            <p className="text-xl font-medium mt-1">42</p>
          </div>
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Avg response</p>
            <p className="text-xl font-medium mt-1">14.7m</p>
          </div>
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Resolved</p>
            <p className="text-xl font-medium mt-1">1,198</p>
          </div>
        </div>

        <div className="bg-white rounded-card border border-gray-200 p-5">
          <p className="text-sm font-medium mb-4">Incidents by category</p>
          <div className="space-y-3">
            {categories.map((c) => (
              <div key={c.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span>{c.label}</span>
                  <span className="text-gray-400">{c.value}</span>
                </div>
                <div className="bg-gray-100 rounded h-1.5">
                  <div
                    className="bg-brand h-1.5 rounded"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
