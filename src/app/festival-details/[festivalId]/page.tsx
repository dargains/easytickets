import React, { Suspense } from "react";
import Link from "next/link";
import { Festival } from "@/types";
import { getFestivalDetails } from "@/libs/Festival";
import FestivalDetails from "@/components/FestivalDetails/FestivalDetails";

const FestivalDetailsPage = async ({
  params: { festivalId },
}: {
  params: { festivalId: string };
}) => {
  const festival: Festival = await getFestivalDetails(festivalId);
  const hasGoers = !!festival?.goers?.length

  return (
    <section>
      <h1>Detalhes do Festival</h1>
      <Suspense fallback={<p>Loading festival...</p>}>
        <FestivalDetails festival={festival} hasGoers={hasGoers} />
      </Suspense>
      <Link href="/">Back</Link>
    </section>
  );
};

export default FestivalDetailsPage;
