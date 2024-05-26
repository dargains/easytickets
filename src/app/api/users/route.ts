import { NextResponse } from "next/server";
const cmsUrl = "https://easytickets-cms.up.railway.app";

const GET = async () => {
  const response = await fetch(`${process.env.CMS_ENDPOINT}/users`);
  const parsedData = await response.json();
  return NextResponse.json(parsedData);
}

const POST = async (req: any) => {
  const body = await req.json();
  const response = await fetch(`${process.env.CMS_ENDPOINT || cmsUrl}/users`, {
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