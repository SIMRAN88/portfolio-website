import {
  Sword,
  Star,
  Briefcase,
  Code2,
  MapPin,
} from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "7+",
    label: "Years Experience",
    color: "text-yellow-500",
  },
  {
    icon: Briefcase,
    value: "25+",
    label: "Projects Built",
    color: "text-orange-500",
  },
  {
    icon: Code2,
    value: "12+",
    label: "Technologies",
    color: "text-green-500",
  },
  {
    icon: MapPin,
    value: "Bengaluru",
    label: "UTC +5:30",
    color: "text-red-500",
  },
];

export default function AdventureOverview() {
  return (
    <section
      className="
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-8
      "
    >
      {/* Header */}

      <div className="mb-8 flex items-center gap-4">
        <h3
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.3em]
            text-[var(--accent)]
          "
        >
          Adventurer Overview
        </h3>

        <div className="h-px flex-1 bg-[var(--border)]" />
      </div>

      {/* Quest */}

      <div
        className="
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--card-secondary)]
          p-6
        "
      >
        <div className="flex items-start gap-4">
          <Sword
            size={30}
            className="text-yellow-500 shrink-0"
          />

          <div className="flex-1">
            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-[var(--accent)]
              "
            >
              Current Quest
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-bold
                text-[var(--text)]
              "
            >
              Master AI Engineering
            </h2>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-[var(--text-muted)]">
                Progress
              </span>

              <span
                className="
                  font-semibold
                  text-[var(--accent)]
                "
              >
                66%
              </span>
            </div>

            <div
              className="
                mt-2
                h-3
                overflow-hidden
                rounded-full
                bg-[var(--bg)]
              "
            >
              <div
                className="
                  h-full
                  w-[66%]
                  rounded-full
                  bg-[var(--accent)]
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}

      <div
        className="
          mt-6
          grid
          gap-4
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card-secondary)]
                p-5
              "
            >
              <Icon
                size={24}
                className={item.color}
              />

              <h4
                className="
                  mt-4
                  text-3xl
                  font-bold
                  text-[var(--text)]
                "
              >
                {item.value}
              </h4>

              <p
                className="
                  mt-1
                  text-sm
                  text-[var(--text-muted)]
                "
              >
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}