import CitizenNav from "@/components/CitizenNav";
import StatusBadge from "@/components/StatusBadge";

export default function AiResultPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <CitizenNav active="Report" />
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="card">
          <h1 className="text-lg font-medium mb-4">AI incident analysis</h1>
          <p className="text-sm text-gray-500 mb-5 leading-relaxed">
            &ldquo;Two vehicles have collided. People appear injured.&rdquo;
          </p>

          <dl className="space-y-3 text-sm mb-5">
            <div className="flex justify-between">
              <dt className="text-gray-400">Category</dt>
              <dd className="font-medium">Road accident</dd>
            </div>
            <div className="flex justify-between items-center">
              <dt className="text-gray-400">Severity</dt>
              <dd>
                <StatusBadge label="Critical" tone="critical" />
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-400">Priority</dt>
              <dd className="font-medium">P1 — immediate</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-400">Confidence</dt>
              <dd className="font-medium">94%</dd>
            </div>
          </dl>

          <a href="/report/submitted" className="btn-primary w-full">
            Submit report
          </a>
        </div>
      </div>
    </main>
  );
}
