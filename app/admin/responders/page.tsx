import AdminNav from "@/components/AdminNav";

const responders = [
  { name: "Samuel", type: "Medical", status: "Available", distance: "2.4 km" },
  { name: "John", type: "Rescue", status: "Busy", distance: "1.8 km" },
  { name: "Peter", type: "Fire", status: "Available", distance: "4.1 km" },
  { name: "Mary", type: "Medical", status: "Available", distance: "5.2 km" },
];

export default function RespondersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AdminNav active="Responders" />
      <div className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-lg font-medium mb-4">Responders</h1>
        <div className="bg-white rounded-card border border-gray-200 divide-y divide-gray-200">
          {responders.map((r) => (
            <div
              key={r.name}
              className="flex items-center justify-between px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-tint text-brand-deep text-xs font-medium flex items-center justify-center">
                  {r.name[0]}
                </span>
                <div>
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-xs font-medium ${
                    r.status === "Available"
                      ? "text-status-successText"
                      : "text-gray-400"
                  }`}
                >
                  {r.status}
                </p>
                <p className="text-xs text-gray-400">{r.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
