import React from "react";
import {useState, useEffect} from "react";
import ReactApexChart from "react-apexcharts";
import FormBox from "./FormBox";
import { addTraitsToUsers } from "../firebase";

const RadarChart = (props) => {
  const [data, setData] = useState(props.data)
  const [pastdata, setPastData] = useState(props.pastdata)
  console.log(props.data)
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
  useEffect(() => {
    setPastData(props.pastvalues);
  }, [props.pastvalues]);

  console.log(data)
  const config = {
    options: {
      chart: {
        dropShadow: {
          enabled: true,
          blur: 5,
          left: 5,
          top: 5
        }
      },
      colors: ["#bf8e35", "#292318" , "#a9a9a9"],
      labels: myLabels,
      stroke: {
        width: 2
      },
      fill: {
        opacity: 0
      },
      markers: {
        size: 4
      }
    },
    series: [
      {
        name: "Current",
        data: data
      },
      {
        name: "Ideal",
        data: [9, 10, 9, 10, 8, 9, 10, 9, 10, 7, 10, 8]
      },
      {
        name: "Past",
        data: pastdata
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
