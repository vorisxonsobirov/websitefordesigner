import React from "react";
import Logo from "./3dLogo";
import "./style.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../../variants";

const Home = () => {
  return (
    <div className="Home">
      <div className="Navbar">
        <div className="logo"></div>
        <ul>
          <li>Eng</li>
          <li>Портфолио</li>
          <li>Пакеты</li>
          <button>Оставить заявку</button>
        </ul>
      </div>
      <div className="home-content">
        <div className="home-content-text">
          <motion.h1
            variants={fadeIn("up", 0)}
            initial="hidden"
            whileInView={"show"}
            className="motion-text-about"
            viewport={{ once: false, amount: 0.7 }}
          >
            Создаём <br />
            3D-motion
          </motion.h1>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
          >
            <h1 className="motion-text"></h1>
            <TypeAnimation
              sequence={["Рекламу", 2000, "Дизайн", 2000,]}
              speed={50}
              className="motion-text"
              wrapper="h1"
              repeat={Infinity}
              href="#"
            />
          </motion.div>
          
          <span>
            <p>для брендов</p>
            <p>для приложении</p>
            <p>сервисов</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
