import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import { Sparkles, ScrollText } from "lucide-react";

export default function QuestCard() {
  return (
    <Card className="mt-2 max-w-[750px] p-5">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Sparkles
            size={28}
            className="text-yellow-400"
          />

          <div>
            <p className="font-pixel text-[10px]">
              CURRENT QUEST
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Master AI Engineering and build
              products that empower millions.
            </p>
          </div>
        </div>

        <div className="w-[180px]">
          <div className="mb-2 text-xs">
            66%
          </div>

          <ProgressBar value={66} />
        </div>

        <ScrollText
          size={30}
          className="text-amber-400"
        />
      </div>
    </Card>
  );
}