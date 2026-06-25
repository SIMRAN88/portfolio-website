import Link from "next/link";

const achievements = [
  {
    title: "QuickBooks Advanced",
    year: "2021",
    description:
      "Built enterprise-scale experiences for Intuit customers.",
  },

  {
    title: "Micro Frontend Architect",
    year: "2023",
    description:
      "Implemented Module Federation architecture and scalable frontend platforms.",
  },

  {
    title: "Performance Hunter",
    year: "2022",
    description:
      "Improved application performance and Core Web Vitals.",
  },

  {
    title: "React Native Explorer",
    year: "2025",
    description:
      "Built mobile applications using React Native and GraphQL.",
  },

  {
    title: "Open Source Adventurer",
    year: "2021",
    description:
      "Contributed to open-source projects during Hacktoberfest.",
  },

  {
    title: "Mentor",
    year: "2024",
    description:
      "Mentored engineers through code reviews and technical guidance.",
  },

  {
    title: "AI Explorer",
    year: "2025",
    description:
      "Building AI-powered products and autonomous agents.",
  },

  {
    title: "System Designer",
    year: "2024",
    description:
      "Designed scalable frontend architectures serving enterprise customers.",
  },
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-[#070B1A]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <Link
          href="/"
          className="
            text-zinc-500
            hover:text-[var(--accent)]
            transition-colors
          "
        >
          ← Return to Quest
        </Link>

        <div className="mt-10">
          <p className="uppercase tracking-[0.3em] text-[var(--accent)] text-sm">
            Milestones
          </p>

          <h1 className="text-6xl font-bold text-[var(--text)] mt-2">
            🏆 Achievements
          </h1>

          <p className="mt-4 text-zinc-400 max-w-2xl">
            Major milestones unlocked throughout my engineering journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="
                rounded-3xl
                border
                border-purple-500/20
                bg-[#0B1120]
                p-6
                hover:border-purple-500/40
                transition-all
              "
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[var(--text)]">
                  🏆 {achievement.title}
                </h2>

                <span className="text-[var(--accent)] text-sm">
                  {achievement.year}
                </span>
              </div>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}