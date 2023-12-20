import LoginComponent from "@/components/LoginComponent";




export default async function Page() {
  const data = await getData();

  return (
    <main>
      <>
        <LoginComponent  />
      </>
    </main>
  );
}
