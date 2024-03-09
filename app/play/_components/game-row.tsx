import { COLS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type GameRowProps = {
  guess: string;
  state: ("correct" | "present" | "absent")[];
};

export function GameRow({ guess, state }: GameRowProps) {
  const cols = Array(COLS).fill(0);

  return (
    <div className="flex w-full justify-center gap-2">
      {cols.map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex h-14 w-full max-w-14 items-center justify-center border-2 border-neutral-700 text-3xl font-bold uppercase text-white transition duration-1000 md:h-16 md:max-w-16",
            state[i] === "absent" && "border-0 bg-neutral-700",
            state[i] === "present" && "border-0 bg-yellow-500/80",
            state[i] === "correct" && "border-0 bg-green-500/50",
          )}
          style={{ transitionDelay: `${i * 500}ms` }}
        >
          {guess[i] ?? ""}
        </div>
      ))}
    </div>
  );
}
