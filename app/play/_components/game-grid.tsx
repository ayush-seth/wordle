"use client";

import { ROWS, WORD } from "@/lib/constants";
import { useActiveGuess, useActiveRow, useGameActions, useGuesses } from "@/lib/game-store";
import { toast } from "sonner";
import { useEventListener } from "usehooks-ts";
import { GameRow } from "./game-row";

const rows = Array(ROWS).fill(0);

export function GameGrid() {
  const guesses = useGuesses();
  const activeGuess = useActiveGuess();
  const activeRow = useActiveRow();
  const { addLetter, removeLetter, moveToNextRow } = useGameActions();

  useEventListener("keydown", async (e) => {
    const isModifierKey = e.metaKey || e.shiftKey || e.ctrlKey || e.altKey;
    if (isModifierKey) {
      return;
    }

    if (e.code === "Backspace") {
      removeLetter();
    }

    if (e.code === "Enter" && activeGuess.length === 5) {
      if (activeGuess === WORD) {
        toast.success("Correct!");
      } else {
        toast.error("Incorrect!");
        moveToNextRow();
      }
    }

    if (activeGuess.length === 5) {
      return;
    }

    const isLetter = e.key.match(/^[a-z]$/i);
    if (isLetter) {
      addLetter(e.key);
    }
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
        <GameRow key={i} guess={guesses[i]!} active={i === activeRow} guessOver={i < activeRow} />
      ))}
    </div>
  );
}
