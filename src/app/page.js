"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [data, dataSet] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get("/api/login");

      dataSet(response.data.data);
    }

    fetchMyAPI();
  }, []);

  let emailRef,
    passwordRef = useRef();

  let submit = () => {
    let email = emailRef.value;
    let password = passwordRef.value;

    let res = axios.post("/api/login", { email, password });
  };
  return (
    <main>
      <input type="text" ref={(input) => (emailRef = input)} />
      <input type="password" ref={(input) => (passwordRef = input)} />
      <button onClick={submit}>submit</button>
      <br />
      <br />
      <br />
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <p>{item.email}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
