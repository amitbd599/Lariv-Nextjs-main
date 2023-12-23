export const revalidate = 0;
// import AboutComponent from "@/components/AboutComponent";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let about_page_data = await prisma.about_page.findMany();
  let experience_data = await prisma.experience.findMany();
  let education_data = await prisma.education.findMany();
  let skill_data = await prisma.skill.findMany();

  let data = { about_page_data, experience_data, education_data, skill_data }

  return data;
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <MasterLayout>
        {/* <AboutComponent data={data} /> */}
      </MasterLayout>
    </main>
  );
}
