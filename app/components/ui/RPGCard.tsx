interface RPGCardProps {
  children: React.ReactNode;
}

export default function RPGCard({
  children,
}: RPGCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-6

        transition-all
        duration-300

        shadow-sm
      "
    >
      {children}
    </div>
  );
}