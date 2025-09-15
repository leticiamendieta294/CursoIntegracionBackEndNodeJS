import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordLeticia = await bcrypt.hash("12345", 10);
  const passwordJuan = await bcrypt.hash("abcde", 10);

  await prisma.user.createMany({
    data: [
      { name: "Leticia", email: "leticia@example.com", password: passwordLeticia },
      { name: "Juan", email: "juan@example.com", password: passwordJuan },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());

