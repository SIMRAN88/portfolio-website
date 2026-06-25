import Link from "next/link";
import RPGCard from "../ui/RPGCard";
import { blogPosts } from "./blogData";

const featuredPosts = blogPosts.slice(0, 3);

export default function BlogPreview() {
  return (
    <RPGCard>
      {/* Header */}

      <div className="mb-5">
        <h2
          className="
            text-lg
            font-bold
            text-[var(--text)]
          "
        >
          📚 Knowledge Journal
        </h2>

        <p
          className="
            text-xs
            text-[var(--text-muted)]
          "
        >
          Tutorials & engineering quests
        </p>
      </div>

      {/* Posts */}

      <div className="space-y-3">
        {featuredPosts.map((post) => (
          <article
            key={post.title}
            className="
              rounded-2xl
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
            {/* Category */}

            <div
              className="
                mb-2
                inline-flex

                rounded-full

                bg-[var(--accent)]/10

                px-2
                py-1

                text-[9px]
                font-medium

                text-[var(--accent)]
              "
            >
              {post.category}
            </div>

            {/* Title */}

            <h3
              className="
                text-sm
                font-semibold
                text-[var(--text)]
              "
            >
              {post.title}
            </h3>

            {/* Meta */}

            <p
              className="
                mt-1
                text-xs
                text-[var(--text-muted)]
              "
            >
              {post.date} • {post.readingTime}
            </p>
          </article>
        ))}
      </div>

      {/* Footer */}

      <div
        className="
          mt-4
          border-t
          border-[var(--border)]
          pt-4
        "
      >
        <Link
          href="/journal"
          className="
            text-sm
            font-medium
            text-[var(--accent)]
            transition-opacity
            hover:opacity-80
          "
        >
          View All Scrolls →
        </Link>
      </div>
    </RPGCard>
  );
}