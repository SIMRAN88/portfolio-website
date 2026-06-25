import { ReactNode } from "react";

interface InventoryItemProps {
  icon: ReactNode;
  name: string;
}

export default function InventoryItem({
  icon,
  name,
}: InventoryItemProps) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-2

        rounded-xl
        border
        border-[var(--border)]

        bg-[var(--card-secondary)]

        p-4

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <div className="text-2xl">
        {icon}
      </div>

      <span
        className="
          text-center
          text-xs
          font-medium
          text-[var(--text)]
        "
      >
        {name}
      </span>
    </div>
  );
}