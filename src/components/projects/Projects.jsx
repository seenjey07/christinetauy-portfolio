import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Tic-Tac-Toe",
    description:
      "While learning about Javascript, Grids, and Flex, I created this site as one of our projects: an interactive Tic-Tac-Toe game that brings the classic 2-player challenge to life. I used CSS for styling.",
    img: "https://i.ibb.co/w7kVLgk/image.png",
    link: "https://seenj-tictactoe.netlify.app/",
  },
  {
    id: 2,
    title: "Baking App ~ Prosperity Bank",
    description:
      "This was one of my first projects while learning React. It is a banking application that enables users to create accounts and manage their finances. It utilizes CSS for a polished visual presentation. The app provides users with an intuitive dashboard featuring tabs for financial transactions.",
    img: "https://i.ibb.co/TLrMZtr/image.png",
    link: "https://seenj-prosperity-bank.netlify.app/",
  },
  {
    id: 3,
    title: "Weather App ~ WeatherPulse",
    description:
      "A sleek and responsive weather application built with React and styled using Tailwind CSS. It fetches real-time weather data from an API and displays the current temperature, weather conditions, and a 5-day forecast for any searched location. Designed for ease of use, it offers a clean and intuitive user interface for checking the weather quickly and efficiently.",
    img: "https://img.freepik.com/free-vector/collection-cartoon-weather-signs_79603-1806.jpg?t=st=1716902003~exp=1716905603~hmac=3ac5019995f07fa7418d10103e9d8ff2ff77f294cf310dd29633774143ff7801&w=826",
    link: "https://seenj-weather-app.netlify.app/", //for making and deploying
  },
];

const EachProject = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-300", "300"]);

  return (
    <section ref={ref}>
      <div className="projectContainer">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={() => window.open(item.link)}>See Project</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <EachProject key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Projects;
