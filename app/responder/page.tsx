import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";

export default function ResponderDashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-md bg-brand flex items-center justify-center text-white text-xs font-semibold">
              Z
            </span>
            <span className="font-medium text-sm">ZAM-SMART responder</span>
          </div>
          <Link href="/" className="text-sm text-gray-500">
            Logout
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Assigned</p>
            <p className="text-2xl font-medium mt-1">3</p>
          </div>
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Active</p>
            <p className="text-2xl font-medium mt-1">1</p>
          </div>
          <div className="bg-white rounded-card border border-gray-200 p-4">
            <p className="text-xs text-gray-400">Resolved</p>
            <p className="text-2xl font-medium mt-1">18</p>
          </div>
        </div>

        <p className="text-sm font-medium mb-3">Active incident</p>
        <div className="bg-white rounded-card border-2 border-brand p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Road accident</span>
            <StatusBadge label="P1 critical" tone="critical" />
          </div>
          <p className="text-xs text-gray-400 mb-4">2.4 km away</p>
          <div className="flex gap-2">
            <Link
              href="/responder/ZS-2026-000145"
              className="btn-secondary flex-1 h-9 text-xs"
            >
              View
            </Link>
            <Link
              href="/responder/ZS-2026-000145"
              className="btn-primary flex-1 h-9 text-xs"
            >
              Accept
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
