// Hackathon placements. Dates, venues and results come from Nithelan's LinkedIn
// posts, certificates and résumé (verified in an earlier session); linked
// repositories were checked for his commits.

export interface Placement {
  date: string; // ISO date of the final day, used for ordering and the timeline
  when: string; // as displayed
  event: string;
  where: string;
  result: string;
  short: string; // compact label for the hero timeline
  first?: boolean;
  built: string;
  repo?: { label: string; href: string };
  project?: { label: string; href: string };
  note?: string;
}

export const placements: Placement[] = [
  {
    date: "2026-04-15",
    when: "15 Apr 2026",
    event: "Vibeathon 2k26, AI Powered Solutions Expo",
    where: "Gopalan College of Engineering and Management, Bengaluru",
    result: "Best Implementation",
    short: "Best impl.",
    built:
      "A quick-commerce logistics control centre: a React and Express app where simulated agents choose a store, validate inventory, assign dispatch and plan the route.",
    repo: { label: "T7-Logistics", href: "https://github.com/Nithin0029/T7-Logistics" },
  },
  {
    date: "2026-03-17",
    when: "16–17 Mar 2026",
    event: "Vibeathon, state-level hackathon",
    where: "35 teams competing",
    result: "Second place",
    short: "2nd",
    built:
      "T7 Learning Hub, which reads a résumé against job descriptions and returns a ranked skill roadmap, with a browser extension that rates how useful a video is against the goal you set.",
    repo: { label: "T7-Learning-Hub", href: "https://github.com/Nithin0029/T7-Learning-Hub" },
  },
  {
    date: "2026-02-11",
    when: "10–11 Feb 2026",
    event: "24-hour hackathon, Kristu Jayanti University",
    where: "₹8,000 cash award",
    result: "First prize",
    short: "1st",
    first: true,
    built:
      "Smart ASHA Connect, with team T7 Thunderstorms: a progressive web app for ASHA health workers, backed by a service that scores each patient's risk from their vitals and explains it in plain language.",
    project: { label: "Smart ASHA Connect", href: "/#work" },
  },
  {
    date: "2025-11-29",
    when: "28–29 Nov 2025",
    event: "NEXATHON’25",
    where: "Dr. T. Thimmaiah Institute of Technology, KGF",
    result: "Second place",
    short: "2nd",
    built:
      "A real-time classroom engagement system reading facial landmarks, head pose and hand-raise gestures from live video.",
    project: { label: "Attention Scanner", href: "/#work" },
  },
  {
    date: "2025-11-07",
    when: "6–7 Nov 2025",
    event: "GCEM Hacks 3.0",
    where: "Gopalan College of Engineering and Management, with team T7 Thunderstorms",
    result: "Second place",
    short: "2nd",
    built:
      "A digital operations platform for ASHA community health workers: beneficiary records, field visits, emergency alerts and ambulance assignment.",
  },
];
