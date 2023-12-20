"use client";
export default async function Home() {
  let submitFile = () => {
    (async () => {
      const rawResponse = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "a@a.com", password: "admin" }),
      });
      const content = await rawResponse.json();

      console.log(content);
    })();
  };
  return (
    <main>
      <input type="text" />
      <input type="password" />
      <button onClick={() => submitFile()}>Submit</button>
    </main>
  );
}
