import { apiUrl, cmsUrl, fetchWrapper } from "@/helpers/cmsrequest";
import { Festival, User } from "@/types";
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

const getGoers = async (goerIds: string[]) => {
  if (goerIds?.length === 0) return [];
  const result: User[] = goerIds.map(async (goer) => {
    const { directus_users_id } = await fetchWrapper(`/items/festivals_directus_users/${goer}`)
    const response = await fetch(`${apiUrl}/api/users/${directus_users_id}`);
    const { data } = await response.json();
    console.log('data', data)
    result.push(data)
  })
  console.log('goers', result)
  return result;
}

const FestivalDetails = async ({ params: { festivalId } }: { params: { festivalId: string } }) => {
  const festival = await getData(festivalId);
  const goers = await getGoers(festival.goers);
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
        <p>goers</p>
        {
          goers.map(goer => <p>{goer.first_name}</p>)
        }
        {/* <p>{festival2.name}</p> */}
      </div>
      <Link href="/">Back</Link>
    </section>
  );
};

export default FestivalDetails;
