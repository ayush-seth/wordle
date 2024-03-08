"use client";

import { COLS, ROWS, WORD } from "@/lib/constants";
import { useState } from "react";
import { toast } from "sonner";
import { useEventListener } from "usehooks-ts";
import { GameRow } from "./game-row";

export function GameGrid() {
  const rows = Array(ROWS).fill(0);
  const cols = Array(COLS).fill(0);

  const [activeRow, setActiveRow] = useState(0);
  const [guesses, setGuesses] = useState<string[]>(["", "", "", "", "", ""]);

  useEventListener("keydown", async (e) => {
    if (e.metaKey || e.shiftKey || e.ctrlKey || e.altKey) {
      return;
    }

    if (e.code === "Backspace") {
      setGuesses((guesses) => {
        const copy = [...guesses];
        copy[activeRow] = copy[activeRow]!.slice(0, -1);
        return copy;
      });
      return;
    }

    if (e.code === "Enter" && guesses[activeRow]?.length === 5) {
      if (guesses[activeRow] === WORD) {
        toast.success("Correct!");
      } else {
        toast.error("Incorrect!");
      }
      setActiveRow((activeRow) => activeRow + 1);
      return;
    }

    if (!e.code.startsWith("Key")) {
      return;
    }

    if (guesses[activeRow]?.length === 5) {
      return;
    }

    setGuesses((guesses) => {
      const copy = [...guesses];
      copy[activeRow] = copy[activeRow] + e.key;
      return copy;
    });
  });

  if (activeRow >= ROWS) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold">Game Over</h1>
        <h2 className="text-2xl font-bold">The word was {WORD}</h2>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {rows.map((_, i) => (
        <GameRow
          key={i}
          guess={guesses[i] ?? ""}
          active={i === activeRow}
          guessOver={i < activeRow}
        />
      ))}
    </div>
  );
}
