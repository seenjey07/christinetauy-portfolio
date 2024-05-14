import "./home.scss";
import { delay, motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slidingTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
      delay: 2,
    },
  },
};

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>CHRISTINE TAUY</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div className="buttons">
            <motion.button variants={textVariants}>My Projects</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            className="scrollButton"
            src="/scroll.png"
            alt="Scroll Icon"
          />
        </motion.div>
      </div>

      <motion.div
        variants={slidingTextVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer"
      >
        Full Stack Web Developer
      </motion.div>

      <div className="imageContainer">
        <img className="myPhoto" src="/Christine.jpg" alt="Christine"></img>
      </div>
    </div>
  );
};

export default Home;
