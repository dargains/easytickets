import { cache, cmsUrl } from "@/helpers/functions";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
  const headers = new Headers();

  const cookie = req.cookies.get("token")?.value;

  if (!cookie) {
    return NextResponse.json(false, {
      status: 403,
    });
  }

  const { access_token } = JSON.parse(cookie);
  headers.set("cache", cache);
  headers.set("Authorization", `Bearer ${access_token}`);

  const response = await fetch(`${cmsUrl}/users/me`, { headers });
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
