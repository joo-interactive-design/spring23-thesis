import React from "react";

import Unit from "../Shared/Unit";
import PlateInfo from "../Shared/PlateInfo";

const Holiday = ({
  date,
  holiday,
  description,
  food_img,
  food_name,
  food_name_eng,
  ingredients,
  setOrderHandler,
}) => {
  return (
    <div className="relative flex flex-col mt-[40px] pb-[60px] text-white">
      <div className="flex flex-col items-center mb-[60px] h-[240px] text-center">
        <h3 className="font-bold text-[16px] tracking-[2px]">{date}</h3>
        <h2 className="mt-[22px] mb-[30px] font-bold text-[32px] tracking-[6px]">
          {holiday}
        </h2>
        <p className="w-[1118px] font-regular text-[16px] tracking-[4px] leading-[28px]">
          {description}
        </p>
      </div>
      {date !== "FEB" && (
        <div className="flex-1">
          <PlateInfo
            food_img={food_img}
            food_name={food_name}
            food_name_eng={food_name_eng}
            ingredients={ingredients}
          />
        </div>
      )}
      {date === "JAN" || date === "AUG" ? (
        <>
          <div
            className="absolute top-[50%] left-0 border-t-2 border-l-2 border-white w-[30px] h-[30px] rotate-[-45deg] cursor-pointer"
            onClick={() => setOrderHandler("left")}
          ></div>
          <div
            className="absolute top-[50%] right-0 border-t-2 border-l-2 border-white w-[30px] h-[30px] rotate-[135deg] cursor-pointer"
            onClick={() => setOrderHandler("right")}
          ></div>
        </>
      ) : null}
    </div>
  );
};

export default Holiday;
