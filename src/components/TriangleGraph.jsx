import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const TriangleGraph = () => {
  const ref = useRef(null);

  const data = [
    { category: "The People", percentage: 0 },
    { category: "The Practice", percentage: 15 },
    { category: "The Process", percentage: 30 },
  ];

  useEffect(() => {
    const width = 500;
    const height = 400;

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

    // Draw the triangle
    // const path = d3.path();
    // path.moveTo(...vertices[0]);
    // path.lineTo(...vertices[1]);
    // path.lineTo(...vertices[2]);
    // path.closePath();

    // svg
    //   .append("path")
    //   .attr("d", path)
    //   .attr("fill", "lightblue")
    //   .attr("stroke", "black");

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
        fill: colorScale(data[i].category),
        category: data[i].category,
        percentage: data[i].percentage,
      };
    });

    subTrianglePaths.forEach(({ path, fill, category, percentage }) =>
  svg
    .append("path")
    .attr("d", path)
    .attr("fill", fill)
    .attr("class", "sub-triangle")
    .attr("data-category", category)
    .attr("data-percentage", percentage)
);



    // Draw the lines connecting vertices to the point
    // vertices.forEach((v, i) => {
    //   const linePath = d3.path();
    //   linePath.moveTo(point[0], point[1]);
    //   linePath.lineTo(v[0], v[1]);

    //   svg
    //     .append("path")
    //     .attr("d", linePath)
    //     .attr("stroke", colorScale(data[i].category));
    // });

    // draw the text
    vertices.forEach((v, i) => {
      const v2 = vertices[(i + 1) % 3];
      const labelPos = [(v[0] + v2[0]) / 2, (v[1] + v2[1]) / 2];
    
      const label = svg
        .append("text")
        .attr("x", labelPos[0])
        .attr("y", labelPos[1])
        .attr('dy', 15)
        .text(data[i].category)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "central")
        .attr("font-size", "20px")
        .attr("font-weight", "bold")
        .attr("fill", colorScale(data[i].category));


    });

    svg.selectAll(".sub-triangle")
    .on("mouseover", function() {
      d3.select(this).attr("fill", d3.color(d3.select(this).attr("fill")).darker());
    })
    .on("mouseout", function() {
      d3.select(this).attr("fill", d3.color(d3.select(this).attr("fill")).brighter());
    })
    .on("click", function() {
      const category = d3.select(this).attr("data-category");
      const percentage = d3.select(this).attr("data-percentage");
      alert(`Category: ${category}\nPercentage: ${percentage}%`);
    });

  }, [data]);

  return <div ref={ref}></div>;
};

export default TriangleGraph;