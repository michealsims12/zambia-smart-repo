import Link from "next/link";
import CitizenNav from "@/components/CitizenNav";
import StatusBadge from "@/components/StatusBadge";

const reports = [
  { id: "ZS-00145", type: "Accident", label: "Assigned", tone: "neutral" as const },
  { id: "ZS-00142", type: "Streetlight", label: "Reviewing", tone: "high" as const },
  { id: "ZS-00131", type: "Drainage", label: "Resolved", tone: "success" as const },
];

export default function MyReportsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <CitizenNav active="My reports" />
      <div className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-lg font-medium mb-4">My reports</h1>
        <input className="input mb-4" placeholder="Search reports" />
        <div className="bg-white rounded-card border border-gray-200 divide-y divide-gray-200">
          {reports.map((r) => (
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
