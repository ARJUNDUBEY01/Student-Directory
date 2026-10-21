import Image from "next/image";
import departmentData from "@/data/departmentData";
import Link from "next/link";

export default function DepartmentsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Academic Departments & Tracks
        </h1>
        <p className="mt-2 text-base text-slate-600">
          Explore specialized degree tracks, research concentrations, and departmental programs.
        </p>
      </div>

      {/* Grid of Department Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {departmentData.map((e) => {
          return (
            <div
              key={e.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center p-2">
                      <Image
                        src="/earthlogo.png"
                        alt="Department icon"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        {e.name}
                      </h2>
                      <span className="text-xs font-semibold text-blue-600">
                        {e.department}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                    {e.code}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {e.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="text-slate-400">Lead:</span>
                    <span className="text-slate-700">{e.academicLead}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="text-slate-400">Lab:</span>
                    <span className="text-slate-700">{e.primaryCoreLab}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="text-slate-400">Students:</span>
                    <span className="text-blue-600 font-semibold">{e.students.length} Enrolled</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/department/${e.id}`}
                className="px-6 py-3 border-t border-slate-100 bg-slate-50/50 hover:bg-blue-50 text-blue-600 font-semibold text-sm flex items-center justify-between transition-colors"
              >
                <span>View Specialization Track</span>
                <span>&rarr;</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}