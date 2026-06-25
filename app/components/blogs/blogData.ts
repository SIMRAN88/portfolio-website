interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image: string;
  category: string;
  icon: string;
}
export const blogPosts = [
  {
    slug: "setup-your-website",
    title: "Setup your website",
    excerpt:
      "A guide to creating and deploying your personal portfolio website.",
    date: "Oct 15, 2020",
    readingTime: "3 min read",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*akkDyl8mvbNsV0QF.png",
    category: "Web Development",
    icon: "🌐",
  },
  { 
    slug: "gzip-in-browser-before-uploading-to-s3",
    title: "Gzip in browser before uploading to S3",
    excerpt:
      "Reduce upload size and improve performance by compressing files before sending them to S3.",
    date: "Oct 15, 2020",
    readingTime: "4 min read",
    image: "https://miro.medium.com/v2/resize:fit:892/format:webp/0*vOvN6ZzobhutJsNL.png",
    category: "Performance",
    icon: "⚡",
  },
  {
    slug: "hacktoberfest-contributing-to-open-source",
    title: "Hacktoberfest — Contributing to Open Source",
    excerpt:
      "My experience contributing to open source projects during Hacktoberfest.",
    date: "Oct 26, 2021",
    readingTime: "2 min read",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*YHTOtSEj-5RTXC77.png",
    category: "Open Source",
    icon: "🎃",
  },
  {
    slug: "commenting-code",
    title: "Code Also Has Emotions. Let's Comment Only When Required.",
    excerpt:
      "Writing cleaner, self-documenting code and knowing when comments add value.",
    date: "Jan 4, 2022",
    readingTime: "4 min read",
    image: "https://miro.medium.com/v2/resize:fit:1024/format:webp/0*5mMq16F57YYlYUhT.png",
    category: "Clean Code",
    icon: "💡",
  },
  {
    slug: "module-federation-webpack-5",
    title: "Module Federation — Sharing is Caring",
    excerpt:
      "Understanding micro frontends and sharing code across independently deployed applications.",
    date: "Apr 8, 2022",
    readingTime: "4 min read",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*OKZuGOoYAczdjQFx",
    category: "Architecture",
    icon: "🏗️",
  },
  {
    slug: "react18-hooks",
    title: "React 18 Hooks",
    excerpt:
      "Understanding the new features and improvements in React 18's hook system.",
    date: "Apr 8, 2022",
    readingTime: "4 min read",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*WoEP38yFpuRuqsfP.png",
    category: "Architecture",
    icon: "🏗️",
  },
];