interface QuestItemProps {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export default function QuestItem({
  year,
  title,
  description,
  icon,
}: QuestItemProps) {
  return (
    <div className="relative flex gap-4 pb-8">
      {/* timeline line */}
      <div className="absolute left-5 top-10 bottom-0 w-px bg-purple-500/30" />

      {/* icon */}
      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/30 bg-[#0b1020]">
        {icon}
      </div>

      {/* content */}
      <div>
        <p className="text-xs text-[var(--accent)] mb-1">{year}</p>

        <h3 className="font-semibold text-[var(--text)]">
          {title}
        </h3>

        <p className="text-sm text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}