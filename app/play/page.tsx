import { Hanken_Grotesk } from "next/font/google";
import { GameGrid } from "./_components/game-grid";

const font = Hanken_Grotesk({ subsets: ["latin"] });

const WORD = "alien";

export default function Home() {
  return (
    <>
      <header className="h-16 border-b border-neutral-800 flex items-center">
        <h1
          className="text-3xl font-bold tracking-wide text-center mx-auto text-white"
          style={font.style}
        >
          Wordle
        </h1>
      </header>
      <main className="p-4 flex items-center justify-center mt-20">
        <GameGrid cols={5} rows={6} correctWord={WORD} />
      </main>
    </>
  );
}
