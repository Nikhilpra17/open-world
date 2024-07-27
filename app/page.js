import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-12 md:mt-24">
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-8xl text-primary-50 mb-6 md:mb-10 tracking-tight font-normal">
          Welcome to Aarti
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-4 md:px-8 py-3 md:py-6 text-primary-800 text-base md:text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore Cosmic Eternity
        </Link>
      </div>
    </main>
  );
}
