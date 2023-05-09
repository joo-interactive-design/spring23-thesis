import React, { useState } from "react";
import Header from "../Shared/Header";
import Unit from "../Shared/Unit";
import CuisinePlates from "./CuisinePlates";

import { cuisinesData } from "../Data/cuisines";

import plate from "../img/plate.svg";
import tteokBokki from "../img/cuisines/Tteok-bokki.svg";
import kimchi from "../img/cuisines/Kimchi.svg";
import gimbap from "../img/cuisines/Gimbap.svg";
import galbi from "../img/cuisines/Galbi.svg";
import bibimbap from "../img/cuisines/Bibimbap.svg";
import bulgogi from "../img/cuisines/Bulgogi.svg";
import mandu from "../img/cuisines/Mandu.svg";
import jeon from "../img/cuisines/Jeon.svg";
import samgyeopsal from "../img/cuisines/Samgyeopsal.svg";
import kimchiBokkeumBap from "../img/cuisines/Kimchi-bokkeum-bap.svg";
import kimchiJjigae from "../img/cuisines/Kimchi-jjigae.svg";
import janchiGuksu from "../img/cuisines/Janchi-guksu.svg";
import kalGuksu from "../img/cuisines/Kal-guksu.svg";
import japchae from "../img/cuisines/Japchae.svg";
import budaeJjigae from "../img/cuisines/Budae jjigae.svg";

let tteok = "empty";
let soju = "empty";
let sundae = "empty";
let hotteok = "empty";
let gangjeong = "empty";

const cuisineImg = [
  tteokBokki,
  kimchi,
  gimbap,
  tteok,
  galbi,
  bibimbap,
  soju,
  sundae,
  bulgogi,
  mandu,
  hotteok,
  jeon,
  samgyeopsal,
  gangjeong,
  kimchiBokkeumBap,
  kimchiJjigae,
  janchiGuksu,
  kalGuksu,
  japchae,
  budaeJjigae,
];

const header = {
  title: "Traditional Korean Food Trend",
  subtitle:
    "Korean cuisines are influenced by climate, geography, and natural environment and characterized by local specialties..",
  intro:
    "Top 20 Number of Traditional Korean Food Videos on YouTube in the first half of 2021, by dish",
};

const CuisinePage = () => {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState(0);
  const backPageHandler = () => {
    setOpen(false);
  };

  const openIntroHandler = (i) => {
    setOrder(i);
    setOpen(true);
  };

  return (
    <div className="relative flex flex-col px-[90px] pt-[80px] h-[100vh] text-white">
      <Header title={header.title} subtitle={header.subtitle} />
      <div className="relative flex-1 w-full  mt-[27px]">
        <CuisinePlates
          openIntroHandler={openIntroHandler}
          plate={plate}
          cuisines={cuisinesData}
          cuisineImg={cuisineImg}
        />
      </div>
      <div
        className={`${
          open ? "visible" : "hidden"
        } absolute top-0 left-0 w-full z-20 bg-main`}
      >
        <Unit
          type={'cuisine'}
          backPageHandler={backPageHandler}
          data={cuisinesData}
          plate={plate}
          image={cuisineImg}
          intro={open}
          order={order}
          tags={'ingredients'}
        />
      </div>
      {/* <div className="border-2 flex justify-center items-center h-[281px]">
        <p className="font-regular w-[626px] text-[18px] text-center text-white tracking-[5px] leading-[28px]">
          {intro}
        </p>
      </div> */}
    </div>
  );
};

export default CuisinePage;
