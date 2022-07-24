import "../../App.css";
import React from "react";
//import PhotoChangeWrapper from '../organisms/PhotoChangeWrapper';
import DragDrop from "../organisms/PhotoChangeWrapper";

function PhotoChange() {
  return (
    <div className="photochange">
      <DragDrop />
    </div>
  );
}

export default PhotoChange;
