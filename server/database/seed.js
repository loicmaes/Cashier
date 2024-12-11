import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const wait = async delay => new Promise(resolve => setTimeout(resolve, delay));

async function main() {
  console.log("🌱  Seeding database...");
  await wait(1000);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
