import AdminNav from "@/components/AdminNav";
import StatusBadge from "@/components/StatusBadge";

const rows = [
  { id: "145", type: "Accident", priority: "P1", status: "Assigned", tone: "critical" as const },
  { id: "144", type: "Fire", priority: "P1", status: "Responding", tone: "critical" as const },
  { id: "143", type: "Streetlight", priority: "P3", status: "Resolved", tone: "success" as const },
  { id: "142", type: "Flood", priority: "P2", status: "Reviewing", tone: "high" as const },
];

export default function IncidentManagementPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AdminNav active="Incidents" />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-lg font-medium mb-4">Incident management</h1>
        <div className="flex gap-2 mb-4 flex-wrap">
          <input className="input flex-1 min-w-[160px]" placeholder="Search" />
          <select className="input w-32">
            <option>Category</option>
          </select>
          <select className="input w-32">
            <option>Severity</option>
          </select>
          <select className="input w-32">
            <option>Status</option>
          </select>
        </div>
        <div className="bg-white rounded-card border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-400 border-b border-gray-200">
                <th className="px-4 py-3 font-medium">ID</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Priority</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{r.id}</td>
                  <td className="px-4 py-3">{r.type}</td>
                  <td className="px-4 py-3">{r.priority}</td>
                  <td className="px-4 py-3">
                    <StatusBadge label={r.status} tone={r.tone} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
