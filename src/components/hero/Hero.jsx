import "./hero.scss";
import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-335%",
    transition: {
      repeat: Infinity,
      repeattype: "mirror",
      duration: 25,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>DEEPANKUMAR G</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Web Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              {" "}
              <a href="#Projects">See the latest Works</a>{" "}
            </motion.button>
            <motion.button variants={textVariants}>
              {" "}
              <a href="#Contact">Contact Me</a>{" "}
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="./scroll.png"
            alt=""
          />
        </motion.div>
        <motion.div
          className="slidingContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Full Stack Web Developer
        </motion.div>
      </div>
      <div className="imgContainer">
        <img src="/Deepan.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
