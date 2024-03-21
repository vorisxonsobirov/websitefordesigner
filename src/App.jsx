import React from "react";
import "./style.css";
import Home from "./components/Home/Home";
import SecondPage from "./components/secondPage/SecondPage";
import Packages from "./components/Packages/Packages";
import Stage from "./components/Stages/Stages";
function App() {

  return (
    <div className="App">
      <Home />
      <SecondPage/>
      <Packages/> 
      <Stage/>
    </div>
  );
}

export default App;
