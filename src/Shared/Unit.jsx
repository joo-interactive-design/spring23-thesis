import React from "react";

const Unit = ({ type, backPageHandler, data, plate, image, order, tags }) => {
  return (
    <div className="px-[97px] pt-[110px] w-full h-[100vh]">
      <div
        className="flex items-center gap-[35px] cursor-pointer"
        onClick={backPageHandler}
      >
        <div className="border-l-[3px] border-b-[3px] border-white w-[12px] h-[12px] rotate-45"></div>
        <div className="font-medium text-[28px] text-white tracking-[8px] leading-[50px]">
          Go Back
        </div>
      </div>
      <div className="flex justify-center items-start gap-[113px] mt-[139px] w-full h-[482px]">
        <div className="relative flex flex-col justify-center items-center w-[500px] h-[500px]">
          {type === "cuisine" && (
            <img src={plate} alt="" className="w-full h-[full]" />
          )}
          <img src={image[order]} alt="" className="absolute w-[60%] h-[55%]" />
        </div>

        <div className="">
          <div className="mt-[40px] mb-[48px]">
            <h1 className=" font-bold text-[32px] text-white tracking-[6px]">
              {data[order]["name"]}
            </h1>
            <h3 className="font-regular text-[18px] text-white tracking-[4px]">
              {data[order]["name_in_Eng"]}
            </h3>
          </div>
          {type === "ingredient" && (
            <div className="mb-[40px]">
              <h2 className="mb-[20px] font-bold text-[18px] text-white tracking-[4px]">
                Ingredient Rank
              </h2>
              <h3 className="inline px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15]">
                {order + 1}
              </h3>
            </div>
          )}
          <div>
            <h2 className="mb-[20px] font-bold text-[18px] text-white tracking-[4px]">
              {type === "ingredient"
                ? `Foods with ${data[order]["name"]}`
                : `Ingredients in ${data[order]["name"]}`}
            </h2>
            <div className="flex flex-wrap gap-[10px] w-[439px]">
              {data[order][tags].map((ingredient, i) => {
                return (
                  <h3
                    key={i}
                    className={`inline mb-[5px] px-[20px] py-[5px]  text-center rounded-[36px] ${
                      type === "ingredient"
                        ? "text-white bg-[#fff]/[0.15]"
                        : "text-main bg-white"
                    } `}
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
