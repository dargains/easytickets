import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = cookies().has("token");
  switch (request.nextUrl.pathname) {
    case "/profile":
      if (!token) return NextResponse.redirect(new URL("/login", request.url));
      break;
    case "/login":
      if (token) return NextResponse.redirect(new URL("/profile", request.url));
      break;
    default:
      return NextResponse.next();
  }
}
