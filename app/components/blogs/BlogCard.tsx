import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./blogData";

type Props = {
  post: typeof blogPosts[0];
};

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/journal/${post.slug}`}>
      <article
        className="
          group
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-purple-500/50
          bg-[#0B1120]
          hover:border-purple-400
          hover:-translate-y-1
          hover:shadow-xl
          hover:shadow-purple-500/10
          transition-all
          duration-300
        "
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex min-h-[320px] flex-col p-6">
          {/* Category */}
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xl">
              {post.icon}
            </span>

            <span
              className="
                rounded-full
                bg-purple-500/10
                border
                border-purple-500/50
                px-3
                py-1
                text-xs
                text-purple-300
              "
            >
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h2
            className="
              h-[64px]
              text-2xl
              font-bold
              text-[var(--text)]
              leading-tight
              line-clamp-2
            "
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          <p
            className="
              mt-4
              h-[72px]
              text-zinc-400
              line-clamp-3
            "
          >
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="mt-auto pt-6">
            <div className="flex items-center justify-between text-sm text-zinc-500">
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
            </div>

            <div className="mt-5">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-amber-500/20
                  bg-amber-500/10
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-amber-300
                  transition
                  group-hover:border-amber-400
                  group-hover:bg-amber-500/20
                "
              >
                📜 Open Scroll
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}