import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed user
  await prisma.user.create({
    data: {
      email: 'bunsy2014@gmail.com',
      name: 'bunsy',
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async e => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
