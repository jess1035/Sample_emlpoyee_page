import React from "react";
import "./Designation.css";

function Desigantion(property) {
  return (
    <div className="desigantion">
      <span>{property.designation}</span>
    </div>
  );
}

export default Desigantion;
