import React from "react";

import plate from "../img/plate.svg";

const CuisinePlate = ({ x, y, name, img, view }) => {
  return (
    <div
      className={`absolute ${"top-[" + y + "px]"} ${
        "left-[" + x + "px]"
      } flex flex-col justify-center items-center w-[240px] h-[240px]`}
    >
      <img src={plate} alt="" className="w-full h-full" />
      <div className="absolute flex flex-col justify-center items-center w-full h-full">
        <h1 className="mt-[10px] font-medium text-[14px] text-main tracking-[1.5px]">
          {name}
        </h1>
        {img !== "empty" && (
          <img src={img} alt="" className="w-[60%] h-[60%]" />
        )}
        <div className="font-regular  text-main text-center">
          <h3 className="text-[14px] tracking-[1.5px]">{view}</h3>
          <h3 className="text-[12px]">Views</h3>
        </div>
      </div>
    </div>
  );
};

export default CuisinePlate;

{
  /* {cuisines.map((cuisine, i) => {
          return (
            <div
              key={i}
              className={`absolute ${"top-["+cuisinePosition[i][1]+'px]'} ${"left-["+cuisinePosition[i][0]+'px]'} flex flex-col justify-center items-center w-[240px] h-[240px]`}
            >
              <img src={plate} alt="" className="w-full h-full" />
              <div className="absolute flex flex-col justify-center items-center w-full h-full">
                <h1 className="mt-[10px] font-medium text-[14px] text-main tracking-[1.5px]">
                  {cuisine.name}
                </h1>
                <div className="w-[60%] h-[60%]">
                  {cuisineImg[i] !== "empty" && (
                    <img src={cuisineImg[i]} alt="" className="w-full h-full" />
                  )}
                </div>
                <div className="font-regular  text-main text-center">
                  <h3 className="text-[14px] tracking-[1.5px]">{cuisine.view}</h3>
                  <h3 className="text-[12px]">Views</h3>
                </div>
              </div>
            </div>
          );
        })} */
}

{
  /* {cuisines.map((cuisine, i) => {
          return ( */
}
{
  /* <CuisinePlate
              x={`0`}
              y={`0`}
              name={cuisines[0].name}
              img={cuisineImg[0]}
              view={cuisines[0].view}
            /> */
}
{
  /* );
        })} */
}
