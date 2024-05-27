import { cache, cmsUrl } from "@/helpers/cmsrequest";
import { NextResponse } from "next/server";

const GET = async () => {
  const response = await fetch(
    `${cmsUrl}/items/festivals?filter[status][_eq]=published`,
    { headers: { cache: cache } }
  );
  const parsedData = await response.json();
  return NextResponse.json(parsedData);
};

export { GET };
