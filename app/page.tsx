"use client";

import { useState, useMemo } from "react";
import studentData from "@/data/studentData";
import Link from "next/link";

export default function StudentDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("");

  const filteredStudents = useMemo(() => {
    return studentData.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.studyYear.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDept =
        !selectedDept || student.department === selectedDept;

      return matchesSearch && matchesDept;
    });
  }, [searchTerm, selectedDept]);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Student Directory
        </h1>
        <p className="mt-2 text-base text-slate-600">
          Browse, filter, and inspect enrolled student profiles, academic standings, and departmental programs.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-3/5 flex items-center gap-3">
          <label htmlFor="search" className="text-sm font-semibold text-slate-700 whitespace-nowrap">
            Search:
          </label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by student name, ID, or subject..."
            className="w-full px-4 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 transition"
          />
        </div>

        <div className="w-full md:w-2/5 flex items-center justify-start md:justify-end gap-3">
          <label htmlFor="dept" className="text-sm font-semibold text-slate-700 whitespace-nowrap">
            Department:
          </label>
          <select
            id="dept"
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="w-full sm:w-auto px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 cursor-pointer"
          >
            <option value="">All Departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>Showing <strong className="text-slate-800">{filteredStudents.length}</strong> of {studentData.length} students</span>
        {(searchTerm || selectedDept) && (
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedDept("");
            }}
            className="text-xs text-blue-600 hover:text-blue-800 font-semibold cursor-pointer underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Student Cards Grid */}
      {filteredStudents.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
          <p className="text-slate-500 text-base">No students matched your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((e) => {
            return (
              <div
                key={e.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-5 space-y-4">
                  {/* Top Bar with Initials Badge and Student ID */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-700 flex justify-center items-center font-bold text-sm">
                      {e.initials}
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {e.studentId}
                    </span>
                  </div>

                  {/* Student Name */}
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {e.name}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">{e.email}</p>
                  </div>

                  {/* Department and Study Year Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                      {e.department}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {e.studyYear}
                    </span>
                  </div>
                </div>

                {/* Bottom Action */}
                <Link
                  className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 hover:bg-blue-50 text-blue-600 font-semibold text-sm flex items-center justify-between transition-colors"
                  href={`/studentData/${e.id}`}
                >
                  <span>View Student Profile</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}