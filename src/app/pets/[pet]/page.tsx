import PetCard from "@/components/PetCard";

export default function Page({ params }: { params: { slug: string } }) {
  return <h1>{params.slug}</h1>;
}
