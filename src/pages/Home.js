import React from "react";
import Pfp from "../assets/sailormoonpfp.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> Haii </h1>
        <img src={Pfp} alt="sailor-venus"/>
        <p> allow me to introduce myself,<br/> I am the awesome emi :3 </p>
      </div>
    </div>
  );
}

export default Home;