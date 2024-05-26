import { apiUrl, cmsUrl, fetchWrapper } from "@/helpers/cmsrequest";
import { Festival } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (festivalId: string) => {
  const response = await fetchWrapper(`/items/festivals/${festivalId}`);
  return response
}

async function fetchFestivalDetails(id: string) {
  const response = await fetch(`${apiUrl}/api/festivals/${id}`);
  const { data } = await response.json();
  return data;
}

const FestivalDetails = async ({ params: { festivalId } }: { params: { festivalId: string } }) => {
  console.log(festivalId)
  const festival = await getData(festivalId);
  // const festival2 = await fetchFestivalDetails(festivalId);

  return (
    <section>
      <h1>Festival Details</h1>
      <p>{festivalId}</p>
      <div>
        <h2>{festival.name}</h2>
        <p>{festival.date}</p>
        <p>{festival.location}</p>
        <Image
          src={`${cmsUrl}/assets/${festival.image}`}
          alt={festival.name}
          width={300}
          height={200}
        />
        {/* <p>{festival2.name}</p> */}
      </div>
      <Link href="/">Back</Link>
    </section>
  );
};

export default FestivalDetails;
