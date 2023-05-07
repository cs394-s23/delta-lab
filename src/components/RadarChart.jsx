import React from "react";
import ReactApexChart from "react-apexcharts";

const RadarChart = () => {
  const config = {
    options: {
      chart: {
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      colors: ["#bf8e35", "#292318"],
      labels: [
        "People: Professionalism",
        "People: Integrity/Trustworthiness",
        "People: Treat others with respect/courtesy",
        "People: Listen Attentively & Respectfully",
        "Process: Respond Promptly",
        "Process: Multitasking",
        "Process: Using & Evaluating Tech Tools",
        "Process: Adapting Work Habits",
        "Practice: Legal Research",
        "Practice: Identity & Gather Facts and Legal Issues",
        "Practice: Draft Pleadings Motions Briefs",
        "Practice: Request/Produce Discovery",
      ],
      stroke: {
        width: 1
      },
      fill: {
        opacity: 0
      },
      markers: {
        size: 2
      }
    },
    series: [
      {
        name: "Current",
        data: [7, 8, 7, 6, 5, 4, 3, 2, 5, 9, 8, 7]
      },
      {
        name: "Future",
        data: [9,10,9, 8, 9, 8, 7, 8, 10, 9, 8, 9]
      }
    ]
  };

  return (
    <ReactApexChart
      options={config.options}
      series={config.series}
      type="radar"
      height="550"
      width={600}
    />
  );
};

export default RadarChart;
