import React from "react";
import CuisinePlate from "./CuisinePlate";

// import logo from "../img/Group 7.svg";

const CuisinePlates = ({ openIntroHandler, plate, cuisines, cuisineImg }) => {
  return (
    <>
      <div
        className={`absolute top-[15%] left-[42%] flex flex-col justify-center items-center w-[320px] h-[320px] cursor-pointer`}
        onClick={() => openIntroHandler(0)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="pt-[8px] font-medium text-[12px] text-main tracking-[1.5px]">
            {cuisines[0].name}
          </h1>
          <img src={cuisineImg[0]} alt="" className="w-[60%] h-[55%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px]">{cuisines[0].view}</h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[5%] left-[22%] flex flex-col justify-center items-center w-[280px] h-[280px] cursor-pointer`}
        onClick={() => openIntroHandler(1)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[8px] font-medium text-[12px] text-main tracking-[1.5px]">
            {cuisines[1].name}
          </h1>
          <img src={cuisineImg[1]} alt="" className="w-[60%] h-[55%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px]">{cuisines[1].view}</h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[8%] left-[63%] flex flex-col justify-center items-center w-[210px] h-[210px] cursor-pointer`}
        onClick={() => openIntroHandler(2)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {cuisines[2].name}
          </h1>
          <img src={cuisineImg[2]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px]">{cuisines[2].view}</h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[41%] left-[62%] flex flex-col justify-center items-center w-[210px] h-[210px] cursor-pointer`}
        onClick={() => openIntroHandler(3)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {cuisines[3].name}
          </h1>
          {/* <img src={cuisineImg[2]} alt="" className="w-[60%] h-[60%]" /> */}
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px]">{cuisines[3].view}</h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[43%] left-[32%] flex flex-col justify-center items-center w-[180px] h-[180px] cursor-pointer`}
        onClick={() => openIntroHandler(4)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {cuisines[4].name}
          </h1>
          <img src={cuisineImg[4]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px]">{cuisines[4].view}</h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[65%] left-[41%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(5)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {cuisines[5].name}
          </h1>
          <img src={cuisineImg[5]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px] leading-[1]">
              {cuisines[5].view}
            </h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[30%] left-[75%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(6)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {cuisines[6].name}
          </h1>
          {/* <img src={cuisineImg[5]} alt="" className="w-[60%] h-[60%]" /> */}
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px] ">
              {cuisines[6].view}
            </h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[60%] left-[52%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(7)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {cuisines[7].name}
          </h1>
          {/* <img src={cuisineImg[7]} alt="" className="w-[60%] h-[60%]" /> */}
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px] ">
              {cuisines[7].view}
            </h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[70%] left-[28%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(8)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {cuisines[8].name}
          </h1>
          <img src={cuisineImg[8]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px] leading-[1]">
              {cuisines[8].view}
            </h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[45%] left-[19%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(9)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {cuisines[9].name}
          </h1>
          <img src={cuisineImg[9]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px] leading-[1]">
              {cuisines[9].view}
            </h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[21%] left-[11%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(10)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {cuisines[10].name}
          </h1>
          {/* <img src={cuisineImg[10]} alt="" className="w-[60%] h-[60%]" /> */}
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px]">
              {cuisines[10].view}
            </h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[58%] left-[76%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(11)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {cuisines[11].name}
          </h1>
          <img src={cuisineImg[11]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px] leading-[1]">
              {cuisines[11].view}
            </h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[75%] left-[12%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(12)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[11px] text-main tracking-[1.5px]">
            {cuisines[12].name}
          </h1>
          <img src={cuisineImg[12]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px] leading-[1]">
              {cuisines[12].view}
            </h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[1%] left-[6%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() => openIntroHandler(13)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {cuisines[13].name}
          </h1>
          {/* <img src={cuisineImg[13]} alt="" className="w-[60%] h-[60%]" /> */}
          <div className="font-regular  text-main text-center">
            <h3 className="text-[12px] tracking-[1.5px]">
              {cuisines[13].view}
            </h3>
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[50%] left-[6%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() => openIntroHandler(14)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {cuisines[14].name}
          </h1> */}
          <img src={cuisineImg[14]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[11px] tracking-[1.5px]">
              {cuisines[14].view}
            </h3>
            <h3 className="text-[10px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[12%] left-[81%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() => openIntroHandler(15)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {cuisines[15].name}
          </h1> */}
          <img src={cuisineImg[15]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[11px] tracking-[1.5px]">
              {cuisines[15].view}
            </h3>
            <h3 className="text-[10px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[75%] left-[61%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() => openIntroHandler(16)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {cuisines[16].name}
          </h1> */}
          <img src={cuisineImg[16]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[11px] tracking-[1.5px]">
              {cuisines[16].view}
            </h3>
            <h3 className="text-[10px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[44%] left-[88%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() => openIntroHandler(17)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {cuisines[17].name}
          </h1> */}
          <img src={cuisineImg[17]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[11px] tracking-[1.5px]">
              {cuisines[17].view}
            </h3>
            <h3 className="text-[10px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[80%] left-[71%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() => openIntroHandler(18)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {cuisines[17].name}
          </h1> */}
          <img src={cuisineImg[18]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[11px] tracking-[1.5px]">
              {cuisines[18].view}
            </h3>
            <h3 className="text-[10px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[70%] left-[88%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() => openIntroHandler(19)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {cuisines[19].name}
          </h1> */}
          <img src={cuisineImg[19]} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            <h3 className="text-[11px] tracking-[1.5px]">
              {cuisines[19].view}
            </h3>
            <h3 className="text-[10px]">Views</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CuisinePlates;
