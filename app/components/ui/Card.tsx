import { cn } from "@/app/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border
        bg-[var(--card)]
        border-[var(--border)]
        shadow-sm
        transition-all
        duration-300
        `,
        className
      )}
    >
      {children}
    </div>
  );
}