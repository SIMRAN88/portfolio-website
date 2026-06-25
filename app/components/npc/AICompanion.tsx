"use client";

import { useState } from "react";
import RPGCard from "../ui/RPGCard";

import { oracleKnowledge } from "@/app/data/oracleKnowledge";

export default function AICompanion() {
  const [input, setInput] = useState("");

  const [response, setResponse] = useState(
    "Greetings traveler. Ask me about Simran's journey."
  );

  function askOracle(question: string) {
    const q = question.toLowerCase();

    if (q.includes("intuit")) {
      setResponse(oracleKnowledge.intuit);
      return;
    }

    if (q.includes("project")) {
      setResponse(oracleKnowledge.projects);
      return;
    }

    if (q.includes("skill")) {
      setResponse(oracleKnowledge.skills);
      return;
    }

    if (q.includes("architecture")) {
      setResponse(oracleKnowledge.architecture);
      return;
    }

    if (q.includes("ai")) {
      setResponse(oracleKnowledge.ai);
      return;
    }

    if (
      q.includes("hire") ||
      q.includes("why")
    ) {
      setResponse(oracleKnowledge.hire);
      return;
    }

    setResponse(
      "📜 That scroll has not yet been discovered."
    );
  }

  return (
    <RPGCard>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-[var(--text)]">
          🤖 The Oracle
        </h3>

        <p className="text-sm text-zinc-400">
          Keeper of Simran's Engineering Journey
        </p>
      </div>

      {/* Quick Actions */}

      <div className="flex flex-wrap gap-2 mb-5">
        {[
          "Tell me about Intuit",
          "Projects",
          "Skills",
          "Architecture",
          "AI Journey",
          "Why Hire Simran?",
        ].map((item) => (
          <button
            key={item}
            onClick={() => askOracle(item)}
            className="
              rounded-full
              border
              border-purple-500/20
              px-3
              py-2
              text-xs
              text-purple-300
              hover:bg-purple-500/10
            "
          >
            {item}
          </button>
        ))}
      </div>

      {/* Response */}

      <div
        className="
          min-h-[220px]
          rounded-xl
          border
          border-purple-500/10
          bg-black/20
          p-4
          whitespace-pre-line
          text-sm
          text-[var(--text-muted)]
        "
      >
        {response}
      </div>

      {/* Input */}

      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Ask The Oracle..."
          className="
            flex-1
            rounded-xl
            border
            border-purple-500/20
            bg-black/20
            px-4
            py-3
            text-sm
          "
        />

        <button
          onClick={() => {
            askOracle(input);
            setInput("");
          }}
          className="
            rounded-xl
            bg-purple-600
            px-4
            py-3
            text-[var(--text)]
          "
        >
          Ask
        </button>
      </div>
    </RPGCard>
  );
}