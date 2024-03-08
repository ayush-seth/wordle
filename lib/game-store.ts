import { create } from "zustand";
import { WORD } from "./constants";
import { computeState } from "./utils";

type GameStore = {
  guesses: Record<number, string>;
  guessStates: Record<number, ("correct" | "present" | "absent")[]>;
  gameState: "playing" | "won" | "lost";
  activeRow: number;
  actions: {
    addLetter: (char: string) => void;
    removeLetter: () => void;
    submitGuess: () => void;
  };
};

const useGameStore = create<GameStore>((set) => ({
  guesses: { 0: "", 1: "", 2: "", 3: "", 4: "", 5: "" },
  guessStates: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [] },
  gameState: "playing",
  activeRow: 0,
  actions: {
    addLetter: (char: string) =>
      set((state) => {
        const guess = state.guesses[state.activeRow]!;
        if (guess.length === 5) {
          return {};
        }

        return {
          guesses: {
            ...state.guesses,
            [state.activeRow]: guess + char,
          },
        };
      }),
    removeLetter: () =>
      set((state) => ({
        guesses: {
          ...state.guesses,
          [state.activeRow]: state.guesses[state.activeRow]!.slice(0, -1),
        },
      })),
    submitGuess: () =>
      set((state) => {
        const guess = state.guesses[state.activeRow]!;
        if (guess.length !== 5) {
          return {};
        }

        if (guess === WORD) {
          return {
            gameState: "won",
            guessStates: {
              ...state.guessStates,
              [state.activeRow]: ["correct", "correct", "correct", "correct", "correct"],
            },
          };
        }

        return {
          activeRow: state.activeRow + 1,
          guessStates: { ...state.guessStates, [state.activeRow]: computeState(WORD, guess) },
        };
      }),
  },
}));

export const useGuesses = () => useGameStore((state) => state.guesses);
export const useActiveGuess = () => useGameStore((state) => state.guesses[state.activeRow]!);
export const useGuessStates = () => useGameStore((state) => state.guessStates);
export const useActiveRow = () => useGameStore((state) => state.activeRow);
export const useGameActions = () => useGameStore((state) => state.actions);
