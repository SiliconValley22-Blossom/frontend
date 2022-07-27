import "../../App.css";
import React from "react";
import ColorizeFinishWrapper from '../organisms/ColorizeFinishWrapper';

function ColorizeFinish({match}) {
  return (
    <div className="colorizefinish">
      <ColorizeFinishWrapper photo_id={match.params.id}/>
    </div>
  );
}

export default ColorizeFinish;
