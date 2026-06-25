"use client";

import { useTheme } from "next-themes";

export default function HeroContent() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="
        flex
        flex-col
        justify-center

        text-center
        lg:text-left
      "
    >
      {/* Greeting */}

      <p
        className="
          text-xs
          font-semibold
          text-[var(--text-muted)]

          min-[390px]:text-sm
          sm:text-base
        "
      >
        Welcome, Traveler! 👋
      </p>

      {/* Title */}

      <h1
        className={`
          mt-3
          font-pixel
          leading-tight

          text-[2rem]
          min-[390px]:text-[2.5rem]
          md:text-5xl
          xl:text-6xl

          ${
            isDark
              ? "text-white"
              : "text-slate-900"
          }
        `}
      >
        I'M SIMRAN
      </h1>

      {/* Description */}

      <div
        className="
          mt-6
          max-w-2xl
          space-y-4
          mx-auto
          lg:mx-0
        "
      >
        <p
          className="
            text-[15px]
            leading-7
            text-[var(--text)]

            min-[390px]:text-base
            sm:text-lg
            lg:text-xl
          "
        >
          A Senior Frontend Engineer passionate about building scalable,
          performant and beautiful digital experiences with React,
          TypeScript and modern frontend technologies.
        </p>

        <p
          className="
            text-[15px]
            leading-7
            text-[var(--text-muted)]

            min-[390px]:text-base
            sm:text-lg
            lg:text-xl
          "
        >
          Currently exploring AI Engineering, intelligent agents,
          developer tooling and next-generation product experiences.
        </p>
      </div>

      {/* Buttons */}

      <div
        className="
          mt-8

          flex
          flex-col
          gap-3

          sm:flex-row
          sm:justify-center

          lg:justify-start
        "
      >
        <button
          className="
            w-full
            sm:w-auto

            rounded-xl
            bg-[var(--accent)]

            px-5
            py-3

            text-sm
            font-semibold
            text-white

            shadow-lg
            transition-all

            hover:scale-[1.02]
            hover:opacity-90
          "
        >
          ▶ View Quests
        </button>

        <button
          className="
            w-full
            sm:w-auto

            rounded-xl
            border
            border-[var(--border)]

            bg-[var(--card)]

            px-5
            py-3

            text-sm
            font-semibold
            text-[var(--text)]

            transition-all

            hover:bg-[var(--card-secondary)]
          "
        >
          💬 Talk to My AI
        </button>
      </div>

      {/* Small Availability Badge */}

      <div
        className="
          mt-6

          flex
          justify-center

          lg:justify-start
        "
      >
        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-green-500/20

            bg-green-500/10

            px-4
            py-2

            text-sm
            text-green-500
          "
        >
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Available for exciting opportunities
        </div>
      </div>
    </div>
  );
}