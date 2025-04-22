import { Ratelimit } from "@upstash/ratelimit";
import "server-only";
import { redis } from "./redis";

export const RateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(15, "1 d"),
  analytics: true,
  prefix: "@api/ratelimit", // Unique prefix for newsletter keys
});
