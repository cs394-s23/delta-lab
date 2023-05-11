import React from "react";
import "./DeltaPopUp.css";

const DeltaPopUp = ({ category, percentage, skills, onClose }) => {
    skills = skills.split(",")
  return (
    <div id="#popup" className="popup">
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