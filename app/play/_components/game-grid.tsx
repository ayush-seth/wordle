"use client";

import { isWordValid } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";
import { useEventListener } from "usehooks-ts";
import { LetterBox } from "./letter-box";

type GameGridProps = {
  rows: number;
  cols: number;
  correctWord: string;
};

export function GameGrid({ rows, cols, correctWord }: GameGridProps) {
  const ROWS = Array(rows).fill(0);
  const COLS = Array(cols).fill(0);

  const [guess, setGuess] = useState("");
  const [state, setState] = useState<("correct" | "present" | "absent")[]>();

  useEventListener("keydown", async (e) => {
    if (e.metaKey || e.shiftKey || e.ctrlKey || e.altKey) {
      return;
    }

    if (e.code === "Backspace") {
      setGuess((guess) => guess.slice(0, -1));
      return;
    }

    if (e.code === "Enter" && guess.length === 5) {
      const valid = await isWordValid(guess);
      if (valid) {
        setState(computeState(correctWord, guess));
      } else {
        toast.error("Not in word list");
      }
    }

    if (!e.code.startsWith("Key")) {
      return;
    }

    if (guess.length === 5) {
      return;
    }

    setGuess((guess) => guess + e.key);
  });

  return (
    <div className="space-y-2">
      {ROWS.map((_, i) => (
        <div key={i} className="flex gap-2">
          {COLS.map((_, j) => (
            <LetterBox
              key={`${i}${j}`}
              index={j}
              letter={guess[i * ROWS.length + j]}
              state={state?.[i * ROWS.length + j]}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function computeState(correctWord: string, guess: string) {
  const state: ("correct" | "present" | "absent")[] = [];
  for (let i = 0; i < guess.length; i++) {
    if (correctWord[i] === guess[i]) {
      state.push("correct");
    } else if (correctWord.includes(guess[i]!)) {
      state.push("present");
    } else {
      state.push("absent");
    }
  }

  return state;
}
