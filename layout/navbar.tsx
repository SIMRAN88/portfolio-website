"use client";

import { useState } from "react";
import { Sword, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

import ThemeToggle from "@/app/components/layout/ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Inventory", href: "#inventory" },
  { label: "Achievements", href: "#achievements" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { resolvedTheme } = useTheme();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const isDark = resolvedTheme === "dark";

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
          px-4
          sm:h-20
          sm:px-6
          lg:px-8
        "
      >
        {/* Logo */}

        <a
          href="#home"
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-2xl
              shadow-lg
              sm:h-12
              sm:w-12
              ${
                isDark
                  ? "bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-violet-500/30"
                  : "bg-gradient-to-br from-amber-400 to-yellow-500 shadow-amber-500/30"
              }
            `}
          >
            <Sword
              size={18}
              className="text-white"
            />
          </div>

          <div>
            <p
              className="
                font-pixel
                text-[8px]
                tracking-[0.3em]
                text-[var(--text-muted)]
                sm:text-[10px]
              "
            >
              SIMRAN'S
            </p>

            <h1
              className="
                text-xl
                font-extrabold
                leading-none
                text-[var(--text)]
                sm:text-2xl
              "
            >
              QUEST
            </h1>
          </div>
        </a>

        {/* Desktop Nav */}

        <nav
          className="
            hidden
            items-center
            gap-8
            text-sm
            font-medium
            lg:flex
          "
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                text-[var(--text)]
                transition-colors
                hover:text-[var(--accent)]
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-3">
          <span
            className={`
              hidden
              xl:block
              text-sm
              font-medium
              ${
                isDark
                  ? "text-violet-400"
                  : "text-amber-600"
              }
            `}
          >
            {isDark
              ? "🌙 Night Realm"
              : "☀️ Day Realm"}
          </span>

          <ThemeToggle />

          {/* Mobile Menu */}

          <button
            onClick={() =>
              setMobileOpen(
                !mobileOpen
              )
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--card-secondary)]
              lg:hidden
            "
          >
            {mobileOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}

      {mobileOpen && (
        <div
          className="
            border-t
            border-[var(--border)]
            bg-[var(--card)]
            lg:hidden
          "
        >
          <nav
            className="
              flex
              flex-col
              px-6
              py-4
            "
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() =>
                  setMobileOpen(
                    false
                  )
                }
                className="
                  py-3
                  text-[var(--text)]
                  transition-colors
                  hover:text-[var(--accent)]
                "
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}