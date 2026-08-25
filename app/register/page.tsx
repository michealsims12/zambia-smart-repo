import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 justify-center mb-6">
          <span className="w-7 h-7 rounded-md bg-brand flex items-center justify-center text-white text-xs font-semibold">
            Z
          </span>
          <span className="font-medium text-sm">ZAM-SMART</span>
        </div>
        <div className="card">
          <h1 className="text-lg font-medium mb-5">Create account</h1>
          <form action="/dashboard" className="space-y-3">
            <div>
              <label className="label">Full name</label>
              <input className="input" placeholder="Richard Banda" />
            </div>
            <div>
              <label className="label">Email</label>
              <input className="input" placeholder="name@example.com" />
            </div>
            <div>
              <label className="label">Phone</label>
              <input className="input" placeholder="+260 9xx xxx xxx" />
            </div>
            <div>
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="••••••••" />
            </div>
            <div>
              <label className="label">Confirm password</label>
              <input type="password" className="input" placeholder="••••••••" />
            </div>
            <div>
              <label className="label">Location</label>
              <input className="input" placeholder="Kitwe, Zambia" />
            </div>
            <button className="btn-primary w-full mt-2" type="submit">
              Create account
            </button>
          </form>
          <p className="text-center text-xs text-gray-500 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-brand">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
