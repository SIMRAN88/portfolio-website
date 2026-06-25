"use client";

import { useTheme } from "next-themes";

export default function LevelBadge() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative my-4">
      <div
        className={`
          relative
          py-2
          text-center
          font-pixel
          text-xs
          rounded-md
          border
          shadow-lg
          ${
            isDark
              ? `
                bg-gradient-to-r
                from-purple-700
                to-purple-600
                text-yellow-300
                border-purple-400/40
              `
              : `
                bg-gradient-to-r
                from-amber-400
                to-yellow-500
                text-white
                border-amber-300
              `
          }
        `}
      >
        LEVEL 8
      </div>

      <div
        className={`
          absolute
          left-[-10px]
          top-1/2
          -translate-y-1/2
          w-0
          h-0
          border-t-[12px]
          border-b-[12px]
          border-r-[10px]
          border-transparent
          ${
            isDark
              ? "border-r-purple-800"
              : "border-r-amber-500"
          }
        `}
      />

      <div
        className={`
          absolute
          right-[-10px]
          top-1/2
          -translate-y-1/2
          w-0
          h-0
          border-t-[12px]
          border-b-[12px]
          border-l-[10px]
          border-transparent
          ${
            isDark
              ? "border-l-purple-800"
              : "border-l-amber-500"
          }
        `}
      />
    </div>
  );
}