interface XPBarProps {
  current: number;
  total: number;
}

export default function XPBar({
  current,
  total,
}: XPBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span>XP</span>
        <span className="text-[10px]">
          {current.toLocaleString()} / {total.toLocaleString()}
        </span>
      </div>

      <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
        <div
          className="h-full bg-violet-500 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}