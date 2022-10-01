import React, { useState } from "react";
import Backdrop from "../components/Backdrop";
import Home from "./Home";

function Pages() {
  const [showing, SetToHidden] = useState(true);
  return <div>{showing ? <Backdrop /> : <Home />}</div>;
}

export default Pages;
