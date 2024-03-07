import { cn } from "@/lib/utils";

type LetterBoxProps = {
  index: number;
  letter?: string;
  state?: "correct" | "present" | "absent";
};

export function LetterBox({ index, letter, state }: LetterBoxProps) {
  return (
    <div
      className={cn(
        "w-16 h-16 border-2 text-white text-3xl flex items-center font-bold justify-center uppercase border-neutral-700 transition duration-1000",
        {
          "border-transparent bg-green-500/50": state === "correct",
          "border-transparent bg-yellow-500/80": state === "present",
          "border-transparent bg-neutral-700": state === "absent",
        }
      )}
      style={{ transitionDelay: `${index * 500}ms` }}
    >
      {letter}
    </div>
  );
}
