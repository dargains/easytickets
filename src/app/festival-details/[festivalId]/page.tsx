import { fetchWrapper } from "@/helpers/cmsrequest";
import { Festival } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData(festivalId: string) {
  const response = await fetch('/api/festivals/' + festivalId)
  return await response.json()
}

const FestivalDetails = async ({ params }: { params: { festivalId: string } }) => {
  const festival: Festival = await getData(params.festivalId);

  return (
    <section>
      <h1>Detalhes do Festival</h1>
      <div>
        <h2>{festival.name}</h2>
        <p>{festival.date}</p>
        <p>{festival.location}</p>
        <Image
          src={`${process.env.CMS_ENDPOINT}/assets/${festival.image}`}
          alt={festival.name}
          width={300}
          height={200}
        />
      </div>
      <Link href="/">voltar</Link>
    </section>
  );
};

export default FestivalDetails;
