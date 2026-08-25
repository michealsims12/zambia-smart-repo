import Link from "next/link";
import CitizenNav from "@/components/CitizenNav";
import StatusBadge from "@/components/StatusBadge";

const recent = [
  { id: "ZS-00041", type: "Road accident", tone: "critical" as const, label: "Critical" },
  { id: "ZS-00039", type: "Streetlight", tone: "medium" as const, label: "Medium" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <CitizenNav active="Dashboard" />
      <div className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-lg font-medium mb-5">Good afternoon, Richard</h1>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Reports</p>
            <p className="text-2xl font-medium mt-1">5</p>
          </div>
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Active</p>
            <p className="text-2xl font-medium mt-1">2</p>
          </div>
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Resolved</p>
            <p className="text-2xl font-medium mt-1">8</p>
          </div>
        </div>

        <Link href="/report" className="btn-primary w-full h-11 mb-8">
          Report a problem
        </Link>

        <p className="text-sm font-medium mb-3">Recent reports</p>
        <div className="bg-white rounded-card border border-gray-200 divide-y divide-gray-200">
          {recent.map((r) => (
            <Link
              href={`/tracking/${r.id}`}
              key={r.id}
              className="flex items-center justify-between px-4 py-3 hover:bg-gray-50"
            >
              <div className="text-sm">
                <span className="font-medium">{r.id}</span>
                <span className="text-gray-400 ml-2">{r.type}</span>
              </div>
              <StatusBadge label={r.label} tone={r.tone} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
