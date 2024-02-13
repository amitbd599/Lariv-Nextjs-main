export const revalidate = 0; 
import LoginComponent from "@/components/LoginComponent";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let blogs = await prisma.profile.findUnique({
    where: { id: 1 },
  });
  return blogs;
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
