import React from "react";
import {useState, useEffect} from "react";
import ReactApexChart from "react-apexcharts";
import FormBox from "./FormBox";

const RadarChart = (props) => {
  const [data, setData] = useState(props.data)
  const myLabels = [
    "Professionalism",
    "Integrity/Trustworthiness",
    "Treat others with respect/courtesy",
    "Listen Attentively & Respectfully",
    "Respond Promptly",
    "Multitasking",
    "Using & Evaluating Tech Tools",
    "Adapting Work Habits",
    "Legal Research",
    "Identity & Gather Facts and Legal Issues",
    "Draft Pleadings Motions Briefs",
    "Request/Produce Discovery",
  ]
  
  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  console.log(data)
  const config = {
    options: {
      scale: {
        ticks: {
          beginAtZero: true,
          max: 10,
          stepSize: 1
        }
      },
      chart: {
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      colors: ["#bf8e35", "#292318"],
      labels: myLabels,
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
        data: data
      },
      {
        name: "Future",
        data: [9, 10, 9, 10, 8, 9, 10, 9, 10, 7, 10, 8]
      }
    ]
  };
  
  // const data = {props.data}
      

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
