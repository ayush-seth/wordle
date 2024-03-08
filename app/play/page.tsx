import { GameGrid } from "./_components/game-grid";
import { Keyboard } from "./_components/keyboard";

export default function Home() {
  return (
    <>
      <header className="flex h-16 items-center border-b border-neutral-800">
        <h1 className="mx-auto text-center text-3xl font-bold tracking-wide text-white">Wordle</h1>
      </header>
      <main className="mt-20 flex flex-col items-center justify-center gap-20 p-4">
        <GameGrid />
        <Keyboard />
      </main>
    </>
  );
}
