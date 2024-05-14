import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "about"
            ? "linear-gradient(to top, #48204d, #1a0c1c)"
            : "linear-gradient(to top, #1a0c1c, #48204d)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "about" ? "Get to know me" : "Projects I've done"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "about" ? "planets.png" : "sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
