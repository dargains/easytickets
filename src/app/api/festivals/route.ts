import { cache, cmsUrl } from "@/helpers/functions";
import { NextRequest, NextResponse } from "next/server";

const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const response = await fetch(
    `${cmsUrl}/items/festivals?filter[status][_eq]=published${query ? `&filter[name][_icontains]=${query}` : ""}`,
    { headers: { cache } }
  );

  const parsedData = await response.json();
  return NextResponse.json(parsedData);
};

export { GET };
