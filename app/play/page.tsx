import { GameGrid } from "./_components/game-grid";

export default function Home() {
  return (
    <>
      <header className="h-16 border-b border-neutral-800 flex items-center">
        <h1 className="text-3xl font-bold tracking-wide text-center mx-auto text-white">
          Wordle
        </h1>
      </header>
      <main className="p-4 flex items-center justify-center mt-20">
        <GameGrid />
      </main>
    </>
  );
}
