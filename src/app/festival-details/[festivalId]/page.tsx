import { apiUrl, cmsUrl, fetchWrapper } from "@/helpers/cmsrequest";
import { Festival, Goer, User } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function fetchFestivalDetails(id: string) {
  const response = await fetch(`${apiUrl}/api/festivals/${id}`);
  const { data } = await response.json();
  return data;
}

const FestivalDetails = async ({
  params: { festivalId },
}: {
  params: { festivalId: string };
}) => {
  const festival = await fetchFestivalDetails(festivalId);

  return (
    <section>
      <h1>Detalhes do Festival</h1>
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
        {festival.goers.map(
          ({
            directus_users_id: { first_name, last_name },
          }: {
            directus_users_id: User;
          }) => (
            <p key={first_name}>
              {first_name} {last_name}
            </p>
          )
        )}
      </div>
      <Link href="/">Back</Link>
    </section>
  );
};

export default FestivalDetails;
