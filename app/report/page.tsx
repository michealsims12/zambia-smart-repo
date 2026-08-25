import CitizenNav from "@/components/CitizenNav";

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <CitizenNav active="Report" />
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="card">
          <h1 className="text-lg font-medium mb-1">Report a problem</h1>
          <p className="text-xs text-gray-400 mb-5">
            Emergency or community issue
          </p>

          <form action="/report/location" className="space-y-4">
            <div className="flex gap-2">
              <button
                type="button"
                className="flex-1 h-9 rounded-lg border-2 border-brand text-brand text-xs font-medium"
              >
                Emergency
              </button>
              <button
                type="button"
                className="flex-1 h-9 rounded-lg border border-gray-200 text-xs font-medium text-gray-600"
              >
                Community
              </button>
            </div>

            <div>
              <label className="label">Category</label>
              <select className="input">
                <option>Road accident</option>
                <option>Fire</option>
                <option>Flood</option>
                <option>Streetlight</option>
                <option>Drainage</option>
              </select>
            </div>

            <div>
              <label className="label">Description</label>
              <textarea
                className="input h-24 py-2 resize-none"
                placeholder="Describe what happened"
              />
            </div>

            <div>
              <label className="label">Location</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="btn-secondary flex-1 h-9 text-xs"
                >
                  Detect my location
                </button>
                <button
                  type="button"
                  className="btn-secondary flex-1 h-9 text-xs"
                >
                  View on map
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <label className="btn-secondary flex-1 h-9 text-xs cursor-pointer">
                Upload photo
                <input type="file" className="hidden" />
              </label>
              <label className="btn-secondary flex-1 h-9 text-xs cursor-pointer">
                Upload video
                <input type="file" className="hidden" />
              </label>
            </div>

            <button type="submit" className="btn-primary w-full mt-2">
              Continue
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
