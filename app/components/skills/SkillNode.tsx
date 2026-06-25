interface SkillNodeProps {
  label: string;
  border?: string;
}

export default function SkillNode({
  label,
  border = "border-purple-500/40",
}: SkillNodeProps) {
  return (
    <div
      className={`
        min-w-[120px]
        rounded-lg
        border
        ${border}

        bg-[var(--card-secondary)]

        px-3
        py-2

        text-center
        text-xs
        font-medium

        text-[var(--text)]

        transition-all
        duration-300

        hover:scale-105
        hover:shadow-md
      `}
    >
      {label}
    </div>
  );
}