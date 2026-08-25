import CitizenNav from "@/components/CitizenNav";
import StatusBadge from "@/components/StatusBadge";

const steps = [
  { label: "Reported", time: "14:02", state: "done" as const },
  { label: "Reviewed", time: "14:03", state: "done" as const },
  { label: "Assigned", time: "14:05", state: "done" as const },
  { label: "Responder en route", time: "In progress", state: "active" as const },
  { label: "Arrived", time: "", state: "pending" as const },
  { label: "Resolved", time: "", state: "pending" as const },
];

function StepIcon({ state }: { state: "done" | "active" | "pending" }) {
  if (state === "done") {
    return (
      <svg viewBox="0 0 24 24" fill="#639922" className="w-4 h-4">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.2 14.2-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7Z" />
      </svg>
    );
  }
  if (state === "active") {
    return <span className="w-3 h-3 rounded-full bg-brand block" />;
  }
  return <span className="w-3 h-3 rounded-full border-2 border-gray-300 block" />;
}

export default function TrackingPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-gray-50">
      <CitizenNav active="My reports" />
      <div className="max-w-sm mx-auto px-6 py-8">
        <div className="card">
          <h1 className="text-lg font-medium mb-0.5">{params.id}</h1>
          <p className="text-xs text-gray-400 mb-2">
            Road accident — Kitwe Central
          </p>
          <StatusBadge label="P1 critical" tone="critical" />

          <div className="mt-6 space-y-0">
            {steps.map((s, i) => (
              <div key={s.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <StepIcon state={s.state} />
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 my-1" />
                  )}
                </div>
                <div className="pb-6">
                  <p
                    className={`text-sm ${
                      s.state === "pending" ? "text-gray-400" : "font-medium"
                    }`}
                  >
                    {s.label}
                  </p>
                  {s.time && (
                    <p className="text-xs text-gray-400 mt-0.5">{s.time}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
