import React, { useState } from "react";
import Unit from "./Unit";
import CuisinePlates from "../CuisinePage/CuisinePlatesD3";

const PlatesPage = ({ title, intro }) => {
  const [modal, setModal] = useState(false);

  const backPageHandler = () => {
    setModal(false);
  };
  return (
    <div className="relative px-[105px] pt-[110px]">
      <div className="m-auto font-medium  text-[30px] text-center text-white tracking-[11px] leading-[50px]">
        {title}
      </div>
      <div className="w-full h-[735px] mt-[27px]">
        <CuisinePlates setModal={setModal} />
      </div>
      <div
        className={`${
          modal ? "visible" : "hidden"
        } absolute top-0 left-0 w-full z-20 bg-main`}
      >
        <Unit backPageHandler={backPageHandler} />
      </div>
      {/* <div className="border-2 flex justify-center items-center h-[281px]">
        <p className="font-regular w-[626px] text-[18px] text-center text-white tracking-[5px] leading-[28px]">
          {intro}
        </p>
      </div> */}
    </div>
  );
};

export default PlatesPage;
