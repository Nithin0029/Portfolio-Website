// Facts about Nithelan used across the site. Every value here is verified —
// see docs/migration-plan.md for sources.

export const person = {
  name: "Nithelan Jayakumar",
  givenName: "Nithelan",
  location: "Bengaluru, India",
  degree: "B.E. Computer Science",
  institution: "Gopalan College of Engineering and Management",
  years: "2023–2027",
  semester: "7th semester",
  cgpa: "8.7",
  availability: "Open to internships, entry-level roles and freelance work",
} as const;

export const links = {
  email: "nithelanjayakumar@gmail.com",
  github: "https://github.com/Nithin0029",
  githubHandle: "Nithin0029",
  linkedin: "https://www.linkedin.com/in/nithelan-jayakumar-bb6246244/",
  resume: "/resume/Nithelan-Jayakumar-Resume.pdf",
  resumeSize: "52 KB",
} as const;

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#stack", label: "Stack" },
  { href: "/#about", label: "About" },
  { href: "/#freelance", label: "Freelance" },
] as const;
