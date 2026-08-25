import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZAM-SMART — Report. Respond. Protect.",
  description:
    "AI-assisted emergency and community problem reporting, response and intelligence management system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
