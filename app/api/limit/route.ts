import { RateLimiter } from "@/lib/rate-limiter";
import { headers } from "next/headers";

export async function GET() {
  const headerStore = await headers();
  const ip = headerStore.get("x-forwarded-for") ?? "anonymous";

  const { remaining, reset } = await RateLimiter.getRemaining(ip);

  return new Response(JSON.stringify({ remaining, reset }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
