import React, { useEffect, useRef } from "react";

import * as d3 from "d3";
import Korea from "../Data/Korea.geojson";




const KoreanMap = ({ setProvince, province, KoreanGroup }) => {
  const ref = useRef();
  let targetProvince;
  let targetProvinceGroup = [];

  useEffect(() => {
    const svg = d3.select(ref.current);
    const height = ref.current.clientHeight;
    const width = ref.current.clientWidth;

    let projection = d3
      .geoMercator()
      .center([127.8, 36.3])
      .scale(6000)
      .translate([width / 2, height / 2]);

    d3.json(Korea).then((data) => {
      console.log(KoreanGroup[province].includes("Gangwon"));
      svg
        .selectAll("path")
        .data(data.features)
        .join("path")
        .attr("class", (d) => d.properties.name_1)
        .attr("fill", "#F9F7EE")
        .attr("d", d3.geoPath().projection(projection))
        .style("stroke", "#1E2024")
        .style("opacity", (d) =>
          KoreanGroup[province].includes(d["properties"]["name_1"]) ? 1 : 0.3
        )
        .on("mouseenter", (event) => {
          targetProvince = event.target.className.baseVal;
          KoreanGroup.map((K, i) => {
            if (K.includes(targetProvince)) {
              targetProvinceGroup = K;
              setProvince(KoreanGroup.indexOf(targetProvinceGroup));
              // K.map((k, j) => {
              //   d3.selectAll(`.${k}`).style("opacity", 1);
              // });
            }
          });
        })
        .on("mouseout", (event) => {
          // targetProvinceGroup.map((k, j) => {
          //   d3.selectAll(`.${k}`).style("opacity", 0.3);
          // });
          // setProvince("")
        });
    });
  });

  return <svg ref={ref} className="w-full h-full"></svg>;
};

export default KoreanMap;
