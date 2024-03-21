import React from "react";
import simpleParallax from "simple-parallax-js";
import "./style.css";
import Home from "./components/Home/Home";
import SecondPage from "./components/secondPage/SecondPage";

function App() {

  return (
    <div className="App">
      <Home />
      <SecondPage/>
    </div>
  );
}

export default App;
