import "./about.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div className="about">
      <motion.div className="textContainer">
        <p>
          A relentless learner, a dedicated problem-solver, <br />
          and a passionate creator of digital experiences.
        </p>
        <hr />
        <motion.div className="titleContainer">
          <div className="title">
            <h1>
              The<b> WebDev</b>
            </h1>
            <img src="/female-dev.png" alt="Christine Logo" />
          </div>
          <div className="title">
            <h1>
              <b>For Your</b> Business
            </h1>
            <button>View Projects</button>
          </div>
        </motion.div>
        <motion.div className="listContainer"></motion.div>
        <div className="box">
          <h2>A little about me</h2>
          <p>
            I am a career shiftee from Cavite. Beyond coding, I am passionate
            about movies, and Korean dramas, making scented candles during my
            free time, and embracing challenges that keep my mind alert. My love
            for learning and interest in the tech industry led me to this career
            shift, where I thrive on pushing boundaries and crafting exceptional
            digital experiences. Let us collaborate and create something
            extraordinary together!
          </p>
        </div>
        <div className="box">
          <h2>My Education</h2>
          <p>Some content</p>
        </div>
        <div className="box">
          <h2>Coding Experience</h2>
          <p>Some content</p>
        </div>
        <div className="box">
          <h2>Tech Stacks</h2>
          <p>Some content</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
