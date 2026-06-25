"use client";

import { useTheme } from "next-themes";

export default function HeroBackground() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <>
      {/* Bottom glow */}

      <div
        className={`
          absolute
          bottom-0
          left-0
          right-0
          h-40
          bg-gradient-to-t
          ${
            isDark
              ? "from-purple-900/30"
              : "from-amber-300/20"
          }
          to-transparent
        `}
      />

      {isDark ? (
        <>
          {/* 🌙 Moon */}

          <div
            className="
              absolute
              right-10
              top-10
              h-10
              w-10
              rounded-full
              bg-slate-200
              opacity-90
              blur-[1px]
            "
          />

          <div
            className="
              absolute
              right-8
              top-8
              h-24
              w-24
              rounded-full
              bg-slate-300/20
              blur-xl
            "
          />

          {/* Stars */}

          <div className="absolute left-[10%] top-[15%] h-1 w-1 rounded-full bg-white" />
          <div className="absolute left-[20%] top-[10%] h-1 w-1 rounded-full bg-white" />
          <div className="absolute left-[35%] top-[20%] h-1 w-1 rounded-full bg-white" />
          <div className="absolute left-[60%] top-[12%] h-1 w-1 rounded-full bg-white" />
          <div className="absolute left-[75%] top-[25%] h-1 w-1 rounded-full bg-white" />
          <div className="absolute left-[85%] top-[15%] h-1 w-1 rounded-full bg-white" />

          {/* Castle silhouette */}

          <div
            className="
              absolute
              bottom-0
              right-0
              h-[260px]
              w-[300px]
              bg-gradient-to-t
              from-black
              to-transparent
              opacity-80
            "
          />

          {/* Purple magic glow */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-[200px]
              w-[500px]
              -translate-x-1/2
              bg-purple-700/20
              blur-3xl
            "
          />
        </>
      ) : (
        <>
          {/* ☀️ Sun */}

          <div
            className="
              absolute
              right-10
              top-10
              h-12
              w-12
              rounded-full
              bg-yellow-400
            "
          />

          <div
            className="
              absolute
              right-4
              top-4
              h-28
              w-28
              rounded-full
              bg-yellow-300/20
              blur-2xl
            "
          />

          {/* Clouds */}

          <div
            className="
              absolute
              left-[15%]
              top-[15%]
              h-8
              w-20
              rounded-full
              bg-white/60
              blur-md
            "
          />

          <div
            className="
              absolute
              left-[65%]
              top-[20%]
              h-10
              w-24
              rounded-full
              bg-white/50
              blur-md
            "
          />

          {/* Golden adventure glow */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-[220px]
              w-[500px]
              -translate-x-1/2
              bg-amber-300/20
              blur-3xl
            "
          />
        </>
      )}
    </>
  );
}