import { getPets, typePets } from "@/lib/pets-lib";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pets | Paws 'n' Claws Adoption Emporium",
  description: "A list of pets up for adoption",
};

type petSearchQuery = {
  sortByAge: string;
};

function comparePets(a: typePets, b: typePets) {
  if (a.age < b.age) {
    return -1;
  } else if (a.age > b.age) {
    return 1;
  } else {
    return 0;
  }
}

export default function Page({
  searchParams,
}: {
  searchParams: petSearchQuery;
}) {
  const pets = getPets();

  let sortedPets = [...pets];

  if (searchParams.sortByAge === "asc") {
    sortedPets.sort(comparePets);
  } else if (searchParams.sortByAge == "desc") {
    sortedPets.sort(comparePets).reverse();
  }

  return (
    <main>
      <h2>Check out the pets!</h2>
      <div className="flex gap-4">
        <Link className="text-black" href="/pets?sortByAge=asc">
          Sort by ascending age
        </Link>
        <Link className="text-black" href="/pets?sortByAge=desc">
          Sort by descending age
        </Link>
        <Link className="text-black" href="/pets">
          Remove sort
        </Link>
      </div>
      <ul className="grid gap-2 my-4">
        {sortedPets.map((pet) => {
          return (
            <li key={pet.slug}>
              <Link href={`/pets/${pet.slug}`}>{pet.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
