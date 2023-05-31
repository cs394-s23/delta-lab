import React from "react";
import "./styles/DeltaPopUp.css";

const DeltaPopUp = ({ category, percentage, skills, centroid, color, onClose }) => {

  centroid = centroid.split(",")

  skills = skills.split(",")

  const [left, top] = centroid;

  const popupStyle = {
    backgroundColor: color,
  };

  return (
    <div id="#popup" className="popup" style={popupStyle}>
      <div className="popup-content">
        <p><strong>{category}:</strong> {skills}</p>
      </div>
    </div>
  );
};

export default DeltaPopUp;