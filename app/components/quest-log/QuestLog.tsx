"use client";

import Link from "next/link";

import {
  Crown,
  Sword,
  Shield,
  Sprout,
  CheckCircle2,
} from "lucide-react";

import RPGCard from "../ui/RPGCard";

const quests = [
  {
    year: "2024",
    title: "Senior Frontend Engineer",
    description:
      "Building AI-powered products and scalable systems.",
    icon: Crown,
    current: true,
    progress: 85,
  },
  {
    year: "2022",
    title: "Software Engineer",
    description:
      "Architected frontend applications.",
    icon: Sword,
    completed: true,
  },
  {
    year: "2020",
    title: "Frontend Developer",
    description:
      "Built modern React experiences.",
    icon: Shield,
    completed: true,
  },
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Started my coding journey.",
    icon: Sprout,
    completed: true,
  },
];

export default function QuestLog() {
  return (
    <RPGCard>
      {/* Header */}

      <div className="mb-5">
        <h2
          className="
            text-lg
            font-bold
            text-[var(--text)]
          "
        >
          📜 Quest Log
        </h2>

        <p
          className="
            text-xs
            text-[var(--text-muted)]
          "
        >
          My journey so far
        </p>
      </div>

      {/* Timeline */}

      <div>
        {quests.map((quest, index) => {
          const Icon = quest.icon;

          return (
            <div
              key={quest.year}
              className="
                relative
                flex
                gap-3
                pb-6
              "
            >
              {/* Timeline line */}

              {index !== quests.length - 1 && (
                <div
                  className="
                    absolute
                    left-[15px]
                    top-8
                    h-full
                    w-[2px]
                    bg-gradient-to-b
                    from-[var(--accent)]
                    to-transparent
                  "
                />
              )}

              {/* Icon */}

              <div
                className="
                  relative
                  z-10

                  flex
                  h-8
                  w-8
                  shrink-0

                  items-center
                  justify-center

                  rounded-full
                  border

                  border-[var(--border)]
                  bg-[var(--card-secondary)]
                "
              >
                <Icon
                  className="
                    h-3.5
                    w-3.5
                    text-[var(--accent)]
                  "
                />
              </div>

              {/* Content */}

              <div className="flex-1">
                <div
                  className="
                    mb-1
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      text-xs
                      text-[var(--accent)]
                    "
                  >
                    {quest.year}
                  </span>

                  {quest.current && (
                    <span
                      className="
                        rounded-full
                        bg-yellow-500/10
                        px-2
                        py-0.5
                        text-[9px]
                        font-medium
                        text-yellow-600
                        dark:text-yellow-400
                      "
                    >
                      CURRENT
                    </span>
                  )}

                  {quest.completed && (
                    <span
                      className="
                        flex
                        items-center
                        gap-1

                        rounded-full
                        bg-green-500/10

                        px-2
                        py-0.5

                        text-[9px]
                        font-medium
                        text-green-600
                        dark:text-green-400
                      "
                    >
                      <CheckCircle2 size={8} />
                      DONE
                    </span>
                  )}
                </div>

                <h3
                  className="
                    text-sm
                    font-semibold
                    text-[var(--text)]
                  "
                >
                  {quest.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-[var(--text-muted)]
                  "
                >
                  {quest.description}
                </p>

                {quest.current && (
                  <div className="mt-3 max-w-[180px]">
                    <div
                      className="
                        h-1.5
                        rounded-full
                        bg-[var(--card-secondary)]
                      "
                    >
                      <div
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-purple-500
                          to-fuchsia-500
                        "
                        style={{
                          width: `${quest.progress}%`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}

      <div
        className="
          mt-2
          border-t
          border-[var(--border)]
          pt-4
        "
      >
        <Link
          href="/quest"
          className="
            inline-block
            text-sm
            font-medium
            text-[var(--accent)]
            transition-opacity
            hover:opacity-80
          "
        >
          View Full Journey →
        </Link>
      </div>
    </RPGCard>
  );
}