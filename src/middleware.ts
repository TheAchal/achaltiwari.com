import { NextRequest, NextResponse } from "next/server";

// Gate the private /vault area behind HTTP Basic Auth.
// Set VAULT_USER and VAULT_PASS in the Vercel project env vars.
// Fails closed: if creds are missing or wrong, access is denied.
export const config = { matcher: ["/vault/:path*"] };

export function middleware(req: NextRequest) {
  const user = process.env.VAULT_USER;
  const pass = process.env.VAULT_PASS;
  const header = req.headers.get("authorization");

  if (user && pass && header) {
    const [scheme, encoded] = header.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const sep = decoded.indexOf(":");
      const u = decoded.slice(0, sep);
      const p = decoded.slice(sep + 1);
      if (u === user && p === pass) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Vault", charset="UTF-8"' },
  });
}
