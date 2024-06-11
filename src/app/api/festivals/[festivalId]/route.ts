import { cache, cmsUrl } from "@/helpers/functions";
import { NextRequest, NextResponse } from "next/server";

const GET = async (
  _request: NextRequest,
  { params }: { params: { festivalId: string } }
) => {
  const response = await fetch(
    `${cmsUrl}/items/festivals/${params.festivalId}?fields=*,goers.directus_users_id.first_name,goers.directus_users_id.last_name,goers.directus_users_id.id`,
    { headers: { cache } }
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const parsedData = await response.json();

  return NextResponse.json(parsedData);
};

export { GET };
