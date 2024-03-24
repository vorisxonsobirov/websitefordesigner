import React, { useRef, useEffect } from "react";
import "./style.css";
import Home from "./components/Home/Home";
import SecondPage from "./components/secondPage/SecondPage";
import Packages from "./components/Packages/Packages";
import Stage from "./components/Stages/Stages";

function App() {
  const homeRef = useRef(null);
  const stageRef = useRef(null);
  const secondPageRef = useRef(null);
  const packagesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (homeRef.current) {
        homeRef.current.style.transform = `translateY(${scrollTop * 0.3}px)`;
      }
      if (stageRef.current) {
        stageRef.current.style.transform = `translateY(${scrollTop * 0.1}px)`;
      }
      if (secondPageRef.current) {
        secondPageRef.current.style.transform = `translateY(${scrollTop * 0.1}px)`;
      }
      if (packagesRef.current) {
        packagesRef.current.style.transform = `translateY(${scrollTop * 0.05}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Содержимое первой страницы */}
      <div ref={homeRef}>
        <Home />
      </div>
      {/* Содержимое второй страницы */}
      <div ref={stageRef}>
        <Stage />
      </div>
      {/* Содержимое третьей страницы */}
      <div ref={secondPageRef}>
        <SecondPage />
      </div>
      {/* Содержимое четвертой страницы */}
      <div ref={packagesRef}>
        <Packages />
      </div>
    </div>
  );
}

export default App;
