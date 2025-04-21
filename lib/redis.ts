// lib/redis.ts
import { Redis } from "@upstash/redis";

// Initialize Redis client with credentials from environment variables
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});
