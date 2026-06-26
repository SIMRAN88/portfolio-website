"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  // Github,
  Sparkles,
} from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  status: string;
  color: string;
  github?: string;
  live?: string;
};

type Props = {
  project: Project;
};

export default function ProjectCard({
  project,
}: Props) {
  return (
    <article
      className="
        group
        overflow-hidden

        rounded-3xl

        border
        border-[var(--border)]

        bg-[var(--card)]

        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Image */}

      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover
            transition-transform
            duration-500

            group-hover:scale-105
          "
        />

        {/* Gradient */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-black/70
            via-black/10
            to-transparent
          "
        />

        {/* Status */}

        <div
          className="
            absolute
            left-4
            top-4
          "
        >
          <span
            className={`
              rounded-full

              px-3
              py-1

              text-xs
              font-semibold

              text-white

              ${project.color}
            `}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}

      <div
        className="
          p-5
          sm:p-6
        "
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className="
                text-2xl
                font-bold

                text-[var(--text)]
              "
            >
              {project.title}
            </h3>

            <p
              className="
                mt-3

                leading-7

                text-[var(--text-muted)]
              "
            >
              {project.description}
            </p>
          </div>

          <Sparkles
            size={22}
            className="
              shrink-0
              text-[var(--accent)]
            "
          />
        </div>

        {/* Tech */}

        <div
          className="
            mt-6

            flex
            flex-wrap
            gap-2
          "
        >
          {project.tech.map((item) => (
            <span
              key={item}
              className="
                rounded-full

                border
                border-[var(--border)]

                bg-[var(--card-secondary)]

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

        {/* Buttons */}

        <div
          className="
            mt-8

            flex
            flex-col
            gap-3

            sm:flex-row
          "
        >
          <Link
            href={`/projects/${project.slug}`}
            className="
              flex-1

              inline-flex
              items-center
              justify-center
              gap-2

              rounded-xl

              bg-[var(--accent)]

              px-5
              py-3

              font-semibold

              text-white

              transition-all

              hover:opacity-90
            "
          >
            View Project

            <ArrowUpRight size={18} />
          </Link>

          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              className="
                flex-1

                inline-flex
                items-center
                justify-center

                rounded-xl

                border
                border-[var(--border)]

                px-5
                py-3

                font-semibold

                transition-all

                hover:bg-[var(--card-secondary)]
              "
            >
              Live Demo
            </Link>
          )}

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="
                flex

                h-12
                w-12

                items-center
                justify-center

                rounded-xl

                border
                border-[var(--border)]

                transition-all

                hover:bg-[var(--card-secondary)]
              "
            >
              <Sparkles size={20} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}