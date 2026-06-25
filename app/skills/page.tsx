import Link from "next/link";
import SkillTree from "@/app/components/skills/SkillTree";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#070B1A]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Back Button */}

        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-zinc-500
            hover:text-[var(--accent)]
            transition-colors
          "
        >
          ← Return to Quest
        </Link>

        {/* Hero */}

        <section className="mt-10">
          <p className="uppercase tracking-[0.3em] text-[var(--accent)] text-sm">
            Engineering Mastery
          </p>

          <h1 className="mt-3 text-5xl md:text-6xl font-bold text-[var(--text)]">
            ⚔️ Skill Tree
          </h1>

          <p className="mt-4 max-w-3xl text-zinc-400 text-lg">
            My journey from Associate Software Engineer to Senior Software
            Engineer across Frontend Engineering, Architecture, Leadership,
            Performance and AI.
          </p>

          {/* XP */}

          <div
            className="
              mt-8
              rounded-2xl
              border
              border-purple-500/35
              shadow-[0_0_20px_rgba(168,85,247,0.08)]
              bg-[#0B1120]
              p-6
            "
          >
            <div className="flex items-center justify-between">
              <span className="text-[var(--text)] font-semibold">
                Level 12
              </span>

              <span className="text-[var(--accent)]">
                18,420 / 25,000 XP
              </span>
            </div>

            <div className="mt-4 h-3 rounded-full bg-black/30 overflow-hidden">
              <div
                className="
                  h-full
                  w-[74%]
                  rounded-full
                  bg-gradient-to-r
                  from-purple-500
                  to-fuchsia-500
                "
              />
            </div>
          </div>
        </section>

        {/* Career Timeline */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[var(--text)]">
            🗺️ Career Journey
          </h2>

          <div className="mt-8 space-y-6">
            <TimelineItem
              year="2018"
              title="Associate Software Engineer"
              company="Tricon Infotech"
              description="Started my professional engineering journey."
            />

            <TimelineItem
              year="2020"
              title="Software Engineer"
              company="Tricon Infotech"
              description="Built modern frontend applications and enterprise solutions."
            />

            <TimelineItem
              year="2021"
              title="Software Engineer II"
              company="Intuit"
              description="Joined Intuit and worked on QuickBooks Advanced."
            />

            <TimelineItem
              year="2023"
              title="Senior Software Engineer"
              company="Intuit"
              description="Led architecture initiatives and enterprise frontend systems."
            />

            <TimelineItem
              year="2025"
              title="AI Engineering Journey"
              company="Current Quest"
              description="Building AI-powered products and agentic systems."
            />
          </div>
        </section>

        {/* Skill Tree */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-8">
            🌳 Skills
          </h2>

          <SkillTree hideFooter={true} />
        </section>

        {/* Core Skills */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[var(--text)]">
            ⚡ Core Masteries
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            <SkillCard
              title="Frontend Engineering"
              level="95"
              items={[
                "React",
                "Next.js",
                "TypeScript",
                "React Native",
                "Angular",
              ]}
            />

            <SkillCard
              title="Architecture"
              level="92"
              items={[
                "System Design",
                "Micro Frontends",
                "Module Federation",
                "GraphQL",
              ]}
            />

            <SkillCard
              title="Performance"
              level="90"
              items={[
                "Optimization",
                "Caching",
                "Core Web Vitals",
                "Monitoring",
              ]}
            />

            <SkillCard
              title="Leadership"
              level="88"
              items={[
                "Mentoring",
                "Code Reviews",
                "Onboarding",
                "Collaboration",
              ]}
            />

            <SkillCard
              title="AI Engineering"
              level="82"
              items={[
                "OpenAI",
                "Prompt Engineering",
                "Agents",
                "MCP",
              ]}
            />

            <SkillCard
              title="Observability"
              level="90"
              items={[
                "Amplitude",
                "Splunk",
                "Analytics",
                "Dashboards",
              ]}
            />
          </div>
        </section>

        {/* Achievements */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[var(--text)]">
            🏆 Achievements
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
            {[
              "Intuit Superstar",
              "Extra Miler",
              "Hacktoberfest Contributor",
              "Senior Software Engineer",
              "Architecture Explorer",
              "AI Explorer",
              "React Master",
              "Performance Hunter",
            ].map((achievement) => (
              <div
                key={achievement}
                className="
                  rounded-xl
                  border
                  border-purple-500/35
              shadow-[0_0_20px_rgba(168,85,247,0.08)]
                  bg-[#0B1120]
                  p-4
                  text-[var(--text)]
                "
              >
                🏅 {achievement}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function TimelineItem({
  year,
  title,
  company,
  description,
}: {
  year: string;
  title: string;
  company: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="w-20 text-[var(--accent)] font-bold">
        {year}
      </div>

      <div
        className="
          flex-1
          rounded-2xl
          border
          border-purple-500/35
              shadow-[0_0_20px_rgba(168,85,247,0.08)]
          bg-[#0B1120]
          p-5
        "
      >
        <h3 className="text-[var(--text)] font-bold">
          {title}
        </h3>

        <p className="text-[var(--accent)] text-sm mt-1">
          {company}
        </p>

        <p className="text-zinc-400 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}

function SkillCard({
  title,
  level,
  items,
}: {
  title: string;
  level: string;
  items: string[];
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-purple-500/35
              shadow-[0_0_20px_rgba(168,85,247,0.08)]
        bg-[#0B1120]
        p-5
      "
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-[var(--text)]">
          {title}
        </h3>

        <span className="text-[var(--accent)]">
          Lv.{level}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border
              border-purple-500/35
              shadow-[0_0_20px_rgba(168,85,247,0.08)]
              px-3
              py-1
              text-xs
              text-[var(--text-muted)]
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}