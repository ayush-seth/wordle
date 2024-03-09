import { CornerDownLeftIcon, DeleteIcon } from "lucide-react";
import { KeyboardKey } from "./keyboard-key";

const topRow = [
  { value: "q" },
  { value: "w" },
  { value: "e" },
  { value: "r" },
  { value: "t" },
  { value: "y" },
  { value: "u" },
  { value: "i" },
  { value: "o" },
  { value: "p" },
];

const middleRow = [
  { value: "a" },
  { value: "s" },
  { value: "d" },
  { value: "f" },
  { value: "g" },
  { value: "h" },
  { value: "j" },
  { value: "k" },
  { value: "l" },
];

const bottomRow = [
  { value: "enter", icon: <CornerDownLeftIcon size={20} /> },
  { value: "z" },
  { value: "x" },
  { value: "c" },
  { value: "v" },
  { value: "b" },
  { value: "n" },
  { value: "m" },
  { value: "backspace", icon: <DeleteIcon size={20} /> },
];

export function Keyboard() {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <div className="flex justify-center gap-1.5">
        {topRow.map((key) => (
          <KeyboardKey key={key.value} value={key.value}>
            {key.value}
          </KeyboardKey>
        ))}
      </div>
      <div className="flex justify-center gap-1.5">
        {middleRow.map((key) => (
          <KeyboardKey key={key.value} value={key.value}>
            {key.value}
          </KeyboardKey>
        ))}
      </div>
      <div className="flex justify-center gap-1.5">
        {bottomRow.map((key) => (
          <KeyboardKey key={key.value} value={key.value}>
            {key.icon ?? key.value}
          </KeyboardKey>
        ))}
      </div>
    </div>
  );
}
