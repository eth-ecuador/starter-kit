import { PrismaClient } from "./generated/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db: PrismaClient = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export * from "./generated/client";
