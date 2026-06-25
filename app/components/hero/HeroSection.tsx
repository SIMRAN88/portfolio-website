import Image from "next/image";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import QuestCard from "./QuestCard";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        shadow-sm

        p-4
        min-[390px]:p-5
        sm:p-6
        lg:p-8
      "
    >
      <HeroBackground />

      <div className="relative z-10">
        {/* ========================= */}
        {/* Mobile / Tablet Layout */}
        {/* ========================= */}

        <div className="flex flex-col lg:hidden">
          {/* Content */}

          <HeroContent />

          {/* Character */}

          <div className="mt-8 flex justify-center">
            <div
              className="
                relative

                h-56
                w-40

                min-[390px]:h-64
                min-[390px]:w-44

                sm:h-72
                sm:w-52
              "
            >
              <Image
                src="/avatars/new.png"
                alt="Simran Character"
                fill
                priority
                sizes="(max-width:640px) 176px, 208px"
                className="
                  object-contain
                  drop-shadow-2xl
                  select-none
                "
              />
            </div>
          </div>

          {/* Quest */}

          <div className="mt-8">
            <QuestCard />
          </div>
        </div>

        {/* ========================= */}
        {/* Desktop Layout */}
        {/* ========================= */}

        <div className="hidden lg:block">
          <div
            className="
              grid
              grid-cols-[260px_1fr]
              items-center
              gap-10
            "
          >
            {/* Character */}

            <div className="flex justify-center">
              <div
                className="
                  relative
                  h-[420px]
                  w-[260px]
                "
              >
                <Image
                  src="/avatars/new.png"
                  alt="Simran Character"
                  fill
                  priority
                  sizes="260px"
                  className="
                    object-contain
                    drop-shadow-2xl
                    select-none
                  "
                />
              </div>
            </div>

            {/* Content */}

            <HeroContent />
          </div>

          <div className="mt-8">
            <QuestCard />
          </div>
        </div>
      </div>
    </section>
  );
}