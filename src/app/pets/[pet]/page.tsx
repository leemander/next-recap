import PetCard from "@/components/PetCard";
import { getPetBySlug } from "@/lib/pets-lib";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { pet: string } }) {
  const pet = getPetBySlug(params.pet);

  if (!pet) {
    notFound();
  }

  return (
    <main>
      <PetCard pet={pet} />
    </main>
  );
}
