import Link from "next/link";
import BlogCard from "@/app/components/blogs/BlogCard";
import { blogPosts } from "@/app/components/blogs/blogData";

const categories = [
  { icon: "⚛️", label: "React" },
  { icon: "🏗️", label: "Architecture" },
  { icon: "⚡", label: "Performance" },
  { icon: "🎃", label: "Open Source" },
];

export default function JournalPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[var(--bg)]
        text-[var(--text)]
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Back Button */}

        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-[var(--text-muted)]
            transition-colors
            hover:text-[var(--accent)]
          "
        >
          ← Return to Quest
        </Link>

        {/* Hero */}

        <div
          className="
            relative
            mt-10
            overflow-hidden
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--card)]
            p-8
            md:p-10
          "
        >
          {/* Magical Glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-60
              dark:block
              hidden
            "
          >
            <div
              className="
                absolute
                right-0
                top-0
                h-72
                w-72
                rounded-full
                bg-[var(--accent)]
                blur-[120px]
                opacity-15
              "
            />
          </div>

          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-[var(--accent)]
            "
          >
            Knowledge Archive
          </p>

          <h1
            className="
              mt-3
              text-5xl
              font-bold
              md:text-6xl
            "
          >
            📜 Collected Scrolls
          </h1>

          <p
            className="
              mt-4
              max-w-3xl
              text-lg
              leading-relaxed
              text-[var(--text-muted)]
            "
          >
            Lessons learned through years of frontend engineering,
            architecture decisions, performance optimization,
            React wizardry, open-source adventures and now
            the journey into AI engineering.
          </p>

          {/* Categories */}

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category.label}
                className="
                  rounded-full
                  border
                  border-[var(--border)]
                  bg-[var(--card-secondary)]
                  px-4
                  py-2
                  text-sm
                  text-[var(--text)]
                "
              >
                {category.icon} {category.label}
              </span>
            ))}
          </div>

          {/* Stats */}

          <div className="mt-8 flex flex-wrap gap-4">
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--card-secondary)]
                px-4
                py-2
                text-sm
                text-[var(--accent)]
              "
            >
              📚 {blogPosts.length} Scrolls Collected
            </div>

            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--card-secondary)]
                px-4
                py-2
                text-sm
                text-[var(--text-muted)]
              "
            >
              ⚔️ Frontend • Architecture • AI
            </div>
          </div>
        </div>

        {/* Section Header */}

        <div className="mb-8 flex items-center justify-between">
          <div>
       

            <h2
              className="
                mt-2
                text-3xl
                font-bold
              "
            >
              All Scrolls
            </h2>
          </div>

          <div
            className="
              hidden
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--card)]
              px-4
              py-2
              text-sm
              text-[var(--text-muted)]
              md:flex
            "
          >
            {blogPosts.length} Articles
          </div>
        </div>

        {/* Grid */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
            />
          ))}
        </div>
      </div>
    </main>
  );
}