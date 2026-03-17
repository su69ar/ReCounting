import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/lib/site";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const host = request.headers.get("host") ?? "";
  const forwardedProto =
    request.headers.get("x-forwarded-proto") ??
    request.nextUrl.protocol.replace(":", "");
  const isLocalHost =
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("0.0.0.0");
  const isStaticAsset =
    pathname.startsWith("/_next/") ||
    /\.(?:png|jpe?g|gif|webp|svg|ico|avif|bmp)$/i.test(pathname);

  if (isStaticAsset) {
    return NextResponse.next();
  }

  if (!isLocalHost && forwardedProto === "http") {
    const canonicalUrl = new URL(siteConfig.url);
    const secureUrl = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      canonicalUrl,
    );
    return NextResponse.redirect(secureUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
