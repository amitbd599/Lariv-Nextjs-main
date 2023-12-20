import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let user = await prisma.user.findMany();

  return { user };
}
export default async function Home() {
  const data = await getData();
  console.log(data.user);

  return (
    <main>
      {/* <input type="text" ref={(input) => (emailRef = input)} />
      <input type="password" ref={(input) => (passwordRef = input)} /> */}
      {/* <button onClick={submit}>submit</button> */}
      <br />
      <br />
      <br />
      <div>
        {data.user?.map((item, index) => (
          <div key={index}>
            <p>{item.email}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
