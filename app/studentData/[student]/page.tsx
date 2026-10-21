import studentData from "@/data/studentData";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return studentData.map((s) => ({
    student: s.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{ student: string }>;
}

export default async function StudentDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const studentId = Number(resolvedParams.student);

  const student = studentData.find((s) => s.id === studentId);

  if (!student) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Students
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">{student.name}</span>
      </nav>

      {/* Main Student Profile Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Header Profile Info */}
        <div className="p-6 sm:p-8 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-extrabold text-2xl border border-blue-200">
              {student.initials}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {student.name}
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  {student.studentId}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {student.status}
                </span>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors"
          >
            &larr; Back to Directory
          </Link>
        </div>

        {/* Academic Details Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
          <div>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">
              Department
            </span>
            <p className="text-sm font-semibold text-slate-900 mt-1">
              {student.department}
            </p>
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">
              Study Year
            </span>
            <p className="text-sm font-semibold text-slate-900 mt-1">
              {student.studyYear}
            </p>
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">
              Email
            </span>
            <a
              href={`mailto:${student.email}`}
              className="text-sm font-semibold text-blue-600 hover:underline mt-1 block truncate"
            >
              {student.email}
            </a>
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">
              Enrolled Term
            </span>
            <p className="text-sm font-semibold text-slate-900 mt-1">
              {student.enrolled}
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="p-6 sm:p-8 border-b border-slate-200 space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            About the Student
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {student.about}
          </p>
        </div>

        {/* Academic Standing */}
        <div className="p-6 sm:p-8 border-b border-slate-200 space-y-3">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Academic Status & Standing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/60">
              <span className="text-xs text-slate-500 font-medium">Primary Major</span>
              <p className="text-sm font-bold text-slate-800 mt-0.5">
                {student.academicDetails.department}
              </p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
              <span className="text-xs text-emerald-600 font-medium">Current Academic Standing</span>
              <p className="text-sm font-bold text-emerald-800 mt-0.5">
                {student.academicDetails.currentStanding}
              </p>
            </div>
          </div>
        </div>

        {/* Enrolled Subjects Table */}
        <div className="p-6 sm:p-8 space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Enrolled Coursework
          </h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3">Course Code</th>
                  <th className="px-4 py-3">Subject Name</th>
                  <th className="px-4 py-3">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {student.enrolledSubjects.map((course, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-4 py-3 font-mono font-semibold text-blue-600">
                      {course.code}
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {course.name}
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {course.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
