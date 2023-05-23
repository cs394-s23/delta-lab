import React from "react";
import "./styles/DeltaPopUp.css";

const DeltaPopUp = ({ category, percentage, skills, centroid, color, onClose }) => {
  console.log("CENTROID", centroid)
  centroid = centroid.split(",")
  console.log(color)
  skills = skills.split(",")

  const [left, top] = centroid;

  const popupStyle = {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: "335px",
    backgroundColor: color,
    marginTop: "130px"
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