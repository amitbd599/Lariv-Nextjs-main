import LoginComponent from "@/components/LoginComponent";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let profile = await prisma.profile.findUnique({
    where: { id: 1 },
  });
  return profile;
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <>
        <LoginComponent data={data} />
      </>
    </main>
  );
}
