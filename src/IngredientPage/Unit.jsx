import React from "react";

const Unit = ({
  backPageHandler,
  cuisines,
  plate,
  cuisineImg,
  order,
  ingredients,
  chiliPowder
}) => {
  return (
    <div className="px-[97px] pt-[110px] w-full h-[100vh]">
      <div
        className="flex items-center gap-[37px] cursor-pointer"
        onClick={backPageHandler}
      >
        <div className="border-l-[3px] border-b-[3px] border-white w-[12px] h-[12px] rotate-45"></div>
        <div className="font-medium text-[28px] text-white tracking-[8px] leading-[50px]">
          Go Back
        </div>
      </div>
      <div className="flex justify-center items-center gap-[113px] mt-[139px] w-full h-[482px]">
        <div className="relative flex flex-col justify-center items-center w-[500px] h-[500px]">
          <img src={plate} alt="" className="w-full h-[full]" />
          <img
            src={chiliPowder}
            alt=""
            className="absolute w-[60%] h-[55%]"
          />
        </div>

        <div className="">
          <div className="mb-[60px]">
            <h1 className="mb-[10px] font-bold text-[32px] text-white tracking-[6px]">
              gochugaru
            </h1>
            <h3 className="font-regular text-[18px] text-white tracking-[4px]">
              Chili powder
            </h3>
          </div>
          <div className="mb-[40px]">
            <h2 className="mb-[20px] font-bold text-[18px] text-white tracking-[4px]">
              Ingredient Rank
            </h2>
            <h3 className="inline px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15]">
              1
            </h3>
          </div>
          <div>
            <h2 className="mb-[20px] font-bold text-[18px] text-white tracking-[4px]">
              Foods with Gochugaru
            </h2>
            <div className="flex flex-wrap gap-[10px] w-[439px]">
              {ingredients.map((ingredient, i) => {
                return (
                  <h3
                    key={i}
                    className="inline mb-[5px] px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15] cursor-pointer"
                  >
                    {ingredient}
                  </h3>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Unit;
