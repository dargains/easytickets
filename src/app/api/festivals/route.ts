import { NextResponse } from "next/server";

const GET = async () => {
  const response = await fetch(`${process.env.CMS_ENDPOINT}/festivals`);
  const parsedData = await response.json();
  return NextResponse.json(parsedData);
}

export { GET }