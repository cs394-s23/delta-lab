import React from "react";
import "./styles/DeltaPopUp.css";

const DeltaPopUp = ({ category, percentage, skills, centroid, color, onClose }) => {
  console.log("CENTROID", centroid)
  centroid = centroid.split(",")
  console.log(color)
    skills = skills.split(",")

    const popupStyle = {
      position: "absolute",
      transform: "translate(-50%, -50%)",
      backgroundColor: color
    }

  return (
    <div id="#popup" className="popup" style={popupStyle}>
      <div className="popup-content">
        <h2>{category}</h2>
        <p>{percentage}% of the Delta Model</p>
        <ul className = "skills-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DeltaPopUp;