import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col justify-center items-center text-center py-12 px-4">
      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-2xl border border-blue-100 mb-4">
        404
      </div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
        Page Not Found
      </h1>
      <p className="mt-2 text-sm text-slate-600 max-w-md">
        The record, department track, or page you are looking for does not exist or may have been moved.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-xs"
        >
          View Student Directory
        </Link>
        <Link
          href="/department"
          className="px-4 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors shadow-xs"
        >
          Browse Departments
        </Link>
      </div>
    </div>
  );
}