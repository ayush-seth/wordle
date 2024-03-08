import { COLS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type GameRowProps = {
  guess: string;
  state: ("correct" | "present" | "absent")[];
};

export function GameRow({ guess, state }: GameRowProps) {
  const cols = Array(COLS).fill(0);

  return (
    <div className="flex gap-2">
      {cols.map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex h-16 w-16 items-center justify-center border-2 border-neutral-700 text-3xl font-bold uppercase text-white transition-all duration-1000",
            state[i] === "absent" && "border-0 bg-neutral-700",
            state[i] === "present" && "border-0 bg-yellow-500/80",
            state[i] === "correct" && "border-0 bg-green-500/50",
          )}
          style={{ transitionDelay: `${i * 500}ms` }}
        >
          {guess[i]}
        </div>
      ))}
    </div>
  );
}
