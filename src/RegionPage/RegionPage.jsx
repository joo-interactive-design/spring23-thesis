import React, { useState } from "react";

import { region } from "../Data/korean cuisines by region.js";

import Header from "../Shared/Header";
import KoreanMap from "./KoreanMap";

import plate from "../img/plate.svg";
import agwiJjim from "../img/Regional cuisines/Agwi-jjim.svg";
import bibimbap from "../img/Regional cuisines/Bibimbap.svg";
import galbi from "../img/Regional cuisines/Galbi.svg";
import jeonbok from "../img/Regional cuisines/Jeonbok-juk.svg";
import jjigae from "../img/Regional cuisines/Jjigae.svg";
import kimchi from "../img/Regional cuisines/Kimchi.svg";
import kongnamul from "../img/Regional cuisines/Kongnamul Guk.svg";
import seolleongtang from "../img/Regional cuisines/Seolleongtang.svg";
import squidBulgogi from "../img/Regional cuisines/Squid bulgogi.svg";
import squidSundae from "../img/Regional cuisines/Squid Sundae.svg";
import yukgaejang from "../img/Regional cuisines/Yukgaejang.svg";

const header = {
  title: "Korea Regional Cuisines",
  subtitle:
    "Korean cuisines are influenced by climate, geography, and natural environment and characterized by local specialties..",
};

const NEGroup = ["Gangwon-do"];
const NWGroup = ["Seoul", "Gyeonggi-do", "Incheon"];
const MWGroup = ["Chungcheongnam-do", "Chungcheongbuk-do", "Sejong", "Daejeon"];
const MEGroup = [
  "Gyeongsangbuk-do",
  "Gyeongsangnam-do",
  "Busan",
  "Ulsan",
  "Daegu",
];
const SWGroup = ["Jeollabuk-do", "Jeollanam-do", "Gwangju"];
const KoreanGroup = [NEGroup, NWGroup, MWGroup, MEGroup, SWGroup];

const provinceImg = [
  [squidSundae, squidBulgogi],
  [seolleongtang, yukgaejang, galbi],
  [jjigae],
  [jeonbok, agwiJjim],
  [bibimbap, kongnamul, kimchi],
];

const RegionPage = () => {
  const [province, setProvince] = useState(1);
  return (
    <div className="flex flex-col px-[105px] pt-[80px] w-[100vw] h-[100vh] text-white bg-main">
      <Header title={header.title} subtitle={header.subtitle} />
      <div className="grid grid-cols-[1fr_384px_238px_402px_1fr] grid-rows-[28px_40px_1fr] flex-1">
        <h2 className="col-start-2 col-end-5 row-start-1 w-full font-SemiBold text-[18px] text-center tracking-[5px] leading-[28px]">
          MOUSE OVER THE MAP TO EXPLORE
        </h2>
        <div className="col-start-2 col-end-3 row-start-3 h-full">
          <KoreanMap
            province={province}
            setProvince={setProvince}
            KoreanGroup={KoreanGroup}
          />
        </div>
        <div className="col-start-4 col-end-5 row-start-3 w-full h-full">
          <div>
            <h1 className="font-bold text-[30px] text-white tracking-[5px]">
              {region[province].province}
            </h1>
            <p className="mt-[13px] h-[400px] font-regular text-[14px] tracking-[3px] leading-[28px]">
              {region[province].description}
            </p>
          </div>
          <div>
            <h1 className="mb-[19px] font-bold text-[18px] tracking-[4px]">
              {`Foods in ${region[province].province}`}
            </h1>
            <div className="flex items-center  gap-[25px]">
              {provinceImg[province].map((p, i) => {
                return (
                  <div
                    key={i}
                    className="relative flex flex-col justify-center items-center w-[120px] h-[120px]"
                  >
                    <img src={plate} alt="" className="w-full h-[full]" />
                    <div className="absolute flex flex-col justify-between items-center">
                      <h1 className="mt-[5px] font-medium text-[10px] text-main tracking-[1.5px]">
                        {region[province]['food'][i]}
                      </h1>
                      <img
                        src={p}
                        alt=""
                        className="w-[60%] h-[60%]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <div className="relative flex flex-col justify-center items-center w-[118px] h-[118px]">
              <img src={plate} alt="" className="w-full h-[full]" />
              <img
                src={cuisineImg[order]}
                alt=""
                className="absolute w-[60%] h-[55%]"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionPage;
