import "../../App.css";
import React from "react";
//import PhotoChangeWrapper from '../organisms/PhotoChangeWrapper';
import DragDrop from "../organisms/ColorizeWrapper";

function Colorize() {
  return (
    <div className="colorize">
      <DragDrop />
    </div>
  );
}

export default Colorize;
