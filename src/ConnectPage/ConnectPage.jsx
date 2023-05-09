import React, { useState } from "react";
import ParallelChart from "./ParallelChart";

import Header from "../Shared/Header";

const header = {
  title: "Top 7 famous Korean cuisines on youtube and the Ingredients",
  subtitle:
    "Korean cuisines are influenced by climate, geography, and natural environment and characterized by local specialties..",
};

const ConnectPage = () => {
  const [extend, setExtend] = useState(false);

  const extendHandler = () => {
    setExtend(!extend)
    if (extend === true)
    window.scrollTo({ top: window.innerHeight * 4, behavior: "smooth" });
  };

  return (
    <div
      className={`relative flex flex-col px-[105px] pt-[80px] w-[100vw] ${
        extend ? "h-[205vh]" : "h-[100vh]"
      }  text-white bg-main`}
    >
      <Header title={header.title} subtitle={header.subtitle} />
      {/* <h1 className="mb-[50px] w-[547px] text-[28px] tracking-[6px]">Top 7 famous Korean cuisines on youtube and the Ingredients</h1> */}
      <div className="flex-1 overflow-hidden">
        <h2 className="mb-[20px] w-full font-SemiBold text-[18px] text-center tracking-[5px] leading-[28px]">
          CLICK THE CUISINES TO FILTER
        </h2>
        <ParallelChart />
      </div>
      <div
        className="absolute left-[50%] bottom-[20px] cursor-pointer"
        onClick={extendHandler}
      >
        <div
          className={`border-2 rounded-full w-[50px] h-[50px] ${
            extend ? "border-white" : "border-white"
          }`}
        ></div>
        <div
          className={`absolute top-[50%] left-[50%] translate-x-[-10px]  border-t-2 border-r-2 w-[20px] h-[20px] ${
            extend
              ? "translate-y-[-5px] border-white rotate-[-45deg]"
              : "translate-y-[-15px] border-white rotate-[135deg]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ConnectPage;
