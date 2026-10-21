import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          About Campus Directory
        </h1>
        <p className="mt-2 text-base text-slate-600">
          A centralized academic management and student discovery portal designed for modern educational institutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
            🎓
          </div>
          <h2 className="text-xl font-bold text-slate-900">Student Directory</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Browse through enrolled students across various academic years and disciplines. Inspect individual profiles, enrollments, and academic standing with complete detail.
          </p>
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            Explore Students &rarr;
          </Link>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg">
            🏛️
          </div>
          <h2 className="text-xl font-bold text-slate-900">Academic Departments</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Discover engineering and science departments, including specialized tracks, research laboratories, curriculum cycles, and assigned academic leads.
          </p>
          <Link
            href="/department"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            Explore Departments &rarr;
          </Link>
        </div>
      </div>

      <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Platform Features</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
          <li className="flex items-center gap-2">
            <span className="text-blue-600">✓</span> Dynamic student profile visualization
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-600">✓</span> Department and specialization directory
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-600">✓</span> Track-based student filtering
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-600">✓</span> Coursework & enrolled subject monitoring
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-600">✓</span> Built with Next.js App Router & Tailwind CSS
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-600">✓</span> Fast server rendering and responsive layout
          </li>
        </ul>
      </div>
    </div>
  );
}
