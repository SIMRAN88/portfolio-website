import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import LevelBadge from "./LevelBadge";

import {
  Hammer,
  Shield,
  Keyboard,
  MapPin,
  Circle,
} from "lucide-react";

const player = {
  name: "SIMRAN RAJ",
  title: "Senior Frontend Engineer",
  xpCurrent: "18,420",
  xpMax: "25,000",
};

const details = [
  {
    icon: Hammer,
    label: "Class",
    value: "Engineer",
  },
  {
    icon: Shield,
    label: "Guild",
    value: "Builders Guild",
  },
  {
    icon: Keyboard,
    label: "Weapon",
    value: "Keyboard",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
  },
];

export default function CharacterPanel() {
  return (
    <Card
      className="
        p-4
        min-[390px]:p-5
        lg:p-6
      "
    >
      <div className="space-y-5">
        {/* Header */}

        <div>
          <h2
            className="
              font-pixel
              text-xs
              text-yellow-500

              min-[390px]:text-sm
            "
          >
            {player.name}
          </h2>

          <p
            className="
              mt-2
              text-sm
              leading-relaxed
              text-[var(--text-muted)]
            "
          >
            {player.title}
          </p>
        </div>

        {/* Level */}

        <LevelBadge />

        {/* XP */}

        <div>
          <div
            className="
              mb-2
              flex
              items-center
              justify-between
              text-xs
              text-[var(--text-muted)]
            "
          >
            <span>XP</span>

            <span>
              {player.xpCurrent}/{player.xpMax}
            </span>
          </div>

          <ProgressBar value={74} />
        </div>

        {/* Divider */}

        <div
          className="
            border-t
            border-[var(--border)]
            pt-5
          "
        >
          <div className="space-y-4">
            {details.map((item) => (
              <div
                key={item.label}
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    shrink-0
                  "
                >
                  <item.icon
                    size={16}
                    className="text-amber-500"
                  />

                  <span
                    className="
                      text-sm
                      text-[var(--text-muted)]
                    "
                  >
                    {item.label}
                  </span>
                </div>

                <span
                  className="
                    max-w-[130px]
                    text-right
                    text-sm
                    font-semibold
                    break-words
                    text-[var(--text)]
                  "
                >
                  {item.value}
                </span>
              </div>
            ))}

            {/* Status */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-4
              "
            >
              <div className="flex items-center gap-3">
                <Circle
                  size={12}
                  fill="currentColor"
                  className="text-green-500"
                />

                <span
                  className="
                    text-sm
                    text-[var(--text-muted)]
                  "
                >
                  Status
                </span>
              </div>

              <span
                className="
                  rounded-full
                  bg-green-500/10
                  px-3
                  py-1

                  text-xs
                  font-semibold
                  text-green-500
                "
              >
                Online
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div
          className="
            rounded-xl
            border
            border-[var(--border)]
            bg-[var(--card-secondary)]
            p-3
          "
        >
          <p
            className="
              text-center
              text-xs
              leading-relaxed
              text-[var(--text-muted)]
            "
          >
            ⚔️ Currently on the quest to become an
            <span className="font-semibold text-[var(--accent)]">
              {" "}
              AI Engineering Master
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
}