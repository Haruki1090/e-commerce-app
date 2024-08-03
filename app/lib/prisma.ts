import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

const grobalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

if (!grobalForPrisma.prisma) {
  prisma = new PrismaClient();
}

grobalForPrisma.prisma = prisma;

export default prisma;
