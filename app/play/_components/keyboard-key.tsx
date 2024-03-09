"use client";

import { useGameActions } from "@/lib/game-store";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function KeyboardKey({ value, children }: { value: string; children: ReactNode }) {
  const { addLetter, removeLetter, submitGuess } = useGameActions();

  return (
    <button
      className={cn(
        "flex h-12 w-8 items-center justify-center rounded-md bg-neutral-800 font-medium uppercase transition-colors active:bg-black md:h-16 md:w-12",
        (value === "enter" || value === "backspace") && "max-w-12 grow md:max-w-16",
      )}
      onClick={() => {
        switch (value) {
          case "enter":
            submitGuess();
            break;
          case "backspace":
            removeLetter();
            break;
          default:
            addLetter(value);
        }
      }}
    >
      {children}
    </button>
  );
}
