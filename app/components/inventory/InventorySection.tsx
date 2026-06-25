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
} from "react-icons/si";

export default function InventorySection() {
  const items = [
    {
      name: "React",
      icon: <SiReact className="text-cyan-500" />,
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
      name: "Docker",
      icon: <SiDocker className="text-blue-500" />,
    },
    {
      name: "OpenAI",
      icon: <SiOpenai className="text-emerald-500" />,
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

      <div className="grid grid-cols-3 gap-3">
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