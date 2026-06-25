import Link from "next/link";

const sections = [
  {
    title: "⚔️ Weapons",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "React Native",
      "Node.js",
    ],
  },

  {
    title: "🔮 Artifacts",
    items: [
      "GraphQL",
      "Apollo Client",
      "Redux",
      "Zustand",
      "RTK Query",
    ],
  },

  {
    title: "🛡️ Armor",
    items: [
      "Performance",
      "Accessibility",
      "Testing",
      "Analytics",
      "Observability",
    ],
  },

  {
    title: "🏆 Legendary Items",
    items: [
      "Module Federation",
      "Micro Frontends",
      "System Design",
      "Enterprise Architecture",
      "AI Agents",
    ],
  },

  {
    title: "🤖 AI Toolkit",
    items: [
      "OpenAI",
      "Prompt Engineering",
      "RAG",
      "MCP",
      "LangGraph",
    ],
  },
];

export default function InventoryPage() {
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
            Arsenal
          </p>

          <h1 className="text-6xl font-bold text-[var(--text)] mt-2">
            ⚔️ Inventory
          </h1>

          <p className="mt-4 text-zinc-400 max-w-2xl">
            Technologies, frameworks and tools gathered
            throughout my engineering journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          {sections.map((section) => (
            <div
              key={section.title}
              className="
                rounded-3xl
                border
                border-purple-500/20
                bg-[#0B1120]
                p-6
              "
            >
              <h2 className="text-2xl font-bold text-[var(--text)] mb-6">
                {section.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-full
                      border
                      border-purple-500/20
                      bg-purple-500/5
                      px-4
                      py-2
                      text-sm
                      text-[var(--text-muted)]
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}