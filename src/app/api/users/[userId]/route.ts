import { NextResponse } from "next/server";

const GET = async (request: Request, context: any) => {
  const { params } = context;
  const response = await fetch(`${process.env.CMS_ENDPOINT}/users/${params.userId}`);
  const parsedData = await response.json();
  return NextResponse.json(parsedData);
}

export { GET };