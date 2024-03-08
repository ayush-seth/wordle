import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function isWordValid(word: string) {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

  return res.ok;
}

export function computeState(correctWord: string, guess: string) {
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
