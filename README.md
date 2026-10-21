# Campus Directory (Student & Department Explorer)

A modern, responsive academic web application built with **Next.js (App Router)** and **Tailwind CSS**. Campus Directory allows academic administrators, faculty, and students to browse student profiles, filter through department tracks, review academic standings, and examine course enrollments.

---

## 🚀 Key Features

- **Dynamic Student Directory**:
  - Live search filtering by student name, roll ID, or enrolled subject.
  - Department filtering (Computer Science, Information Technology, Mechanical Engineering, Civil Engineering).
  - Academic standing badges, contact details, and term progress.
- **Academic Department Explorer**:
  - Overview of degree specializations, curriculum cycles, and assigned primary research labs.
  - Dynamic enrollment roster mapping students to their respective degree tracks.
  - Faculty lead information and department track identifiers.
- **Detailed Student Profiles**:
  - Individual student view displaying personal background, academic status, and semester history.
  - Structured enrolled coursework table with course codes, descriptions, and category tags.
- **Responsive & Modern Design**:
  - Polished responsive layouts designed for mobile, tablet, and desktop viewports.
  - Clean card and table aesthetics with accessible typography and high contrast badges.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Project Structure

```text
├── app/
│   ├── about/                    # About platform information page
│   ├── department/               # Department tracks directory
│   │   └── [department]/         # Detailed track & enrolled roster
│   ├── studentData/
│   │   └── [student]/            # Comprehensive individual student profile
│   ├── favicon.ico
│   ├── globals.css               # Global styles & Tailwind configuration
│   ├── layout.tsx                # Root layout with persistent header & navigation
│   ├── not-found.tsx             # Custom 404 handler
│   └── page.tsx                  # Student directory homepage with live search & filters
├── data/
│   ├── departmentData.js         # Department programs, labs, and track metadata
│   └── studentData.js            # Enrolled student records and course data
├── public/                       # Static brand logos and iconography
├── package.json
└── tsconfig.json
```

---

## 🚦 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production

```bash
npm run build
npm run start
```

---

## 📄 Routes & Architecture

| Route | Purpose | Description |
|---|---|---|
| `/` | Student Directory | Searchable list of students with real-time department filtering |
| `/department` | Department Explorer | Overview of academic departments, specialization tracks, and labs |
| `/department/[id]` | Department Detail | Detailed specialization view with track lead, lab info, and enrolled students |
| `/studentData/[id]` | Student Profile | Full student academic profile, enrolled subjects, and standing |
| `/about` | About Directory | Project overview, feature summary, and architecture notes |
| `/not-found` | 404 Not Found | Graceful fallback page for missing routes or invalid student IDs |

---

## 📝 License

This project is licensed under the MIT License.
