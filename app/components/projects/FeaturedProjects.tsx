import Link from "next/link";

const projects = [
  {
    title: "Parent AI Agent",
    badge: "LEGENDARY",
    icon: "👨‍👩‍👧",
    description:
      "AI-powered parenting assistant for vaccine tracking, reminders, inventory and child insights.",
    tech: ["React Native", "Supabase", "GraphQL", "OpenAI"],
    slug: "parent-ai-agent",
  },
  {
    title: "Interview Copilot",
    badge: "EPIC",
    icon: "🎯",
    description:
      "AI interview assistant that helps you prepare, practice and ace your next interview.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind"],
    slug: "interview-copilot",
  },
  {
    title: "Humanizer AI",
    badge: "RARE",
    icon: "✍️",
    description:
      "Transforms AI-generated content into natural, human-like writing with different tones.",
    tech: [
      "Next.js",
      "OpenAI",
      "Prompt Engineering",
    ],
    slug: "humanizer-ai",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="mt-10">
      <div
        className="
          rounded-3xl
          border
          border-[var(--border)]
          bg-[var(--card)]
          p-8
          shadow-sm
        "
      >
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <div>
            <p
              className="
                text-sm
                uppercase
                tracking-widest
                text-[var(--accent)]
              "
            >
              Featured Projects
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-bold
                text-[var(--text)]
              "
            >
              ⚔ Legendary Builds
            </h2>

            <p
              className="
                mt-2
                text-[var(--text-muted)]
              "
            >
              Side quests, AI experiments and
              products I've built.
            </p>
          </div>

          <Link
            href="/projects"
            className="
              font-medium
              text-[var(--accent)]
              transition-colors
              hover:opacity-80
            "
          >
            View All Projects →
          </Link>
        </div>

        {/* Project Cards */}

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
            >
              <article
                className="
                  h-full
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--card-secondary)]
                  p-6

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                {/* Top */}

                <div className="flex items-center justify-between">
                  <div className="text-4xl">
                    {project.icon}
                  </div>

                  <span
                    className="
                      rounded-full
                      border
                      border-[var(--border)]
                      bg-[var(--card)]
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-[var(--accent)]
                    "
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-5
                    text-xl
                    font-bold
                    text-[var(--text)]
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-[var(--text-muted)]
                  "
                >
                  {project.description}
                </p>

                {/* Tech */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-md
                        border
                        border-[var(--border)]
                        px-2
                        py-1
                        text-xs
                        text-[var(--text-muted)]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}

                <div
                  className="
                    mt-6
                    font-medium
                    text-[var(--accent)]
                  "
                >
                  Open Quest →
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}