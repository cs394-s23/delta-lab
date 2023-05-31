import React from "react";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import FormBox from "./FormBox";
import { addTraitsToUsers } from "../firebase";

const RadarChart = (props) => {
  const [data, setData] = useState(props.data);
  const [size , setSize] = useState("8px");
  const [pastdata, setPastData] = useState(props.pastdata);
  const [labelcolors , setColors] = useState([
    "#0d7a71",
    "#c90d7a",
    "#7ac90d",
    "#7a0d9c",
    "#9c7a0d",
    "#0d4a7a",
    "#7a3b0d",
    "#0d9c7a",
    "#7a0d28",
    "#bf3575",
    "#3b0d7a",
    "#0d9c7a"
    
  ]);
  const [markerstyles, setMarkerStyles] = useState(
    {size:4});
  const [titletext, setTitleText] = useState({text:"Your SpiderChart", align:"center"});

  const skills = props.skills;
  var top3 = props.top3;
  top3 = top3.map((item) => {
    return skills[item];
  });
  


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
  ];

  useEffect(() => {
    setData(props.data);
  }, [props.data]);
  useEffect(() => {
    setPastData(props.pastvalues);
  }, [props.pastvalues]);
 useEffect (() => {
    if (props.done === true) {
      
      const index3= top3.map ((item) => {
        return myLabels.indexOf(item)
      })
      
      const newColors = labelcolors.map((item, index) => {
        if (index3.includes(index)) {
          setSize("12px");

          return item;

        } else {
          return "white";
        }
      });
      setColors(newColors);
      const newMarkerStyles = {
        
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: index3[0],
            fillColor: "#0d7a71",
            size: 8
          },
          {
            seriesIndex: 0,
            dataPointIndex: index3[1],
            fillColor: "#c90d7a",
            size:8
          },
          {
            seriesIndex: 0,
            dataPointIndex: index3[2],
            fillColor: "#7ac90d",
            size:8
          }]
      };
      setMarkerStyles(newMarkerStyles);
      setTitleText({text:"Your Top Lowest Skills", align:"center"});


      

     
    }
  }, [props.done])

  const config = {
    options: {
      title : titletext,
      
   

      
      chart: {
        dropShadow: {
          enabled: true,
          blur: 0,
          left: 10,
          top: 5,
        },
      },
      colors: ["#bf8e35", "#292318", "#a9a9a9"],
      xaxis: {
        categories: myLabels,
        labels: {
          style: {
            colors: labelcolors,
            fontSize: size,
          },
        },
      },
      stroke: {
        width: 2,
      },
      fill: {
        opacity: 0,
      },
      markers: markerstyles,
    },
    series: [
      {
        name: "Current",
        data: data,

      },
      {
        name: "Ideal",
        data: [9, 10, 9, 10, 8, 9, 10, 9, 10, 7, 10, 8],
      },
      {
        name: "Past",
        data: pastdata,
      },
    ],
  };

  return (
    <ReactApexChart
      options={config.options}
      series={config.series}
      type="radar"
      height="550"
      width="800"
    />
  );
};

export default RadarChart;
