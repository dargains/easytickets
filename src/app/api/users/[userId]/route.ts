import { cache, cmsUrl } from "@/helpers/functions";
import { NextResponse } from "next/server";

const GET = async (request: Request, context: any) => {
  const { params } = context;
  const response = await fetch(`${cmsUrl}/users/${params.userId}`, { headers: { cache } });
  const parsedData = await response.json();
  return NextResponse.json(parsedData);
};

export { GET };
