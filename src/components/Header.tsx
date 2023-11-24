import Link from "next/link";

export default function Header() {
  return (
    <header className=" p-4 bg-blue-300">
      <div className="container mx-auto m-4 flex justify-between">
        <h1 className="text-3xl font-serif text-blue-900 font-semibold">
          Paws 'n' Claws
        </h1>
        <nav>
          <ul className="flex gap-4 text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pets">Pets</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
