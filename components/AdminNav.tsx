import Link from "next/link";

const links = [
  { href: "/admin/incidents", label: "Incidents" },
  { href: "/admin/responders", label: "Responders" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin", label: "Reports" },
];

export default function AdminNav({ active }: { active?: string }) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-16">
        <Link href="/admin" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-md bg-brand flex items-center justify-center text-white text-xs font-semibold">
            Z
          </span>
          <span className="font-medium text-sm">ZAM-SMART admin</span>
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={
                l.label === active
                  ? "text-brand font-medium"
                  : "hover:text-gray-900"
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">
          Logout
        </Link>
      </div>
    </header>
  );
}
