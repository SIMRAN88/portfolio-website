"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-[var(--border)]
        bg-[var(--card)]/90
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[var(--accent)]
              text-white
            "
          >
            ⚔️
          </div>

          <div>
            <p
              className="
                font-pixel
                text-[10px]
                tracking-widest
                text-[var(--accent)]
              "
            >
              SIMRAN'S
            </p>

            <h1
              className="
                text-xl
                font-bold
                text-[var(--text)]
              "
            >
              QUEST
            </h1>
          </div>
        </a>

        <nav className="hidden md:flex gap-8">
          <a
            href="#home"
            className="
              text-sm
              font-medium
              text-[var(--text-muted)]
              hover:text-[var(--accent)]
            "
          >
            Home
          </a>

          <a
            href="#quests"
            className="
              text-sm
              font-medium
              text-[var(--text-muted)]
              hover:text-[var(--accent)]
            "
          >
            Quests
          </a>

          <a
            href="#skills"
            className="
              text-sm
              font-medium
              text-[var(--text-muted)]
              hover:text-[var(--accent)]
            "
          >
            Skills
          </a>

          <a
            href="#journal"
            className="
              text-sm
              font-medium
              text-[var(--text-muted)]
              hover:text-[var(--accent)]
            "
          >
            Journal
          </a>

          <a
            href="#contact"
            className="
              text-sm
              font-medium
              text-[var(--text-muted)]
              hover:text-[var(--accent)]
            "
          >
            Contact
          </a>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}