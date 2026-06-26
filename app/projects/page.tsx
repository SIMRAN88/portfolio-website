import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";


export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div
        className="
          mx-auto
          max-w-7xl

          px-4
          py-10

          sm:px-6
          lg:px-8
        "
      >
        {/* Back */}

        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2

            rounded-xl

            border
            border-[var(--border)]

            bg-[var(--card)]

            px-4
            py-2

            transition-all

            hover:bg-[var(--card-secondary)]
          "
        >
          <ArrowLeft size={18} />
          Back Home
        </Link>

        {/* Hero */}

        <div className="mt-10 max-w-4xl">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]

              text-[var(--accent)]
            "
          >
            Portfolio
          </p>

          <h1
            className="
              mt-4

              font-pixel

              text-4xl
              leading-tight

              md:text-6xl
            "
          >
            ⚔ All Projects
          </h1>

          <p
            className="
              mt-6

              text-lg

              leading-8

              text-[var(--text-muted)]
            "
          >
            A collection of AI products,
            frontend applications,
            mobile experiences and
            developer tools I've built
            throughout my engineering journey.
          </p>
        </div>

        {/* Stats */}

        <div
          className="
            mt-12

            grid

            gap-4

            sm:grid-cols-3
          "
        >
          <div
            className="
              rounded-2xl

              border
              border-[var(--border)]

              bg-[var(--card)]

              p-5
            "
          >
            <h3 className="text-3xl font-bold">
              {projects.length}
            </h3>

            <p className="mt-1 text-[var(--text-muted)]">
              Total Projects
            </p>
          </div>

          <div
            className="
              rounded-2xl

              border
              border-[var(--border)]

              bg-[var(--card)]

              p-5
            "
          >
            <h3 className="text-3xl font-bold">
              AI
            </h3>

            <p className="mt-1 text-[var(--text-muted)]">
              Primary Focus
            </p>
          </div>

          <div
            className="
              rounded-2xl

              border
              border-[var(--border)]

              bg-[var(--card)]

              p-5
            "
          >
            <h3 className="text-3xl font-bold">
              7+
            </h3>

            <p className="mt-1 text-[var(--text-muted)]">
              Years Experience
            </p>
          </div>
        </div>

        {/* Projects */}

        <div
          className="
            mt-14

            grid

            gap-8

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {projects.map((project) => (
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

                  rounded-3xl

                  border
                  border-[var(--border)]

                  bg-[var(--card)]

                  p-6

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-[var(--accent)]
                  hover:shadow-xl
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

                      bg-[var(--card-secondary)]

                      px-3
                      py-1

                      text-xs
                      font-semibold

                      text-[var(--accent)]
                    "
                  >
                    {project.icon}
                  </span>
                </div>

                {/* Title */}

                <h2
                  className="
                    mt-6

                    text-2xl

                    font-bold
                  "
                >
                  {project.title}
                </h2>

                {/* Description */}

                <p
                  className="
                    mt-4

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
                    mt-6

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

                        bg-[var(--card-secondary)]

                        px-3
                        py-1

                        text-xs
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}

                <div
                  className="
                    mt-8

                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      font-semibold

                      text-[var(--accent)]
                    "
                  >
                    Open Quest →
                  </span>

                  <div
                    className="
                      rounded-full

                      bg-[var(--card-secondary)]

                      px-3
                      py-2

                      transition-transform

                      group-hover:translate-x-1
                    "
                  >
                    →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}