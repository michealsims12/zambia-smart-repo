import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";

export default function ResponderIncidentPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-sm card">
        <h1 className="text-lg font-medium mb-0.5">{params.id}</h1>
        <StatusBadge label="P1 critical" tone="critical" />

        <p className="text-xs text-gray-500 mt-3">
          Kitwe Central — 2.4 km
        </p>
        <p className="text-sm text-gray-600 mt-2 mb-2 leading-relaxed">
          Two vehicles have collided. People appear injured.
        </p>
        <p className="text-xs text-gray-400 mb-5">
          AI recommendation: medical + rescue
        </p>

        <Link
          href={`/responder/${params.id}/respond`}
          className="btn-primary w-full mb-2"
        >
          Accept incident
        </Link>
        <div className="flex gap-2">
          <button className="btn-secondary flex-1 text-xs">Decline</button>
          <button className="btn-secondary flex-1 text-xs">View map</button>
        </div>
      </div>
    </main>
  );
}
