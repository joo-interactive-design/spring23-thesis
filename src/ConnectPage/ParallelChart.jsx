import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import { cuisinesData } from "../Data/cuisines";
import { ingredientsData } from "../Data/ingredients";

// cuisines images
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

// ingredients images
import garlic from "../img/Ingredients/Garlic.png";
import scallion from "../img/Ingredients/scallion.png";
import soySauce from "../img/Ingredients/soy sauce.png";
import onion from "../img/Ingredients/onion.png";
import sesameOil from "../img/Ingredients/sesame oil.png";
import sesameSeed from "../img/Ingredients/sesame seed.png";
import blackPepper from "../img/Ingredients/black pepper.png";
import egg from "../img/Ingredients/egg.png";
import vegetableOil from "../img/Ingredients/vegetable oil.png";
import gochugaru from "../img/Ingredients/gochugaru.png";
import kimchiIngredient from "../img/Ingredients/kimchi.png";
import pepper from "../img/Ingredients/pepper.png";
import ginger from "../img/Ingredients/ginger.png";
import carrot from "../img/Ingredients/carrot.png";
import flour from "../img/Ingredients/flour.png";
import tofu from "../img/Ingredients/tofu.png";
import beef from "../img/Ingredients/beef.png";
import spinach from "../img/Ingredients/spinach.png";
import gochujang from "../img/Ingredients/gochujang.png";
import kelp from "../img/Ingredients/kelp.png";

const cuisineImg = [
  tteokBokki,
  kimchi,
  gimbap,
  galbi,
  bibimbap,
  bulgogi,
  mandu,
  jeon,
  samgyeopsal,
  kimchiBokkeumBap,
  kimchiJjigae,
  janchiGuksu,
  kalGuksu,
  japchae,
  budaeJjigae,
];

const ingredientImg = [
  garlic,
  scallion,
  soySauce,
  onion,
  sesameOil,
  sesameSeed,
  blackPepper,
  egg,
  vegetableOil,
  gochugaru,
  kimchiIngredient,
  pepper,
  ginger,
  carrot,
  flour,
  tofu,
  beef,
  spinach,
  gochujang,
  kelp,
];

const noPicsList = ["Gangjeong", "Soju", "Hotteok", "Tteok", "Sundae"];

let filteredCuisinesData = cuisinesData.filter(
  (c) => !noPicsList.includes(c.name)
);

const parallelogramMatchList = [
  [0, 1, 2, 9, 18],
  [0, 1, 9, 14],
  [3, 4, 5, 6, 7, 13, 17],
  [0, 1, 2, 3, 6, 8, 12, 16],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 16, 17, 18],
  [0, 1, 2, 3, 4, 5, 6, 13, 11, 16],
  [0, 1, 2, 3, 4, 6, 9, 10, 11, 12, 15],
  [0, 1, 3, 4, 5, 6, 7, 8, 14],
  [],
  [0, 1, 2, 3, 4, 6, 8, 10],
  [0, 1, 6, 9, 10, 12, 15],
  [1, 3, 7, 8, 19],
  [0, 2, 3, 4, 6, 8, 14, 19],
  [0, 1, 2, 3, 6, 7, 8, 16, 17],
  [0, 1, 2, 3, 6, 9, 10, 18],
];

const ParallelChart = () => {
  const ref = useRef();
  useEffect(() => {
    const svg = d3.select(ref.current);
    const height = ref.current.clientHeight;
    const width = ref.current.clientWidth - 75;

    let cuisineCirclesPosition = [];
    let ingredientCirclesPosition = [];

    let cuisines = svg
      .append("g")
      .selectAll("cuisines")
      .data(cuisineImg)
      .enter()
      .append("image")
      .attr("xlink:href", (d) => d)
      .attr("id", (d, i) => cuisinesData[i].name)
      .attr("class", (d, i) => i)
      .attr("width", 75)
      .attr("height", 75)
      .style("cursor", "pointer")
      .attr("x", 0)
      .attr("y", (d, i) => 122.143 * i)
      .on("click", (e, d) => {
        let target = +e.target.classList.value;
        svg.selectAll(".path").remove();
        parallelogramGenerator(target, parallelogramMatchList[target]);
      });

    let ingredients = svg
      .append("g")
      .selectAll("ingredients")
      .data(ingredientImg)
      .enter()
      .append("image")
      .attr("xlink:href", (d) => d)
      .attr("width", 75)
      .attr("height", 75)
      .attr("x", width)
      .attr("y", (d, i) => 90 * i);

    let cuisineRects = svg
      .append("g")
      .selectAll("cuisineRects")
      .data(cuisineImg)
      .enter()
      .append("rect")
      .attr("class", "cuisineRect")
      .attr("width", "10px")
      .attr("height", "45px")
      .attr("x", 105)
      .attr("y", (d, i) => 122.143 * i + 10)
      .attr("fill", "#F9F7EE")
      .attr("opacity", 0.5);

    let ingredientRects = svg
      .append("g")
      .selectAll("ingredientRects")
      .data(ingredientsData)
      .enter()
      .append("rect")
      .attr("class", "ingredientRect")
      .attr("width", "10px")
      .attr("height", "45px")
      .attr("x", width - 30)
      .attr("y", (d, i) => 90 * i + 10)
      .attr("stroke-width", "0px")
      .attr("fill", "#F9F7EE")
      .attr("opacity", 0.3);

    let cuisinesText = svg
      .append("g")
      .selectAll("cuisineTexts")
      .data(filteredCuisinesData)
      .enter()
      .append("text")
      .attr("class", "cuisineText")
      .attr("x", 127)
      .attr("y", (d, i) => 122.143 * i + 37.5)
      .attr("fill", "#F9F7EE")
      .attr("font-size", "16px")
      .attr("opacity", 0.5)
      .style("letter-spacing", "1.5px")
      .text((d) => d.name);

    let ingredientText = svg
      .append("g")
      .selectAll("cuisineTexts")
      .data(ingredientsData)
      .enter()
      .append("text")
      .attr("class", "cuisineText")
      .attr("x", width - 42)
      .attr("y", (d, i) => 90 * i + 37.5)
      .attr("fill", "#F9F7EE")
      .attr("font-size", "16px")
      .attr("opacity", 0.5)
      .style("letter-spacing", "1.5px")
      .attr("text-anchor", "end")
      .text((d) => d.name);

    svg.selectAll(".path").remove();

    const parallelogramGenerator = (order, list) => {
      let parallelogramPoints;

      for (let i = 0; i < list.length; i++) {
        parallelogramPoints = [
          {
            x: 115,
            y: 122.143 * order + 10,
          },
          {
            x: 115,
            y: 122.143 * order + 55,
          },
          { x: width - 30, y: 90 * list[i] + 55 },
          { x: width - 30, y: 90 * list[i] + 10 },
        ];
        let parallelogramArea = d3
          .area()
          .x((d) => d.x)
          .y0((d) => d.y - 45)
          .y1((d) => d.y);

        svg
          .append("path")
          .attr("class", "path")
          .attr("d", parallelogramArea(parallelogramPoints))
          .attr("stroke", "none")
          .attr("fill", "#F9F7EE")
          .attr("opacity", 0.05);
      }
    };

    const defaultParallelogram = () => {
      parallelogramMatchList.map((p, i) => {
        parallelogramGenerator(i, p);
      });
    };
    defaultParallelogram();
  });

  return <svg ref={ref} className="w-full h-full"></svg>;
};

export default ParallelChart;
