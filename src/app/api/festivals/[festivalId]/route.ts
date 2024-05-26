import { cache, cmsUrl } from "@/helpers/cmsrequest";
import { NextResponse } from "next/server";

const GET = async (request: Request, context: any) => {
  const { params } = context;
  const response = await fetch(`${cmsUrl}/items/festivals/${params.festivalId}`, { headers: { cache: cache } });
  const parsedData = await response.json();
  return NextResponse.json(parsedData);
}

export { GET };