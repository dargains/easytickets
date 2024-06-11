import { cache, cmsUrl } from "@/helpers/functions";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
  const auth = req.headers.get("Authorization");

  if (!auth) {
    return NextResponse.json(false, {
      status: 403,
    });
  }

  const response = await fetch(`${cmsUrl}/users/me`, {
    headers: {
      cache,
      Authorization: auth,
    },
  });
  const parsedData = await response.json();

  return NextResponse.json(parsedData);
};

const POST = async (req: NextRequest) => {
  const body = await req.json();
  const response = await fetch(`${cmsUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const parsedData = await response.json();
  const resultObject = {
    headers: {
      "Content-Type": "application/json",
    },
    status: response.status,
  };
  return NextResponse.json(parsedData, resultObject);
};

export { GET, POST };
