import Backdrop from "../components/Backdrop";
import Veggie from "../components/Veggie";
import React, { useState, useEffect } from "react";

function Home() {
  // custom functions
  const [modalIsClosed, setModalIsClosed] = useState(false);

  function closeModalHandler() {
    setModalIsClosed(true);
    console.log("clicked");
  }
  useEffect(() => {
    console.log("loaded");
    closeModalHandler();
  });

  return (
    <div onLoad={closeModalHandler}>
      <h1>this is home</h1>
      {/* {modalIsClosed && <Backdrop onCancel={closeModalHandler} />} */}
    </div>
  );
}

export default Home;
