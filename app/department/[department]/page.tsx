import Link from "next/link";
import departmentData from "@/data/departmentData";
import students from "@/data/studentData";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return departmentData.map((d) => ({
    department: d.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{ department: string }>;
}

export default async function DepartmentDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const deptId = Number(resolvedParams.department);

  const track = departmentData.find((d) => d.id === deptId);

  if (!track) {
    notFound();
  }

  const enrolledStudents = students.filter((s) => track.students.includes(s.id));

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/department" className="hover:text-blue-600 transition-colors">
          Departments
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">{track.name}</span>
      </nav>

      {/* Main Track Hero Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-100 text-blue-700">
                  {track.department}
                </span>
                <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  {track.code}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                {track.name}
              </h1>
            </div>
            <Link
              href="/department"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors self-start md:self-auto"
            >
              &larr; Back to Tracks
            </Link>
          </div>

          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
            {track.description}
          </p>

          {/* Academic Track Parameters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/60">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">
                Academic Lead
              </span>
              <p className="text-sm font-bold text-slate-900 mt-1">
                {track.academicLead}
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/60">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">
                Primary Core Lab
              </span>
              <p className="text-sm font-bold text-slate-900 mt-1">
                {track.primaryCoreLab}
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/60">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">
                Total Enrollment
              </span>
              <p className="text-sm font-bold text-slate-900 mt-1">
                {enrolledStudents.length} Active Students
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/60">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">
                Curriculum Cycle
              </span>
              <p className="text-sm font-bold text-slate-900 mt-1">
                {track.curriculumCycle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enrolled Students Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-slate-900">
              Enrolled Students in this Specialization
            </h2>
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
              {enrolledStudents.length}
            </span>
          </div>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Filtered by Track: <strong className="text-slate-800">{track.name}</strong>
          </span>
        </div>

        {enrolledStudents.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-xl border border-slate-200 p-6 text-slate-500">
            No enrolled students currently registered in this track.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledStudents.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex justify-center items-center font-bold text-sm">
                      {s.initials}
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {s.studentId}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {s.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{s.email}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                      {s.department}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {s.studyYear}
                    </span>
                  </div>
                </div>

                <Link
                  className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 hover:bg-blue-50 text-blue-600 font-semibold text-xs flex items-center justify-between transition-colors"
                  href={`/studentData/${s.id}`}
                >
                  <span>View Student Profile</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}