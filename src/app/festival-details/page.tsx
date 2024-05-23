import { fetchWrapper } from "@/helpers/fetch";
import { Festival } from "@/types";
import Image from "next/image";
import React from "react";

async function getData() {
  return await fetchWrapper('/items/festivals')
}

const FestivalDetails = async () => {
  const data = await getData();

  return (
    <div>
      <h1>Festivais</h1>
      {data.map((festival: Festival) => {
        return (
          <div key={festival.id}>
            <h2>{festival.name}</h2>
            <p>{festival.date}</p>
            <p>{festival.location}</p>
            <Image
              src={`https://directus-production-1635.up.railway.app/assets/${festival.image}`}
              alt={festival.name}
              width={300}
              height={200}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FestivalDetails;
