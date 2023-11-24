import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Paws 'n' Claws</h1>
      <Link href="/pets">See the pets!</Link>
    </main>
  );
}
