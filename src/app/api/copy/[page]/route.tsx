import { cmsUrl } from "@/helpers/functions";
import { NextResponse } from "next/server";

const GET = async () => {
  const response = await fetch(`${cmsUrl}/items/homepage_translations`);

  const parsedData = await response.json();

  return NextResponse.json(parsedData);
}

export { GET }