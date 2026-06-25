import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { getBlogBySlug } from "@/app/lib/blog";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  return (
    <main className="min-h-screen bg-[#070B1A]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/journal"
          className="text-amber-400 hover:text-amber-300"
        >
          ← Back to Journal
        </Link>

        <div className="mt-10">
          <p className="text-[var(--accent)] uppercase tracking-widest">
            {blog.frontmatter.category}
          </p>

          <h1 className="mt-4 text-5xl font-bold text-[var(--text)]">
            {blog.frontmatter.title}
          </h1>

          <div className="mt-4 text-zinc-500">
            {blog.frontmatter.date}
          </div>
        </div>

        <div className="relative h-[450px] mt-10 rounded-3xl overflow-hidden">
          <Image
            src={blog.frontmatter.image}
            alt={blog.frontmatter.title}
            fill
            sizes="(max-width:768px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        <article
          className="
            prose
            prose-invert
            max-w-none
            mt-12
          "
        >
          <ReactMarkdown>
            {blog.content}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
}