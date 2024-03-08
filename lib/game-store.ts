import { create } from "zustand";

type GameStore = {
  guesses: Record<number, string>;
  activeRow: number;
  actions: {
    moveToNextRow: () => void;
    addLetter: (char: string) => void;
    removeLetter: () => void;
  };
};

export const useGameStore = create<GameStore>((set) => ({
  guesses: { 0: "", 1: "", 2: "", 3: "", 4: "", 5: "" },
  activeRow: 0,
  actions: {
    moveToNextRow: () => set((state) => ({ activeRow: state.activeRow + 1 })),
    addLetter: (char: string) =>
      set((state) => ({
        guesses: {
          ...state.guesses,
          [state.activeRow]: state.guesses[state.activeRow] + char,
        },
      })),
    removeLetter: () =>
      set((state) => ({
        guesses: {
          ...state.guesses,
          [state.activeRow]: state.guesses[state.activeRow]!.slice(0, -1),
        },
      })),
  },
}));

export const useGuesses = () => useGameStore((state) => state.guesses);
export const useActiveGuess = () => useGameStore((state) => state.guesses[state.activeRow]!);
export const useActiveRow = () => useGameStore((state) => state.activeRow);
export const useGameActions = () => useGameStore((state) => state.actions);
