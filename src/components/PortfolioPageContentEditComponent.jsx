"use client";
import React, { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import SubmitButton from "@/childComponents/SubmitButton";
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import client_api from "@/utility/api_fetch_fun";

const PortfolioPageContentEditComponent = ({ data }) => {
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!!data === false) {
        client_api.create("/api/dashboard/portfolio_page/create", {
          heading_title: "",
          heading_title_color: "",
          heading_title_des: ""
        });
      }
    };
    fetchData();
  }, []);

  let heading_titleRef,
    heading_title_colorRef,
    heading_title_desRef = useRef();

  const formSubmit = async () => {
    setSubmit(true);

    let heading_title = heading_titleRef.value;
    let heading_title_color = heading_title_colorRef.value;
    let heading_title_des = heading_title_desRef.value;

    client_api.update("/api/dashboard/portfolio_page/update", {
      heading_title,
      heading_title_color,
      heading_title_des,
    }).then((res) => {
      if (res?.status === true) {
        SuccessToast("Page Content Change Success!");
        setSubmit(false);
      } else {
        ErrorToast("Something Went Wrong");
        setSubmit(false);
      }
    })


  };

  return (
    <section>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          Portfolio page content edit section
        </h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Heading Title Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (heading_titleRef = input)}
                  defaultValue={data?.heading_title}
                  type="text"
                  placeholder="Title"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (heading_title_colorRef = input)}
                  defaultValue={data?.heading_title_color}
                  type="text"
                  placeholder="Title Color"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
              <div>
                <textarea
                  ref={(input) => (heading_title_desRef = input)}
                  defaultValue={data?.heading_title_des}
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Description"
                  className=" w-full rounded-lg border border-border bg-transparent p-3 outline-none placeholder:text-sm"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-[40px] block">
            <SubmitButton submit={submit} onClick={formSubmit} text="Submit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPageContentEditComponent;
