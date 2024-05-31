import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getGoerDetails } from "@/app/libs/Goer";
import { cmsUrl } from "@/helpers/functions";
import { User } from "@/types";

const GoerDetails = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const goer: User = await getGoerDetails(userId);

  return (
    <section>
      <h1>Detalhes do user</h1>
      <div>
        <p>{goer.first_name}</p>
        <p>{goer.last_name}</p>
        {
          goer.avatar ?
            <Image
              src={`${cmsUrl}/assets/${goer.avatar}`}
              alt={goer.first_name || "avatar"}
              width={200}
              height={200}
            />
            : ''}
      </div>
      <Link href="/">Back</Link>
    </section>
  );
};

export default GoerDetails;
