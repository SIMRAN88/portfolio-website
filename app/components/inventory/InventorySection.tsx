import InventoryItem from "./InventoryItem";
import RPGCard from "../ui/RPGCard";
import Link from "next/link";

import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiTailwindcss,
  SiNodedotjs,
  SiRedux,
  SiDocker,
  SiOpenai,
  SiSupabase,
  SiExpo,
  SiJavascript,
  SiGithub,
  SiSplunk,
} from "react-icons/si";

export default function InventorySection() {
  const items = [
    {
      name: "React",
      icon: <SiReact className="text-cyan-500" />,
    },
     {
      name: "Javascript",
      icon: <SiJavascript className="text-yellow-500" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-[var(--text)]" />,
    },
    {
      name: "GraphQL",
      icon: <SiGraphql className="text-pink-500" />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-sky-500" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500" />,
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-[var(--accent)]" />,
    },
    {
      name: "OpenAI",
      icon: <SiOpenai className="text-emerald-500" />,
    },
    {
      name: "React Native",
      icon: <SiReact className="text-sky-500" />,
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="text-green-500" />,
    },
    {
      name: "Expo",
      icon: <SiExpo className="text-[var(--text)]" />,
    },
    {
      name: "Github",
      icon: <SiGithub className="text-sky-500" />,
    },
    {
      name: "Amplitude",
      icon: <SiSplunk className="text-green-500" />,
    },
    {
      name: "Splunk",
      icon: <SiSplunk className="text-orange-500" />,
    },
  ];

  return (
    <RPGCard>
      <div className="mb-4">
        <h3
          className="
            text-2xl
            font-bold
            text-[var(--text)]
          "
        >
          Inventory
        </h3>

        <p
          className="
            text-sm
            text-[var(--text-muted)]
          "
        >
          My arsenal of technologies
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {items.map((item) => (
          <InventoryItem
            key={item.name}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </div>

      <Link
        href="/inventory"
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
        View All Tools →
      </Link>
    </RPGCard>
  );
}