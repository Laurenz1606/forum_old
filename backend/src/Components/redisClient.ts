import Redis from "ioredis";
import { env } from "../Utils/env";

//create new redis client
export const redisClient = new Redis(env("REDIS_URL", true));
