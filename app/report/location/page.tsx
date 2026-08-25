import CitizenNav from "@/components/CitizenNav";

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <CitizenNav active="Report" />
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="card">
          <h1 className="text-lg font-medium mb-4">Select location</h1>
          <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="#E24B4A"
              className="w-8 h-8"
            >
              <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
          </div>
          <div className="text-xs text-gray-500 space-y-1 mb-5">
            <p>Latitude: -12.8xxxx</p>
            <p>Longitude: 28.2xxxx</p>
            <p>Address: Kitwe Central</p>
          </div>
          <a href="/report/ai-result" className="btn-primary w-full">
            Confirm location
          </a>
        </div>
      </div>
    </main>
  );
}
