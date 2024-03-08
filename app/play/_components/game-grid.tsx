"use client";

import { ROWS } from "@/lib/constants";
import { useActiveGuess, useActiveRow, useGameActions, useGuessStates, useGuesses } from "@/lib/game-store";
import { useEventListener } from "usehooks-ts";
import { GameRow } from "./game-row";

const rows = Array(ROWS).fill(0);

export function GameGrid() {
  const guesses = useGuesses();
  const activeGuess = useActiveGuess();
  const guessStates = useGuessStates();
  const activeRow = useActiveRow();
  const { addLetter, removeLetter, submitGuess } = useGameActions();

  useEventListener("keydown", async (e) => {
    const isModifierKey = e.metaKey || e.shiftKey || e.ctrlKey || e.altKey;
    if (isModifierKey) {
      return;
    }

    if (e.code === "Backspace") {
      removeLetter();
    }

    if (e.code === "Enter") {
      submitGuess();
    }

    const isLetter = e.key.match(/^[a-z]$/i);
    if (isLetter) {
      addLetter(e.key);
    }
  });

  return (
    <div className="space-y-2">
      {rows.map((_, i) => (
        <GameRow key={i} guess={guesses[i]!} state={guessStates[i]!} />
      ))}
    </div>
  );
}
