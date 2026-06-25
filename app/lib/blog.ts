import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_PATH = path.join(
  process.cwd(),
  "app/content/journal"
);

export function getBlogBySlug(slug: string) {
  const filePath = path.join(
    BLOG_PATH,
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(
      `Blog not found: ${slug}`
    );
  }

  const source = fs.readFileSync(
    filePath,
    "utf8"
  );

  const { data, content } = matter(source);

  return {
    frontmatter: data,
    content,
  };
}

export function getAllBlogSlugs() {
  return fs
    .readdirSync(BLOG_PATH)
    .filter((file) => file.endsWith(".md"))
    .map((file) =>
      file.replace(".md", "")
    );
}