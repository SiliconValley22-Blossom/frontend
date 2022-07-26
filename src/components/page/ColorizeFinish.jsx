import "../../App.css";
import React from "react";
import Button from '../atom/Button';
import ColorizeFinishWrapper from "../organisms/ColorizeFinishWrapper";
import { Link } from "react-router-dom";

function Colorize() {
  return (
    <div className="colorizefinish">
      <ColorizeFinishWrapper />
     </div>
  );
}

export default Colorize;
