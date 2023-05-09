import React, { useState } from "react";
import Header from "../Shared/Header";
import Holiday from "./Holiday";

import { monthData } from "../Data/korean cuisines by seasons_v2";

import tteokBokki from "../img/cuisines/Tteok-bokki.svg";
import tteokguk from "../img/Holiday cuisines/Tteokguk.svg";
import jjeon from "../img/cuisines/Jeon.svg";
import galbi from "../img/cuisines/Galbi.svg";
import patjuk from "../img/Holiday cuisines/Patjuk.svg";

const header = {
  title: "Korean Holidays/Seasons Cuisines",
  subtitle:
    "Korean cuisines are influenced by climate, geography, and natural environment and characterized by local specialties..",
  intro:
    "Top 20 Number of Traditional Korean Food Videos on YouTube in the first half of 2021, by dish",
};

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const monthCuisine = {
  JAN: [tteokguk, tteokBokki],
  FEB:[],
  MAY: [tteokBokki],
  AUG: [jjeon, tteokBokki, galbi],
  NOV: [patjuk],
};

const MonthPage = () => {
  const [month, setMonth] = useState("JAN");
  const [order, setOrder] = useState(0);

  const monthSelectHandler = (month) => {
    setMonth(month);
    setOrder(0);
  };

  let filteredMonthData =
    month === "JAN" || month === "AUG"
      ? monthData.filter((d) => d.month === month)[order]
      : monthData.filter((d) => d.month === month)[0];

  let maxOrder = monthData.filter((d) => d.month === month).length - 1;

  const setOrderHandler = (direction) => {
    if (direction === "right") {
      if (order < maxOrder) {
        setOrder(order + 1);
      }
    }
    if (direction === "left") {
      if (order > 0) {
        setOrder(order - 1);
      }
    }
  };

  return (
    <div className="px-[105px] pt-[80px] w-[100vw] text-white bg-main">
      <Header title={header.title} subtitle={header.subtitle} />
      <div>
        <div className="flex justify-between">
          {months.map((m, i) => {
            return m === "JAN" ||
              m === "FEB" ||
              m === "MAY" ||
              m === "AUG" ||
              m === "NOV" ? (
              <div
                key={i}
                className={`border-2 pt-[28px] w-[89px] h-[89px] font-semibold text-[18px] text-center ${
                  m === month && "text-main"
                } hover:text-main tracking-[2px] leading-[28px] ${
                  m === month && "bg-white"
                } hover:bg-white rounded-full cursor-pointer`}
                onClick={() => monthSelectHandler(m)}
              >
                {m}
              </div>
            ) : (
              <div
                key={i}
                className={`border-2 pt-[28px] w-[89px] h-[89px] font-semibold text-[18px] text-center rounded-full opacity-[20%]`}
              >
                {m}
              </div>
            );
          })}
        </div>
        <div className="mt-[30px] font-thin text-[14px] text-end">
          *follow th lunar calendar
        </div>
      </div>
      <Holiday
        date={month}
        holiday={filteredMonthData.holiday}
        description={filteredMonthData.description}
        food_img ={monthCuisine[month][order]}
        food_name={filteredMonthData.food_name}
        food_name_eng={filteredMonthData.food_name_eng}
        ingredients={filteredMonthData.Ingredients}
        setOrderHandler={setOrderHandler}
        
      />
    </div>
  );
};

export default MonthPage;
