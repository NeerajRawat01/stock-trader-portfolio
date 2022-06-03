import React from "react";
import bg from "./Photos/bg.jpg";

function Home() {
  return (
    <>
      <div id="home"
        className="h-screen  bg-fixed bg-no-repeat bg-[length:1700px_700px]  "
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
    </>
  );
}

export default Home;
