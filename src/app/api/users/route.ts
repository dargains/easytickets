import { cmsUrl } from "@/helpers/cmsrequest";
import { NextResponse } from "next/server";

const GET = async () => {
  const response = await fetch(`${cmsUrl}/users`);
  const parsedData = await response.json();
  return NextResponse.json(parsedData);
}

const POST = async (req: any) => {
  const body = await req.json();
  const response = await fetch(`${cmsUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const parsedData = await response.json();
  const resultObject = {
    headers: {
      'Content-Type': 'application/json',
    },
    status: response.status
  }
  return NextResponse.json(parsedData, resultObject);
}

export { GET, POST }