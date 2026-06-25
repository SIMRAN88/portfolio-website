interface ProgressBarProps {
  value: number;
  color?: string;
}

export default function ProgressBar({
  value,
  color = "bg-purple-500",
}: ProgressBarProps) {
  return (
    <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800">
      <div
        className={`h-2 rounded-full transition-all duration-500 ${color}`}
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
}