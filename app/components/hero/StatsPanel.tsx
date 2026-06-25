import Card from "../ui/Card";

import {
  Heart,
  Brain,
  Sparkles,
  Target,
  Leaf,
  HeartPulse,
  Droplets,
  CircleUser,
  UserStar,
  Network,
  Monitor,
  Smartphone,
  Bot,
  GitBranch,
} from "lucide-react";

const attributes = [
  {
    icon: Heart,
    label: "Strength",
    value: 85,
    iconColor: "text-red-500",
  },
  {
    icon: Brain,
    label: "Intelligence",
    value: 95,
    iconColor: "text-blue-500",
  },
  {
    icon: Sparkles,
    label: "Creativity",
    value: 90,
    iconColor: "text-purple-500",
  },
  {
    icon: Target,
    label: "Focus",
    value: 88,
    iconColor: "text-yellow-500",
  },
  {
    icon: Leaf,
    label: "Adaptability",
    value: 92,
    iconColor: "text-green-500",
  },
  {
    icon: CircleUser,
    label: "Leadership",
    value: 89,
    iconColor: "text-cyan-500",
  },
  {
    icon: UserStar,
    label: "Communication",
    value: 91,
    iconColor: "text-sky-500",
  },
  {
    icon: Network,
    label: "Architecture",
    value: 93,
    iconColor: "text-fuchsia-500",
  },
];

const specializations = [
  {
    icon: Monitor,
    label: "Frontend",
    value: 95,
    iconColor: "text-cyan-500",
  },
  {
    icon: GitBranch,
    label: "System Design",
    value: 93,
    iconColor: "text-purple-500",
  },
  {
    icon: Smartphone,
    label: "Mobile",
    value: 85,
    iconColor: "text-green-500",
  },
  {
    icon: Bot,
    label: "AI Engineering",
    value: 72,
    iconColor: "text-amber-500",
  },
];

export default function StatsPanel() {
  return (
    <Card className="p-5">
      <h3
        className="
          mb-5
          font-pixel
          text-xs
          tracking-wider
        "
      >
        STATS
      </h3>

      {/* Attributes */}

      <div className="space-y-4">
        {attributes.map((stat) => (
          <div
            key={stat.label}
            className="
              flex
              items-center
              justify-between
            "
          >
            <div className="flex items-center gap-3">
              <stat.icon
                size={18}
                className={stat.iconColor}
              />

              <span className="text-[var(--text-muted)]">
                {stat.label}
              </span>
            </div>

            <span
              className="
                font-semibold
                text-[var(--text)]
              "
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}

      <div
        className="
          my-5
          border-t
          border-[var(--border)]
        "
      />

      {/* HP */}

      <div>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HeartPulse
              size={18}
              className="text-red-500"
            />

            <span className="font-medium">
              HP
            </span>
          </div>

          <span className="font-semibold">
            980 / 980
          </span>
        </div>

        <div
          className="
            h-3
            overflow-hidden
            rounded-full
            bg-[var(--card-secondary)]
          "
        >
          <div
            className="
              h-full
              w-full
              rounded-full
              bg-gradient-to-r
              from-red-500
              to-red-400
            "
          />
        </div>
      </div>

      {/* MP */}

      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Droplets
              size={18}
              className="text-blue-500"
            />

            <span className="font-medium">
              MP
            </span>
          </div>

          <span className="font-semibold">
            620 / 620
          </span>
        </div>

        <div
          className="
            h-3
            overflow-hidden
            rounded-full
            bg-[var(--card-secondary)]
          "
        >
          <div
            className="
              h-full
              w-full
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-blue-400
            "
          />
        </div>
      </div>

      {/* Specializations */}

      <div
        className="
          mt-6
          border-t
          border-[var(--border)]
          pt-5
        "
      >
        <h4
          className="
            mb-4
            text-xs
            uppercase
            tracking-[0.25em]
            text-[var(--accent)]
          "
        >
          Specializations
        </h4>

        <div className="space-y-3">
          {specializations.map((skill) => (
            <div
              key={skill.label}
              className="
                flex
                items-center
                justify-between
              "
            >
              <div className="flex items-center gap-3">
                <skill.icon
                  size={16}
                  className={skill.iconColor}
                />

                <span className="text-[var(--text-muted)]">
                  {skill.label}
                </span>
              </div>

              <span
                className="
                  font-semibold
                  text-[var(--text)]
                "
              >
                {skill.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}