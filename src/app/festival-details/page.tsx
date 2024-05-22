import Image from "next/image";
import React from "react";

export type Festival = {
  id: number;
  status: "draft" | "published" | "archived";
  sort: null;
  date_created: string;
  date_updated: string;
  name: string;
  date: string;
  location: string;
  image: string;
};

async function getData() {
  const res = await fetch(
    "https://directus-production-1635.up.railway.app/items/festivals"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const FestivalDetails = async () => {
  const { data } = await getData();
  console.log(data);
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
