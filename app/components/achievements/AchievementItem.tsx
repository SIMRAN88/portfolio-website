interface AchievementItemProps {
  icon: string;
  title: string;
  description: string;
}

export default function AchievementItem({
  icon,
  title,
  description,
}: AchievementItemProps) {
  return (
    <div
      className="
      flex
      items-start
      gap-3
      py-3
      border-b
      border-purple-500/50
      last:border-b-0
      "
    >
      <div className="text-xl">{icon}</div>

      <div className="flex-1">
        <h4 className="text-sm font-semibold text-[var(--text)]">
          {title}
        </h4>

        <p className="text-xs text-gray-400 mt-1">
          {description}
        </p>
      </div>

      <div
        className="
        h-2
        w-2
        rounded-full
        bg-green-400
        mt-2
        "
      />
    </div>
  );
}