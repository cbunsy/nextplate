import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await hash('pass123', 10);
  // Seed user
  await prisma.user.upsert({
    where: { email: 'bunsy2014@gmail.com' },
    update: {},
    create: {
      email: 'bunsy2014@gmail.com',
      name: 'bunsy',
      password,
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
