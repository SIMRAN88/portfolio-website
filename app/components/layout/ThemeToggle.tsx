"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-16 rounded-full border border-[var(--border)]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className="
        relative
        flex
        h-10
        w-16
        items-center
        rounded-full
        border
        border-[var(--border)]
        bg-[var(--card)]
        transition-all
        duration-300
        hover:opacity-90
      "
    >
      {/* Icons */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-between
          px-2
        "
      >
        <Sun
          size={13}
          className={`
            transition-colors
            duration-300
            ${
              !isDark
                ? "text-amber-500"
                : "text-[var(--text-muted)]"
            }
          `}
        />

        <Moon
          size={13}
          className={`
            transition-colors
            duration-300
            ${
              isDark
                ? "text-violet-400"
                : "text-[var(--text-muted)]"
            }
          `}
        />
      </div>

      {/* Slider */}

      <div
        className={`
          absolute
          top-1
          h-8
          w-8
          rounded-full
          transition-all
          duration-300
          shadow-md
          ${
            isDark
              ? "left-7 bg-violet-500"
              : "left-1 bg-amber-400"
          }
        `}
      />
    </button>
  );
}