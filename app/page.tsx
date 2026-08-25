import Link from "next/link";

const steps = [
  {
    title: "Report",
    body: "Describe and pin location",
    icon: (
      <path d="M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm-1 5h8M8 11h8M8 15h5" />
    ),
  },
  {
    title: "AI analyses",
    body: "Severity and priority",
    icon: <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3" />,
  },
  {
    title: "Responder",
    body: "Nearest available unit",
    icon: <path d="M3 16h11V6H3v10Zm11-6h4l3 3v3h-7v-6ZM6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />,
  },
  {
    title: "Resolve",
    body: "Tracked to close-out",
    icon: <path d="m5 13 4 4L19 7" />,
  },
];

const stats = [
  { label: "Reports handled", value: "1,284" },
  { label: "Avg response", value: "14.7 min" },
  { label: "Active responders", value: "56" },
  { label: "Resolved", value: "93%" },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-md bg-brand flex items-center justify-center text-white text-xs font-semibold">
              Z
            </span>
            <span className="font-medium text-sm">ZAM-SMART</span>
          </div>
          <nav className="hidden sm:flex gap-8 text-sm text-gray-600">
            <a href="#how-it-works">How it works</a>
            <a href="#about">About</a>
          </nav>
          <div className="flex gap-2">
            <Link href="/login" className="btn-secondary h-9 px-4 text-xs">
              Login
            </Link>
            <Link href="/register" className="btn-primary h-9 px-4 text-xs">
              Sign up
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-brand-navy text-center px-6 py-20">
        <span className="inline-block bg-white/10 text-brand-light text-xs px-3 py-1 rounded-md mb-4">
          Now live in Kitwe
        </span>
        <h1 className="text-white text-3xl sm:text-4xl font-medium leading-tight max-w-xl mx-auto">
          Report it. We&apos;ll get help moving.
        </h1>
        <p className="text-brand-light text-sm max-w-md mx-auto mt-4 mb-8">
          AI-assisted emergency and community problem reporting, routed to the
          right responder in minutes.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/report"
            className="btn bg-white text-brand-navy hover:bg-gray-100 h-11 px-6"
          >
            Report a problem
          </Link>
          <a href="#how-it-works" className="btn-ghost-dark h-11 px-6">
            See how it works
          </a>
        </div>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-4 border-b border-gray-200">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`text-center py-6 ${
              i > 0 ? "border-l border-gray-200" : ""
            }`}
          >
            <p className="text-xl font-medium text-brand">{s.value}</p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </section>

      <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-center text-xs uppercase tracking-wide text-gray-400 mb-10">
          How it works
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.title} className="text-center">
              <div className="w-11 h-11 rounded-xl bg-brand-tint flex items-center justify-center mx-auto mb-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0C447C"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  {s.icon}
                </svg>
              </div>
              <p className="text-sm font-medium mb-1">{s.title}</p>
              <p className="text-xs text-gray-500">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="about" className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-md bg-brand flex items-center justify-center text-white text-[10px] font-semibold">
                Z
              </span>
              <span className="font-medium text-sm">ZAM-SMART</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              A community reporting and response platform. Prototype stage —
              not an official emergency dispatch service.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium mb-3">Product</p>
            <ul className="text-xs text-gray-500 space-y-2">
              <li>How it works</li>
              <li>For responders</li>
              <li>For administrators</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium mb-3">Resources</p>
            <ul className="text-xs text-gray-500 space-y-2">
              <li>Safety guidelines</li>
              <li>FAQ</li>
              <li>Contact support</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium mb-3">Legal</p>
            <ul className="text-xs text-gray-500 space-y-2">
              <li>Privacy policy</li>
              <li>Terms of use</li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            © 2026 ZAM-SMART. Prototype build.
          </p>
          <div className="flex gap-3 text-gray-400 text-xs">
            <span>X</span>
            <span>Facebook</span>
            <span>Email</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
