import { apiUrl, cmsUrl } from "@/helpers/functions";
import { User } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function fetchGoerDetails(id: string) {
  const response = await fetch(`${apiUrl}/api/users/${id}`);
  const { data } = await response.json();
  return data;
}

const GoerDetails = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const goer: User = await fetchGoerDetails(userId);

  return (
    <section>
      <h1>Detalhes do user</h1>
      <div>
        <p>{goer.first_name}</p>
        <p>{goer.last_name}</p>
        <Image
          src={`${cmsUrl}/assets/${goer.avatar}`}
          alt={goer.first_name || "avatar"}
          width={200}
          height={200}
        />
      </div>
      <Link href="/">Back</Link>
    </section>
  );
};

export default GoerDetails;
