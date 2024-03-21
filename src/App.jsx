import React from "react";
import simpleParallax from "simple-parallax-js";
import "./style.css";
import Home from "./components/Home/Home";
import SecondPage from "./components/secondPage/SecondPage";
import Packages from "./components/Packages/Packages";

function App() {

  return (
    <div className="App">
      <Home />
      <SecondPage/>
      <Packages/> 
    </div>
  );
}

export default App;
