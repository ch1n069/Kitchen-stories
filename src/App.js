import React from "react";

import logo from "./logo.svg";
import "./App.css";
import { Nav } from "react-bootstrap";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Backdrop from "./components/Backdrop";
function App() {
  return (
    <div>
      <Home />
      {/* <Backdrop /> */}
    </div>
  );
}

export default App;
