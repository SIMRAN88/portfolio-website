import { projects } from "@/app/data/projects";
import Link from "next/link";


export default function FeaturedProjects() {
  return (
    <section className="mt-10">
      <div
        className="
          rounded-3xl
          border
          border-[var(--border)]
          bg-[var(--card)]
          p-6
          sm:p-8
          shadow-sm
        "
      >
        {/* Header */}

        <div
          className="
            mb-8

            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
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
              transition-opacity
              hover:opacity-80
            "
          >
            View All Projects →
          </Link>
        </div>

        {/* Cards */}

        <div
          className="
            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <article
                className="
                  flex
                  h-full
                  flex-col

                  rounded-2xl

                  border
                  border-[var(--border)]

                  bg-[var(--card-secondary)]

                  p-6

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[var(--accent)]
                  hover:shadow-lg
                "
              >
                {/* Top */}

                <div className="flex items-center justify-between">
                  <div className="text-5xl">
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
                    {project.icon}
                  </span>
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-5

                    text-2xl

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

                    flex-1

                    leading-7

                    text-[var(--text-muted)]
                  "
                >
                  {project.description}
                </p>

                {/* Tech */}

                <div
                  className="
                    mt-5

                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.stack.map((tech: string) => (
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

                    transition-transform

                    group-hover:translate-x-1
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