"use client";

import { Mail, Sword, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import RPGCard from "../ui/RPGCard";

export default function ContactTavern() {
  return (
    <RPGCard>
      {/* Header */}

      <div className="mb-6 flex items-center gap-3">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-xl

            border
            border-[var(--border)]

            bg-[var(--card-secondary)]
          "
        >
          <Sword
            className="
              h-5
              w-5
              text-[var(--accent)]
            "
          />
        </div>

        <div>
          <h2
            className="
              text-xl
              font-bold
              text-[var(--text)]
            "
          >
            The Adventurer's Tavern
          </h2>

          <p
            className="
              text-sm
              text-[var(--text-muted)]
            "
          >
            Start a new quest together
          </p>
        </div>
      </div>

      {/* Description */}

      <div
        className="
          rounded-2xl

          border
          border-[var(--border)]

          bg-[var(--card-secondary)]

          p-4
        "
      >
        <div className="flex items-start gap-3">
          <Sparkles
            className="
              mt-0.5
              h-4
              w-4
              text-[var(--accent)]
            "
          />

          <p
            className="
              text-sm
              leading-relaxed
              text-[var(--text-muted)]
            "
          >
            Looking for a Frontend Engineer,
            React specialist, AI builder,
            or someone who loves crafting
            beautiful digital experiences?
            <br />
            <br />
            Let's begin an epic quest together.
          </p>
        </div>
      </div>

      {/* Links */}

      <div className="mt-6 space-y-3">
        <a
          href="mailto:simran@email.com"
          className="
            flex
            items-center
            gap-3

            rounded-xl

            border
            border-[var(--border)]

            bg-[var(--card-secondary)]

            px-4
            py-3

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-md
          "
        >
          <Mail
            className="
              h-4
              w-4
              text-[var(--accent)]
            "
          />

          <div>
            <p
              className="
                text-sm
                font-medium
                text-[var(--text)]
              "
            >
              Email
            </p>

            <p
              className="
                text-xs
                text-[var(--text-muted)]
              "
            >
              Let's discuss opportunities
            </p>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            gap-3

            rounded-xl

            border
            border-[var(--border)]

            bg-[var(--card-secondary)]

            px-4
            py-3

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-md
          "
        >
          <FaLinkedin
            size={16}
            className="text-[var(--accent)]"
          />

          <div>
            <p
              className="
                text-sm
                font-medium
                text-[var(--text)]
              "
            >
              LinkedIn
            </p>

            <p
              className="
                text-xs
                text-[var(--text-muted)]
              "
            >
              Connect professionally
            </p>
          </div>
        </a>

        <a
          href="https://github.com/SIMRAN88"
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            gap-3

            rounded-xl

            border
            border-[var(--border)]

            bg-[var(--card-secondary)]

            px-4
            py-3

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-md
          "
        >
          <FaGithub
            size={16}
            className="text-[var(--accent)]"
          />

          <div>
            <p
              className="
                text-sm
                font-medium
                text-[var(--text)]
              "
            >
              GitHub
            </p>

            <p
              className="
                text-xs
                text-[var(--text-muted)]
              "
            >
              Explore my repositories
            </p>
          </div>
        </a>
      </div>

      {/* CTA */}

      <button
        className="
          mt-6
          w-full

          rounded-xl

          bg-[var(--accent)]

          px-4
          py-3

          text-sm
          font-semibold
          text-white

          transition-all
          duration-300

          hover:opacity-90
        "
      >
        🚀 Start A Quest
      </button>
    </RPGCard>
  );
}