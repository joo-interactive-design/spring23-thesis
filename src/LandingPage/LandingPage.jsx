import React from "react";

import logo from "../img/Group 7.svg";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] ">
      <div className="border-[2px] flex flex-col w-[633px] h-[302px]">
        <div className="flex w-full h-[203px]">
          <div className="border-r-[2px] border-b-[2px] border-white flex flex-col justify-center items-center gap-[27px] w-[50%] h-full">
            <h1 className="font-semiBold text-[80px] text-white tracking-[20%] leading-[40px]">
              한식
            </h1>
            <h2 className="text-white font-thin text-[16px] tracking-[6px]">
              Korean Cuisine
            </h2>
          </div>
          <div className="border-b-[2px] flex justify-center items-center w-[50%] h-full">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-1 text-main bg-white">
          <h1 className="font-poppings font-medium text-[30px] tracking-[21px]">
            Taste of Korea
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
