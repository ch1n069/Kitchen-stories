import React, { useState } from "react";
import "./Backdrop.css";
import Home from "../pages/Home";
function Backdrop(props) {
  // custom functions

  // functions are above

  // const hideHandler = () => {
  //   console.log("you clicked me");
  //   setToHidden(false);
  // };

  // functions go above
  return (
    <div onClick={props.onCancel}>
      <div className="body">
        <div className="chef">
          <h2>Whip up Your fav meal</h2>

          <button
            onClick={props.onCancel}
            className="btn btn-primary button"
            type=""
          >
            Get recipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Backdrop;
