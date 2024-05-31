import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cmsUrl } from "@/helpers/functions";
import { Festival, User } from "@/types";
import { getFestivalDetails } from "@/app/libs/Festival";

const FestivalDetails = async ({
  params: { festivalId },
}: {
  params: { festivalId: string };
}) => {
  const festival: Festival = await getFestivalDetails(festivalId);
  const hasGoers = festival?.goers?.length

  return (
    <section>
      <h1>Detalhes do Festival</h1>
      {festival ?
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
          {
            hasGoers ?
              <>
                <p>goers</p>
                {festival.goers.map(
                  ({
                    directus_users_id: { first_name, last_name, id },
                  }: {
                    directus_users_id: User;
                  }) => (
                    <p key={id}>
                      <Link href={`/goer/${id}`} key={id}>
                        {first_name} {last_name}
                      </Link>
                    </p>
                  )
                )}</> : ''
          }
        </div> : <p>falha</p>

      }
      <Link href="/">Back</Link>
    </section>
  );
};

export default FestivalDetails;
