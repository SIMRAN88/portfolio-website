import Link from "next/link";
import RPGCard from "../ui/RPGCard";
import SkillNode from "./SkillNode";

interface SkillsTreeProps {
  hideFooter?: boolean;
}

export default function SkillsTree({
  hideFooter = false,
}: SkillsTreeProps) {
  return (
    <RPGCard>
      {/* Header */}

      <div className="mb-4">
        <h3
          className="
            text-2xl
            font-bold
            text-[var(--text)]
          "
        >
          Skill Tree
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-[var(--text-muted)]
          "
        >
          Frontend • Architecture • AI
        </p>
      </div>

      {/* Root Node */}

      <div className="mb-8 flex flex-col items-center">
        <div
          className="
            rounded-xl
            bg-[var(--accent)]
            px-4
            py-2
            text-sm
            font-bold
            text-white
            shadow-lg
          "
        >
          👑 Senior Software Engineer
        </div>

        <div
          className="
            h-5
            w-[2px]
            bg-[var(--border)]
          "
        />

        <div
          className="
            h-2
            w-2
            rounded-full
            bg-[var(--accent)]
          "
        />
      </div>

      {/* Tree */}
<div className="grid grid-cols-2 gap-6">
  <div className="flex flex-col items-center">
    <SkillNode label="Frontend" border="border-cyan-500/40" />
    <div className="h-4 w-[2px] bg-[var(--border)]" />
    <SkillNode label="React" border="border-cyan-500/40" />
    <div className="h-4 w-[2px] bg-[var(--border)]" />
    <SkillNode label="GraphQL" border="border-pink-500/40" />
  </div>

  <div className="flex flex-col items-center">
    <SkillNode label="Architecture" border="border-blue-500/40" />
    <div className="h-4 w-[2px] bg-[var(--border)]" />
    <SkillNode label="System Design" border="border-indigo-500/40" />
    <div className="h-4 w-[2px] bg-[var(--border)]" />
    <SkillNode label="Performance" border="border-yellow-500/40" />
  </div>

  <div className="flex flex-col items-center">
    <SkillNode label="Leadership" border="border-purple-500/40" />
    <div className="h-4 w-[2px] bg-[var(--border)]" />
    <SkillNode label="Mentoring" border="border-violet-500/40" />
    <div className="h-4 w-[2px] bg-[var(--border)]" />
    <SkillNode label="AI Engineering" border="border-green-500/40" />
  </div>
</div>

      {!hideFooter && (
        <Link
          href="/skills"
          className="
            mt-8
            inline-block
            text-sm
            font-medium
            text-[var(--accent)]
            transition-opacity
            hover:opacity-80
          "
        >
          View Full Skills →
        </Link>
      )}
    </RPGCard>
  );
}