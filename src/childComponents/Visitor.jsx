"use client";
import React from "react";
import { useEffect } from "react";


const Visitor = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://geolocation-db.com/json/");
      await fetch("/api/user/visitor", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip: res?.data?.IPv4 }),
      });
    };
    getData();
  }, []);

  return <></>;
};

export default Visitor;
