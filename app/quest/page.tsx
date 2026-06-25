import Link from "next/link";

const quests = [
  {
    year: "2018",
    title: "The Beginning",
    company: "Tricon Infotech",
    status: "Completed",
    description:
      "Started my engineering adventure. Learned JavaScript, Angular, frontend fundamentals and enterprise software development.",
    rewards: [
      "JavaScript",
      "Angular",
      "Frontend Fundamentals",
    ],
  },
  {
    year: "2020",
    title: "Rise of the Frontend Engineer",
    company: "Tricon Infotech",
    status: "Completed",
    description:
      "Built enterprise applications and modern web experiences. Began focusing heavily on React and scalable UI architecture.",
    rewards: [
      "React",
      "TypeScript",
      "UI Architecture",
    ],
  },
  {
    year: "2021",
    title: "The Intuit Quest",
    company: "Intuit",
    status: "Completed",
    description:
      "Joined Intuit and worked on QuickBooks Advanced. Built customer-facing experiences used by thousands of businesses.",
    rewards: [
      "React",
      "GraphQL",
      "Enterprise Scale",
      "Performance",
    ],
  },
  {
    year: "2022",
    title: "The Architect Path",
    company: "Intuit",
    status: "Completed",
    description:
      "Led frontend initiatives, drove architecture discussions, improved performance and mentored engineers.",
    rewards: [
      "Leadership",
      "System Design",
      "Observability",
      "Mentoring",
    ],
  },
  {
    year: "2023",
    title: "Senior Engineer Ascension",
    company: "Intuit",
    status: "Completed",
    description:
      "Delivered scalable frontend platforms, micro frontend solutions and large-scale customer experiences.",
    rewards: [
      "Module Federation",
      "Micro Frontends",
      "Scalability",
    ],
  },
  {
    year: "2025",
    title: "AI Engineering Journey",
    company: "Current Quest",
    status: "Active",
    description:
      "Building AI-powered products, copilots, parent AI agents, GraphQL platforms and exploring agentic systems.",
    rewards: [
      "OpenAI",
      "Agents",
      "RAG",
      "MCP",
      "AI Products",
    ],
  },
];

export default function QuestLogPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[var(--bg)]
        text-[var(--text)]
      "
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/"
          className="
            text-[var(--text-muted)]
            transition-colors
            hover:text-[var(--accent)]
          "
        >
          ← Return to Quest
        </Link>

        {/* Header */}

        <div className="mt-10">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-[var(--accent)]
            "
          >
            Campaign History
          </p>

          <h1
            className="
              mt-3
              text-5xl
              font-bold
              md:text-6xl
            "
          >
            📜 Quest Log
          </h1>

          <p
            className="
              mt-4
              max-w-3xl
              text-lg
              text-[var(--text-muted)]
            "
          >
            Every engineer has a story.
            These are the major quests that shaped my journey
            from Associate Software Engineer to Senior Frontend
            Engineer and now AI Builder.
          </p>
        </div>

        {/* Timeline */}

        <div className="mt-16 space-y-8">
          {quests.map((quest) => (
            <div
              key={quest.title}
              className="
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-8
                shadow-sm
              "
            >
              <div
                className="
                  flex
                  flex-wrap
                  items-start
                  justify-between
                  gap-4
                "
              >
                <div>
                  <p
                    className="
                      text-sm
                      font-medium
                      text-[var(--accent)]
                    "
                  >
                    {quest.year}
                  </p>

                  <h2
                    className="
                      mt-2
                      text-3xl
                      font-bold
                    "
                  >
                    {quest.title}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-[var(--text-muted)]
                    "
                  >
                    {quest.company}
                  </p>
                </div>

                <span
                  className={`
                    rounded-full
                    border
                    px-4
                    py-2
                    text-sm
                    font-medium
                    ${
                      quest.status === "Active"
                        ? "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400"
                        : "border-[var(--border)] bg-[var(--card-secondary)] text-[var(--text-muted)]"
                    }
                  `}
                >
                  {quest.status}
                </span>
              </div>

              <p
                className="
                  mt-6
                  leading-relaxed
                  text-[var(--text-muted)]
                "
              >
                {quest.description}
              </p>

              <div className="mt-8">
                <p
                  className="
                    mb-3
                    text-sm
                    font-medium
                    text-[var(--text-muted)]
                  "
                >
                  Rewards Unlocked
                </p>

                <div className="flex flex-wrap gap-2">
                  {quest.rewards.map((reward) => (
                    <span
                      key={reward}
                      className="
                        rounded-full
                        border
                        border-[var(--border)]
                        bg-[var(--card-secondary)]
                        px-3
                        py-2
                        text-sm
                        text-[var(--text)]
                      "
                    >
                      ✨ {reward}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}