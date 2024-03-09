import { GameGrid } from "./_components/game-grid";
import { Keyboard } from "./_components/keyboard";

export default function Home() {
  return (
    <div className="flex h-full flex-col">
      <header className="flex h-16 shrink-0 items-center border-b border-neutral-800">
        <h1 className="mx-auto text-center text-3xl font-bold tracking-wide text-white">Wordle</h1>
      </header>
      <main className="flex grow flex-col items-center justify-around py-6 md:justify-normal md:gap-10">
        <GameGrid />
        <Keyboard />
      </main>
    </div>
  );
}
