import Link from "next/link";

export default function RespondPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
        <div className="card text-center">
          <span className="inline-block bg-brand-tint text-brand-deep text-xs px-3 py-1 rounded-md mb-3">
            Responding
          </span>
          <h2 className="text-lg font-medium mb-0.5">{params.id}</h2>
          <p className="text-xs text-gray-400 mb-4">1.2 km remaining</p>
          <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="1.6" className="w-7 h-7">
              <path d="m3 11 18-8-8 18-2-8-8-2Z" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="space-y-2">
            <button className="btn-secondary w-full">Open navigation</button>
            <button className="btn-secondary w-full">Call reporter</button>
            <button className="btn-primary w-full">Mark arrived</button>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-medium mb-4">Close incident</h2>
          <form action="/responder" className="space-y-3">
            <div>
              <label className="label">Actions taken</label>
              <textarea
                className="input h-16 py-2 resize-none"
                placeholder="Describe the response"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">People assisted</label>
                <input className="input" defaultValue={4} />
              </div>
              <div>
                <label className="label">Resources used</label>
                <input className="input" defaultValue="Ambulance" />
              </div>
            </div>
            <div>
              <label className="label">Outcome</label>
              <select className="input">
                <option>Resolved</option>
                <option>Partially resolved</option>
                <option>Referred</option>
                <option>Unable to resolve</option>
              </select>
            </div>
            <label className="btn-secondary w-full cursor-pointer">
              Upload evidence
              <input type="file" className="hidden" />
            </label>
            <button type="submit" className="btn-primary w-full mt-1">
              Submit response
            </button>
          </form>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 mt-6">
        <Link href="/responder">Back to responder dashboard</Link>
      </p>
    </main>
  );
}
