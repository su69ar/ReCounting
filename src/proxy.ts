import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const forwardedProto =
    request.headers.get("x-forwarded-proto") ??
    request.nextUrl.protocol.replace(":", "");
  const isLocalHost =
    host.startsWith("localhost") || host.startsWith("127.0.0.1");

  if (!isLocalHost && forwardedProto === "http") {
    const secureUrl = request.nextUrl.clone();
    secureUrl.protocol = "https:";
    return NextResponse.redirect(secureUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
