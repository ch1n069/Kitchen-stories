import React, { useState } from "react";
import "./Backdrop.css";
function Backdrop() {
  // custom functions
  const [showing, setToHidden] = useState(true);

  // functions are above

  const hideHandler = () => {
    console.log("you clicked me");
    setToHidden(false);
  };
  // functions go above
  return (
    <div>
      {showing ? (
        <div onClick={hideHandler} className="body">
          <div className="chef">
            <h2>Whip up Your fav meal</h2>
            <button className="btn btn-primary button" type="">
              Get recipe
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Backdrop;
