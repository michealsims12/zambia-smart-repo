import Link from "next/link";
import CitizenNav from "@/components/CitizenNav";

export default function SubmittedPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <CitizenNav active="Report" />
      <div className="max-w-sm mx-auto px-6 py-10 text-center">
        <div className="card">
          <div className="w-12 h-12 rounded-full bg-status-successBg flex items-center justify-center mx-auto mb-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="#27500A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="m5 13 4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-lg font-medium mb-1">Report submitted</h1>
          <p className="text-xs text-gray-400 mb-5">
            Incident ID ZS-2026-000145
          </p>
          <dl className="text-left text-sm space-y-2 mb-6">
            <div className="flex justify-between">
              <dt className="text-gray-400">Status</dt>
              <dd className="font-medium">Under review</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-400">Category</dt>
              <dd>Road accident</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-400">Priority</dt>
              <dd className="text-status-criticalText font-medium">
                P1 critical
              </dd>
            </div>
          </dl>
          <Link href="/tracking/ZS-2026-000145" className="btn-primary w-full mb-2">
            Track report
          </Link>
          <Link href="/dashboard" className="btn-secondary w-full">
            Return to dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
