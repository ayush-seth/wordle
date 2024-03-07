import Link from "next/link";

const WORD = "alien";

export default function Home() {
  return (
    <>
      <header className="h-16 border-b border-neutral-800 flex items-center">
        <h1 className="text-3xl font-bold tracking-wide text-center mx-auto">
          Wordle
        </h1>
      </header>
      <main className="p-4 flex flex-col items-center justify-center mt-20">
        <h1 className="text-5xl font-bold">Welcome to wordle!</h1>
        <div className="mt-10">
          <Link
            href="/play"
            className="rounded-full font-medium tracking-wide px-10 py-3 bg-white text-black text-lg"
          >
            Play
          </Link>
        </div>
      </main>
    </>
  );
}
