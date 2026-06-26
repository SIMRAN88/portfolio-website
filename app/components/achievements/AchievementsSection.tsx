import AchievementItem from "./AchievementItem";
import RPGCard from "../ui/RPGCard";
import Link from "next/link";

const achievements = [
  {
    icon: "⚛️",
    title: "React Master",
    description: "Built complex React applications",
  },
  {
    icon: "⚡",
    title: "Performance Hunter",
    description: "Optimized apps for scale",
  },
  {
    icon: "🛡️",
    title: "System Designer",
    description: "Architected scalable systems",
  },
  {
    icon: "🤝",
    title: "Team Player",
    description: "Mentored and led teams",
  },
  {
    icon: "🤖",
    title: "AI Explorer",
    description: "Exploring AI & ML technologies",
  },
  {
    icon: "🎨",
    title: "UI Designer",
    description: "Created beautiful user interfaces",
  }
];


export default function AchievementsSection() {
  return (
    <RPGCard>
      {/* Header */}

      <div className="mb-5">
        <h3
          className="
            text-2xl
            font-bold
            text-[var(--text)]
          "
        >
          Achievements
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-[var(--text-muted)]
          "
        >
          Milestones unlocked
        </p>
      </div>

      {/* Achievement List */}

      <div className="space-y-1">
        {achievements.map((achievement) => (
          <AchievementItem
            key={achievement.title}
            icon={achievement.icon}
            title={achievement.title}
            description={achievement.description}
          />
        ))}
      </div>

      {/* Footer */}

      <Link
        href="/achievements"
        className="
          mt-8
          inline-block
          text-sm
          font-medium
          text-[var(--accent)]
          transition-opacity
          hover:opacity-80
        "
      >
        View All Achievements →
      </Link>
    </RPGCard>
  );
}