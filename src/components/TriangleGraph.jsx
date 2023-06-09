import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import ReactDOM from "react-dom";
import DeltaPopUp from "./DeltaPopUp.jsx";
import "./styles/HomePage.css"

const TriangleGraph = () => {
  const ref = useRef(null);

  const colors = ["#4CABE1", "#0967A4", "#10946A"]

  const data = [
    { category: "The People", percentage: 0, ideal_per: 38, skills: "Understanding and related to clients, colleagues, and ourselves", color: "#4CABE1"},
    { category: "The Practice", percentage: 15, ideal_per: 29, skills: "Knowing, researching, and clearly communicating the law", color: "#0967A4" },
    { category: "The Process", percentage: 30, ideal_per: 32, skills: "Delivering legal services, efficiently & effectively", color: "#10946A" },
  ];

  useEffect(() => {
    const width = 550;
    const height = 400;

    if (!d3.select(ref.current).select("svg").empty()) {
      return; // If the SVG element already exists, don't do anything
    }

    const vertices = [
      [width / 2, 50],
      [100, height - 50],
      [width - 100, height - 50],
    ];

    const colorScale = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.category))
      .range(d3.schemeCategory10);

    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Calculate the centroid of the triangle
    const [cx, cy] = vertices.reduce(
      ([sumX, sumY], [x, y]) => [sumX + x, sumY + y],
      [0, 0]
    );
    const centroid = [cx / 3, cy / 3];

    // Calculate the coordinates of the point relative to the centroid
    const point = data.reduce(
      ([x, y], { percentage }, i) => [
        x + (vertices[i][0] - centroid[0]) * (percentage / 100),
        y + (vertices[i][1] - centroid[1]) * (percentage / 100),
      ],
      [centroid[0], centroid[1]]
    );

    // Draw the sub-triangles
    const subTrianglePaths = vertices.map((v1, i) => {
      const v2 = vertices[(i + 1) % 3];
      const v3 = vertices[(i + 2) % 3];

      const hull = d3.polygonHull([v1, v2, point]);
      const path = d3.path();
      path.moveTo(...hull[0]);
      hull.slice(1).forEach((p) => path.lineTo(...p));
      path.closePath();

      return {
        path,
        fill: colors[i],
        category: data[i].category,
        skills: data[i].skills,
        color: data[i].color,
      };
    });

    subTrianglePaths.forEach(({ path, fill, category, skills, color }) =>
  svg
    .append("path")
    .attr("d", path)
    .attr("fill", fill)
    .attr("class", "sub-triangle")
    .attr("data-category", category)
    .attr("data-skills", skills)
    .attr("data-color", color)
    .attr("cursor", "pointer")
);

    // draw the text
    vertices.forEach((v, i) => {
      const v2 = vertices[(i + 1) % 3];
      const labelPos = [(v[0] + v2[0]) / 2, (v[1] + v2[1]) / 2];
      
      // calculate the angle of the edge
      const dx = v2[0] - v[0];
      const dy = v2[1] - v[1];
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;

      if ( i == 1) {
      const label = svg
        .append("text")
        .attr("x", labelPos[0])
        .attr("y", labelPos[1])
        .attr('dy', 15)
        .text(data[i].category)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "central")
        .attr("font-family", "Montserrat, sans-serif")
        .attr("font-weight", "light")
        .attr("font-size", "24px")
        .attr("fill", "#000000")
        .attr("transform", `rotate(${angle}, ${labelPos[0]}, ${labelPos[1]}) translate(-75, 20)`);

      const circle = svg
        .append("circle")
        .attr("r", 10)
        .attr("fill", data[i].color)
        .attr("cx", labelPos[0])
        .attr("cy", labelPos[1])
        .attr("transform", `rotate(${angle}, ${labelPos[0]}, ${labelPos[1]}) translate(20, 37)`);

      const line = svg
        .append("line")
        .attr("stroke", data[i].color)
        .attr("stroke-width", 3)
        .attr("x1", labelPos[0]) // x-coordinate of the starting point
        .attr("y1", labelPos[1]) // y-coordinate of the starting point
        .attr("x2", 375) // x-coordinate of the ending point
        .attr("y2", labelPos[1]) // y-coordinate of the ending point
        .attr("transform", `rotate(${angle}, ${labelPos[0]}, ${labelPos[1]}) translate(20, 37)`);

        const line2 = svg
        .append("line")
        .attr("stroke", data[i].color)
        .attr("stroke-width", 3)
        .attr("x1", 375) // x-coordinate of the starting point
        .attr("y1", labelPos[1]+1) // y-coordinate of the starting point
        .attr("x2", 375) // x-coordinate of the ending point
        .attr("y2", labelPos[1]-40) // y-coordinate of the ending point
        .attr("transform", `rotate(${angle}, ${labelPos[0]}, ${labelPos[1]}) translate(20, 37)`);

      }
      else if ( i == 0) {
        const label = svg
          .append("text")
          .attr("x", labelPos[0])
          .attr("y", labelPos[1])
          .attr('dy', 15)
          .text(data[i].category)
          .attr("text-anchor", "middle")
          .attr("alignment-baseline", "central")
          .attr("font-family", "Montserrat, sans-serif")
          .attr("font-weight", "light")
          .attr("font-size", "24px")
          .attr("fill", "#000000")
          .attr("transform", `rotate(${angle+180}, ${labelPos[0]}, ${labelPos[1]}) translate(75, -50)`);

          const circle = svg
        .append("circle")
        .attr("r", 10)
        .attr("fill", data[i].color)
        .attr("cx", labelPos[0])
        .attr("cy", labelPos[1])
        .attr("transform", `rotate(${angle}, ${labelPos[0]}, ${labelPos[1]}) translate(20, 35)`);

        const line = svg
        .append("line")
        .attr("stroke", data[i].color)
        .attr("stroke-width", 3)
        .attr("x1", labelPos[0]) // x-coordinate of the starting point
        .attr("y1", labelPos[1]) // y-coordinate of the starting point
        .attr("x2", 287.5) // x-coordinate of the ending point
        .attr("y2", labelPos[1]) // y-coordinate of the ending point
        .attr("transform", `rotate(${angle}, ${labelPos[0]}, ${labelPos[1]}) translate(20, 35)`);

        const line2 = svg
        .append("line")
        .attr("stroke", data[i].color)
        .attr("stroke-width", 3)
        .attr("x1", 287.5) // x-coordinate of the starting point
        .attr("y1", labelPos[1]+1) // y-coordinate of the starting point
        .attr("x2", 287.5) // x-coordinate of the ending point
        .attr("y2", labelPos[1]-40) // y-coordinate of the ending point
        .attr("transform", `rotate(${angle}, ${labelPos[0]}, ${labelPos[1]}) translate(20, 35)`);
        
        }
      else {

          const label = svg
            .append("text")
            .attr("x", labelPos[0])
            .attr("y", labelPos[1])
            .attr('dy', 15)
            .text(data[i].category)
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .attr("font-family", "Montserrat, sans-serif")
            .attr("font-weight", "light")
            .attr("font-size", "24px")
            .attr("fill", "#000000")
            .attr("transform", `rotate(${angle+180}, ${labelPos[0]}, ${labelPos[1]}) translate(75, -50)`);

            const circle = svg
        .append("circle")
        .attr("r", 10)
        .attr("fill", data[i].color)
        .attr("cx", labelPos[0])
        .attr("cy", labelPos[1])
        .attr("transform", `rotate(${angle}, ${labelPos[0]}, ${labelPos[1]}) translate(20, 35)`);
        
        const line = svg
        .append("line")
        .attr("stroke", data[i].color)
        .attr("stroke-width", 3)
        .attr("x1", labelPos[0]) // x-coordinate of the starting point
        .attr("y1", labelPos[1]) // y-coordinate of the starting point
        .attr("x2", 462.5) // x-coordinate of the ending point
        .attr("y2", labelPos[1]) // y-coordinate of the ending point
        .attr("transform", `rotate(${angle}, ${labelPos[0]}, ${labelPos[1]}) translate(20, 35)`);

        const line2 = svg
        .append("line")
        .attr("stroke", data[i].color)
        .attr("stroke-width", 3)
        .attr("x1", 462.5) // x-coordinate of the starting point
        .attr("y1", labelPos[1]+1) // y-coordinate of the starting point
        .attr("x2", 462.5) // x-coordinate of the ending point
        .attr("y2", labelPos[1]-40) // y-coordinate of the ending point
        .attr("transform", `rotate(${angle}, ${labelPos[0]}, ${labelPos[1]}) translate(20, 35)`);
      }
    });

    // code for triangle graph hover popup
    svg.selectAll(".sub-triangle")
    .on("mouseover", function() {
      d3.select(this).attr("fill", d3.color(d3.select(this).attr("fill")).darker());
      const category = d3.select(this).attr("data-category");
      const skills = d3.select(this).attr("data-skills");

      const container = document.getElementById("trigraph-content");

      const popupContainer = document.createElement('div');
      const color = d3.select(this).attr("data-color");
      popupContainer.id = 'popup-container';
      container.appendChild(popupContainer);
      ReactDOM.render(<DeltaPopUp category={category} skills = {skills} color = {color} onClose={() => {
        const popups = document.querySelectorAll('#popup-container');
      }} />, popupContainer);
    })
    .on("mouseout", function() {
      d3.select(this).attr("fill", d3.color(d3.select(this).attr("fill")).brighter());
      const popups = document.querySelectorAll('#popup-container');
      for (let i = 0; i < popups.length; i++) {
        popups[i].remove();
      }
    })
  

  }, [data]);

  return <div >

  <div ref={ref}></div>

  </div>

  ;
};

export default TriangleGraph;
