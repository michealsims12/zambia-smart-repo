import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 justify-center mb-6">
          <span className="w-7 h-7 rounded-md bg-brand flex items-center justify-center text-white text-xs font-semibold">
            Z
          </span>
          <span className="font-medium text-sm">ZAM-SMART</span>
        </div>
        <div className="card">
          <h1 className="text-lg font-medium mb-5">Login</h1>
          <form action="/dashboard" className="space-y-4">
            <div>
              <label className="label">Email or phone</label>
              <input className="input" placeholder="name@example.com" />
            </div>
            <div>
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="••••••••" />
            </div>
            <button className="btn-primary w-full" type="submit">
              Login
            </button>
          </form>
          <div className="flex items-center justify-between mt-4 text-xs">
            <Link href="/login" className="text-brand">
              Forgot password?
            </Link>
            <Link href="/register" className="text-gray-500">
              Create account
            </Link>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          <Link href="/">Back to home</Link>
        </p>
      </div>
    </main>
  );
}
