import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Campus Directory - Student & Department Explorer",
  description: "Comprehensive student directory, academic department explorer, and student records system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Campus Directory Logo"
                width={180}
                height={40}
                className="h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </Link>

            <nav className="flex items-center gap-1 sm:gap-2 font-medium text-sm">
              <Link
                href="/"
                className="px-3.5 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold"
              >
                Students
              </Link>
              <Link
                href="/department"
                className="px-3.5 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold"
              >
                Departments
              </Link>
              <Link
                href="/about"
                className="px-3.5 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold"
              >
                About
              </Link>
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
