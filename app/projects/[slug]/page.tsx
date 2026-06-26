import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Computer,
  Sparkles,
} from "lucide-react";
import { projects } from "@/app/data/projects";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main
      className="
        min-h-screen
        bg-[var(--bg)]
        text-[var(--text)]
      "
    >
      <div
        className="
          mx-auto
          max-w-6xl

          px-4
          py-10

          sm:px-6
          lg:px-8
        "
      >
        {/* Back */}

        <Link
          href="/projects"
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

          Back to Projects
        </Link>

        {/* Hero */}

        <section
          className="
            mt-8

            overflow-hidden

            rounded-3xl

            border
            border-[var(--border)]

            bg-[var(--card)]
          "
        >
          {/* Banner */}

          <div
            className="
              relative

              flex
              flex-col
              items-center
              justify-center

              gap-6

              bg-gradient-to-br
              from-violet-600/20
              via-indigo-600/10
              to-cyan-600/10

              px-8
              py-20

              text-center
            "
          >
            <div className="text-7xl">
              {project.icon}
            </div>

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-3
              "
            >
              <span
                className="
                  rounded-full

                  bg-[var(--accent)]

                  px-4
                  py-2

                  text-xs
                  font-semibold

                  text-white
                "
              >
                {project.rarity}
              </span>

              <span
                className="
                  rounded-full

                  border
                  border-[var(--border)]

                  bg-[var(--card)]

                  px-4
                  py-2

                  text-xs
                  font-semibold
                "
              >
                {project.status}
              </span>
            </div>

            <h1
              className="
                font-pixel

                text-3xl

                leading-tight

                md:text-5xl
              "
            >
              {project.title}
            </h1>

            <p
              className="
                max-w-3xl

                text-lg

                leading-8

                text-[var(--text-muted)]
              "
            >
              {project.description}
            </p>

            {/* Buttons */}

            <div
              className="
                mt-4

                flex
                flex-wrap
                justify-center
                gap-4
              "
            >
              {project.website && (
                <Link
                  href={project.website}
                  target="_blank"
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-xl

                    bg-[var(--accent)]

                    px-6
                    py-3

                    font-semibold

                    text-white
                  "
                >
                  Live Demo

                  <ArrowUpRight
                    size={18}
                  />
                </Link>
              )}

              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-xl

                    border
                    border-[var(--border)]

                    px-6
                    py-3
                  "
                >
                  <Computer size={18} />

                  GitHub
                </Link>
              )}
            </div>
          </div>

          {/* Overview */}

          <div className="p-8">
            <div>
              <div className="flex items-center gap-3">
                <Sparkles
                  className="text-[var(--accent)]"
                  size={22}
                />

                <h2
                  className="
                    text-3xl
                    font-bold
                  "
                >
                  Project Overview
                </h2>
              </div>

              <p
                className="
                  mt-6

                  leading-8

                  text-[var(--text-muted)]
                "
              >
                {project.longDescription}
              </p>
            </div>
                        {/* ================= Tech Stack ================= */}

            <section className="mt-14">
              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                🛠 Equipment Used
              </h2>

              <div
                className="
                  mt-6

                  flex
                  flex-wrap
                  gap-3
                "
              >
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-xl

                      border
                      border-[var(--border)]

                      bg-[var(--card-secondary)]

                      px-4
                      py-3

                      font-medium

                      transition-all

                      hover:border-[var(--accent)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* ================= Features ================= */}

            <section className="mt-14">
              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                ⚔ Quest Features
              </h2>

              <div
                className="
                  mt-8

                  grid
                  gap-4

                  md:grid-cols-2
                "
              >
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      rounded-2xl

                      border
                      border-[var(--border)]

                      bg-[var(--card-secondary)]

                      p-5

                      transition-all

                      hover:-translate-y-1
                      hover:border-[var(--accent)]
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center

                          rounded-full

                          bg-[var(--accent)]

                          font-bold
                          text-white
                        "
                      >
                        ✓
                      </div>

                      <span
                        className="
                          text-lg
                          font-semibold
                        "
                      >
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= Lessons ================= */}

            <section className="mt-14">
              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                📚 Experience Gained
              </h2>

              <div
                className="
                  mt-8

                  rounded-3xl

                  border
                  border-[var(--border)]

                  bg-[var(--card-secondary)]

                  p-8
                "
              >
                <div className="space-y-4">
                  {project.lessons.map((lesson) => (
                    <div
                      key={lesson}
                      className="
                        flex
                        items-center
                        gap-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center

                          rounded-full

                          bg-green-500/15

                          text-green-500
                        "
                      >
                        ✓
                      </div>

                      <p
                        className="
                          text-lg

                          text-[var(--text)]
                        "
                      >
                        {lesson}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ================= Project Stats ================= */}

            <section
              className="
                mt-14

                grid
                gap-5

                sm:grid-cols-3
              "
            >
              <div
                className="
                  rounded-2xl

                  border
                  border-[var(--border)]

                  bg-[var(--card-secondary)]

                  p-6

                  text-center
                "
              >
                <p className="text-sm text-[var(--text-muted)]">
                  Rarity
                </p>

                <h3
                  className="
                    mt-3

                    text-2xl

                    font-bold

                    text-[var(--accent)]
                  "
                >
                  {project.rarity}
                </h3>
              </div>

              <div
                className="
                  rounded-2xl

                  border
                  border-[var(--border)]

                  bg-[var(--card-secondary)]

                  p-6

                  text-center
                "
              >
                <p className="text-sm text-[var(--text-muted)]">
                  Status
                </p>

                <h3
                  className="
                    mt-3

                    text-2xl

                    font-bold
                  "
                >
                  {project.status}
                </h3>
              </div>

              <div
                className="
                  rounded-2xl

                  border
                  border-[var(--border)]

                  bg-[var(--card-secondary)]

                  p-6

                  text-center
                "
              >
                <p className="text-sm text-[var(--text-muted)]">
                  Technologies
                </p>

                <h3
                  className="
                    mt-3

                    text-2xl

                    font-bold
                  "
                >
                  {project.stack.length}
                </h3>
              </div>
            </section>

            {/* ================= CTA ================= */}

            <section
              className="
                mt-16

                rounded-3xl

                border
                border-[var(--border)]

                bg-[var(--card-secondary)]

                p-10

                text-center
              "
            >
              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                Like this project?
              </h2>

              <p
                className="
                  mx-auto

                  mt-5

                  max-w-2xl

                  leading-8

                  text-[var(--text-muted)]
                "
              >
                I'm passionate about building scalable
                products, AI experiences and polished
                frontend applications. If you'd like to
                collaborate or discuss this project,
                let's connect.
              </p>

              <div
                className="
                  mt-8

                  flex
                  flex-wrap
                  justify-center
                  gap-4
                "
              >
                <Link
                  href="/#contact"
                  className="
                    rounded-xl

                    bg-[var(--accent)]

                    px-6
                    py-3

                    font-semibold

                    text-white
                  "
                >
                  Contact Me
                </Link>

                <Link
                  href="/projects"
                  className="
                    rounded-xl

                    border
                    border-[var(--border)]

                    px-6
                    py-3
                  "
                >
                  More Projects
                </Link>
              </div>
            </section>

          </div>
        </section>
      </div>
    </main>
  );
}