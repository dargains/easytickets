import { cache, cmsUrl } from "@/helpers/functions";
import { NextResponse } from "next/server";

const GET = async (
  _request: Request,
  { params }: { params: { userId: string } }
) => {
  const response = await fetch(`${cmsUrl}/users/${params.userId}`, {
    headers: { cache },
  });
  const parsedData = await response.json();
  return NextResponse.json(parsedData);
};

export { GET };
