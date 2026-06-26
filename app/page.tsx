import Navbar from "./components/layout/Navbar";

import CharacterPanel from "./components/hero/CharacterPanel";
import StatsPanel from "./components/hero/StatsPanel";
import HeroSection from "./components/hero/HeroSection";

import SkillsTree from "./components/skills/SkillTree";
import InventorySection from "./components/inventory/InventorySection";
import AchievementsSection from "./components/achievements/AchievementsSection";

import QuestLog from "./components/quest-log/QuestLog";
import BlogPreview from "./components/blogs/BlogPreview";
import ContactTavern from "./components/contact/ContactTavern";
import AICompanion from "./components/npc/AICompanion";
import FeaturedProjects from "./components/projects/FeaturedProjects";
import AdventureOverview from "./components/hero/AdventureOverview";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        overflow-x-hidden
        bg-[#030712]
        text-[var(--text)]
      "
    >
      <Navbar />

      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          pb-20
          sm:px-6
          lg:px-8
        "
      >
     <section id="home" className="pt-6 lg:pt-10">
  {/* Desktop */}

  <div className="hidden lg:grid lg:grid-cols-[280px_1fr] gap-6 items-start">
    <div className="space-y-4">
      <CharacterPanel />
      <StatsPanel />
    </div>

    <div className="space-y-6">
      <HeroSection />
      <AdventureOverview />
    </div>
  </div>

  {/* Mobile / Tablet */}

  <div className="space-y-6 lg:hidden">
    <HeroSection />

    <CharacterPanel />

    <StatsPanel />

    <AdventureOverview />
  </div>
</section>

        {/* PROJECTS */}

        <section
          id="projects"
          className="mt-12"
        >
          <FeaturedProjects />
        </section>

        {/* SKILLS / INVENTORY / ACHIEVEMENTS */}

        <section
          id="skills"
          className="
            mt-12
            grid
            gap-6

            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          <SkillsTree />

          <div id="inventory">
            <InventorySection />
          </div>

          <div
            id="achievements"
            className="
              md:col-span-2
              xl:col-span-1
            "
          >
            <AchievementsSection />
          </div>
        </section>

        {/* JOURNAL */}

        <section
          id="journal"
          className="
            mt-12
            grid
            gap-6

            grid-cols-1
            lg:grid-cols-2
          "
        >
          <QuestLog />

          <BlogPreview />
        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="
            mt-12
            grid
            gap-6

            grid-cols-1
            lg:grid-cols-2
          "
        >
          <ContactTavern />

          <AICompanion />
        </section>
      </div>
    </main>
  );
}