// Technologies, each tied to the repositories where Nithelan's own commits use it.
// Checked against the repos on 23 Sep 2026 (requirements.txt, package.json,
// build.gradle.kts and file-level git history). Items that only appear in code
// someone else committed are left out until he confirms them.

export const evidence = [
  { key: "as", label: "Attention Scanner", href: "/#work" },
  { key: "et", label: "Expense Tracker", href: "/#work" },
  { key: "t7", label: "T7-Logistics", href: "https://github.com/Nithin0029/T7-Logistics" },
  { key: "sl", label: "Study light", href: "https://github.com/Nithin0029/Smart-Room" },
] as const;

export type EvidenceKey = (typeof evidence)[number]["key"];

export interface Tech {
  name: string;
  in: EvidenceKey[];
}

export const stack: { group: string; items: Tech[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", in: ["as"] },
      { name: "Kotlin", in: ["et"] },
      { name: "JavaScript", in: ["as", "t7"] },
      { name: "SQL", in: ["et"] },
      { name: "C++", in: ["sl"] },
    ],
  },
  {
    group: "Computer vision",
    items: [
      { name: "MediaPipe", in: ["as"] },
      { name: "OpenCV", in: ["as"] },
      { name: "NumPy", in: ["as"] },
    ],
  },
  {
    group: "Android",
    items: [
      { name: "Jetpack Compose", in: ["et"] },
      { name: "Room", in: ["et"] },
      { name: "Hilt", in: ["et"] },
      { name: "WorkManager", in: ["et"] },
      { name: "Retrofit", in: ["et"] },
      { name: "Biometric API", in: ["et"] },
    ],
  },
  {
    group: "Web and services",
    items: [
      { name: "FastAPI", in: ["as"] },
      { name: "React", in: ["as", "t7"] },
      { name: "Vite", in: ["as", "t7"] },
      { name: "Node.js and Express", in: ["t7"] },
      { name: "Google Sheets API", in: ["et"] },
    ],
  },
  {
    group: "Hardware",
    items: [
      { name: "ESP32", in: ["sl"] },
      { name: "PlatformIO", in: ["sl"] },
    ],
  },
  {
    group: "Tooling",
    items: [
      { name: "Git", in: ["as", "et", "t7", "sl"] },
      { name: "Docker", in: ["as"] },
      { name: "Gradle", in: ["et"] },
      { name: "unittest", in: ["as"] },
    ],
  },
];
