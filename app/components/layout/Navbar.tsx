"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Sword,
  Menu,
  X,
  Sparkles,
  Home,
  FolderGit2,
  Brain,
  Backpack,
  Trophy,
  BookOpen,
  Mail,
} from "lucide-react";
import { useTheme } from "next-themes";

import ThemeToggle from "@/app/components/layout/ThemeToggle";

const navItems = [
  {
    label: "Home",
    href: "#home",
    icon: Home,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: FolderGit2,
  },
  {
    label: "Skills",
    href: "#skills",
    icon: Brain,
  },
  {
    label: "Inventory",
    href: "#inventory",
    icon: Backpack,
  },
  {
    label: "Achievements",
    href: "#achievements",
    icon: Trophy,
  },
  {
    label: "Journal",
    href: "#journal",
    icon: BookOpen,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

export default function Navbar() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-[100]

        border-b
        border-[var(--border)]

        bg-[var(--card)]/80

        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto

          flex

          h-16
          sm:h-20

          max-w-7xl

          items-center
          justify-between

          px-3
          sm:px-6
          lg:px-8
        "
      >
        {/* ================= Logo ================= */}

        <Link
          href="#home"
          className="
            flex
            items-center
            gap-3

            transition-transform

            hover:scale-[1.02]
          "
        >
          <div
            className={`
              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-2xl

              shadow-lg

              ${
                isDark
                  ? "bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-violet-500/30"
                  : "bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-500/30"
              }
            `}
          >
            <Sword
              size={20}
              className="text-white"
            />
          </div>

          <div>
            <p
              className="
                font-pixel

                text-[9px]

                tracking-[0.35em]

                text-[var(--text-muted)]
              "
            >
              SIMRAN'S
            </p>

            <h1
              className="
                text-xl

                font-black

                leading-none

                text-[var(--text)]
              "
            >
              QUEST
            </h1>
          </div>
        </Link>

        {/* ================= Desktop Navigation ================= */}

        <nav
          className="
            hidden

            items-center

            gap-7

            lg:flex
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                relative

                text-sm

                font-medium

                text-[var(--text)]

                transition-all

                hover:text-[var(--accent)]

                after:absolute
                after:-bottom-2
                after:left-0
                after:h-[2px]
                after:w-0

                after:bg-[var(--accent)]

                after:transition-all

                hover:after:w-full
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ================= Right Side ================= */}

        <div className="flex items-center gap-3">

          <div
            className="
              hidden
              xl:flex

              items-center
              gap-2

              rounded-full

              border

              border-[var(--border)]

              bg-[var(--card-secondary)]

              px-4
              py-2
            "
          >
            <Sparkles
              size={16}
              className="text-[var(--accent)]"
            />

            <span
              className="
                text-sm

                font-medium
              "
            >
              {isDark
                ? "Night Realm"
                : "Day Realm"}
            </span>
          </div>

          <ThemeToggle />

          {/* ================= Mobile Menu ================= */}

          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="
              flex

              h-11
              w-11

              items-center
              justify-center

              rounded-xl

              border

              border-[var(--border)]

              bg-[var(--card-secondary)]

              transition-all

              hover:scale-105

              lg:hidden
            "
          >
            {mobileOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>
            {/* ================= Mobile Backdrop ================= */}

      <div
        onClick={() => setMobileOpen(false)}
        className={`
          fixed
          inset-0
          z-40

          bg-black/50
          backdrop-blur-sm

          transition-all
          duration-300

          lg:hidden

          ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* ================= Mobile Drawer ================= */}

      <aside
        className={`
          fixed
          top-0
          right-0

          z-50

          flex
          h-screen
          w-[320px]
          max-w-[90vw]
          flex-col

          border-l
          border-[var(--border)]

          bg-[var(--card)]

          shadow-2xl

          transition-transform
          duration-300
          ease-out

          lg:hidden

          ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Drawer Header */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-[var(--border)]

            px-6
            py-5
          "
        >
          <div className="flex items-center gap-3">
            <div
              className={`
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-2xl

                ${
                  isDark
                    ? "bg-gradient-to-br from-violet-600 to-fuchsia-600"
                    : "bg-gradient-to-br from-amber-400 to-orange-500"
                }
              `}
            >
              <Sword
                size={20}
                className="text-white"
              />
            </div>

            <div>
              <p
                className="
                  font-pixel
                  text-[9px]
                  tracking-[0.3em]
                  text-[var(--text-muted)]
                "
              >
                SIMRAN'S
              </p>

              <h2
                className="
                  text-lg
                  font-bold
                "
              >
                QUEST
              </h2>
            </div>
          </div>

          <button
            onClick={() =>
              setMobileOpen(false)
            }
            className="
              rounded-xl
              p-2

              hover:bg-[var(--card-secondary)]
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Realm */}

        <div
          className="
            border-b
            border-[var(--border)]

            px-6
            py-4
          "
        >
          <div className="flex items-center gap-2">
            <Sparkles
              size={18}
              className="text-[var(--accent)]"
            />

            <span className="font-medium">
              {isDark
                ? "🌙 Night Realm"
                : "☀️ Day Realm"}
            </span>
          </div>
        </div>

        {/* Navigation */}

        <nav
          className="
            flex-1

            space-y-2

            px-4
            py-5
          "
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() =>
                  setMobileOpen(false)
                }
                className="
                  flex
                  items-center
                  gap-4

                  rounded-2xl

                  px-4
                  py-4

                  transition-all

                  hover:bg-[var(--card-secondary)]
                  hover:text-[var(--accent)]
                "
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}

        <div
          className="
            border-t
            border-[var(--border)]

            p-5
          "
        >
          <div
            className="
              rounded-2xl

              border
              border-[var(--border)]

              bg-[var(--card-secondary)]

              p-4
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]

                text-[var(--accent)]
              "
            >
              Current Quest
            </p>

            <h3
              className="
                mt-2
                font-semibold
              "
            >
              Master AI Engineering ⚔️
            </h3>

            <div
              className="
                mt-4
                h-2
                rounded-full

                bg-[var(--bg)]
              "
            >
              <div
                className="
                  h-full
                  w-2/3

                  rounded-full

                  bg-gradient-to-r
                  from-violet-500
                  to-fuchsia-500
                "
              />
            </div>

            <p
              className="
                mt-2
                text-sm
                text-[var(--text-muted)]
              "
            >
              66% Complete
            </p>
          </div>
        </div>
      </aside>
    </header>
  );
}