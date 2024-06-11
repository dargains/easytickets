import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = cookies().has("token");
  if (request.nextUrl.pathname === "/profile" && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }
}
