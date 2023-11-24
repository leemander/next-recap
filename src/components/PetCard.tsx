import Image from "next/image";

export default function PetCard({ pet }) {
  return (
    <article className="grid gap-4">
      <h2 className="text-2xl font-bold">{pet.name}</h2>
      {pet.image && (
        <Image
          alt={`${
            pet.name
          }, a ${pet.color.toLowerCase()} ${pet.species.toLowerCase()}`}
          className="pet__image"
          height={500}
          src={pet.image}
          width={500}
        />
      )}
      <div className="flex gap-4">
        <p>
          <strong>Species: </strong>
          {pet.species}
        </p>
        <p>
          <strong>Breed:</strong> {pet.breed}
        </p>
        <p>
          <strong>Age: </strong>
          {pet.age}
        </p>
      </div>
      <p>
        <strong>Fun fact: </strong>
        {pet.fun_fact}
      </p>
    </article>
  );
}
