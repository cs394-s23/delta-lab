import React from "react";
import "./styles/DeltaPopUp.css";

const DeltaPopUp = ({ category, skills, color, onClose }) => {

  skills = skills.split(",")

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