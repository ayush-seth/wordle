import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function KeyboardKey({ value, children }: { value: string; children: ReactNode }) {
  return (
    <button
      className={cn(
        "flex h-14 w-10 items-center justify-center rounded-md bg-neutral-800 font-bold uppercase",
        (value === "enter" || value === "backspace") && "w-16",
      )}
    >
      {children}
    </button>
  );
}
