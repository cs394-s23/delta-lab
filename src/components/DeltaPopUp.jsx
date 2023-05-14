import React from "react";
import "./styles/DeltaPopUp.css";

const DeltaPopUp = ({ category, percentage, skills, centroid, onClose }) => {
  console.log("CENTROID", centroid)
  centroid = centroid.split(",")
    skills = skills.split(",")

    const popupStyle = {
      position: "absulte",
      top: centroid[1] + "px",
      right: centroid[0] + "px",
      transform: "translate(-50%, -50%)"
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