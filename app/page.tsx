import Link from "next/link";

const WORD = "alien";

export default function Home() {
  return (
    <>
      <header className="flex h-16 items-center border-b border-neutral-800">
        <h1 className="mx-auto text-center text-3xl font-bold tracking-wide">Wordle</h1>
      </header>
      <main className="mt-20 flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-bold">Welcome to wordle!</h1>
        <div className="mt-10">
          <Link href="/play" className="rounded-full bg-white px-10 py-3 text-lg font-medium tracking-wide text-black">
            Play
          </Link>
        </div>
      </main>
    </>
  );
}
