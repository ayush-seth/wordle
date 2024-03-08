import { COLS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type GameRowProps = {
  guess: string;
  active?: boolean;
  guessOver?: boolean;
  onGuess?: (guess: string) => void;
};

export function GameRow({ guess, active = false, guessOver = false, onGuess }: GameRowProps) {
  const cols = Array(COLS).fill(0);

  return (
    <div className="flex gap-2">
      {cols.map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex h-16 w-16 items-center justify-center border-2 border-neutral-700 text-3xl font-bold uppercase text-white transition duration-1000",
            guessOver && "bg-neutral-700",
            //  {
            //    "border-transparent bg-green-500/50": state === "correct",
            //    "border-transparent bg-yellow-500/80": state === "present",
            //    "border-transparent bg-neutral-700": state === "absent",
            //  }
          )}
          //  style={{ transitionDelay: `${index * 500}ms` }}
        >
          {guess[i]}
        </div>
      ))}
    </div>
  );
}
