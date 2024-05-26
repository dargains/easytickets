import { NextResponse } from "next/server";

const GET = async (request: Request, context: any) => {
  const { params } = context;
  console.log('params: ', params)
  console.log(`${process.env.CMS_ENDPOINT}/festivals/${params.festivalId}`)
  const response = await fetch(`${process.env.CMS_ENDPOINT}/festivals/${params.festivalId}`);
  const parsedData = await response.json();
  return NextResponse.json(parsedData);
}

export { GET };