import { cmsUrl } from "@/helpers/functions";
import { NextResponse } from "next/server";

const POST = async (req: any) => {
  const body = await req.json();
  const response = await fetch(`${cmsUrl}/auth/login`, {
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
      "set-cookie": `token=${JSON.stringify(parsedData.data)}`,
    },
    status: response.status,
  };
  console.log(parsedData);
  return NextResponse.json(parsedData, resultObject);
};

export { POST };
