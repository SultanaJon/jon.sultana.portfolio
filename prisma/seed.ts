import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.TempTableCreateInput[] = [{}];

export async function main() {
  for (const u of userData) {
    await prisma.tempTable.create({ data: u });
  }
}

main();
