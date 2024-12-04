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
    title: "Prosperity Bank",
    description:
      "This was one of my first projects while learning React. It is a banking application that enables users to create accounts and manage their finances. It utilizes CSS for a polished visual presentation. The app provides users with an intuitive dashboard featuring tabs for financial transactions.",
    img: "https://i.ibb.co/TLrMZtr/image.png",
    link: "https://seenj-prosperity-bank.netlify.app/",
  },
  {
    id: 3,
    title: "WeatherPulse",
    description:
      "A sleek and responsive weather application built with React and styled using Tailwind CSS. It fetches real-time weather data from OpenWeather API. It offers a clean and intuitive user interface for checking the weather quickly and efficiently.",
    img: "https://i.ibb.co/wwVMdF1/Weather-Pulse.png",
    link: "https://seenj-weatherpulse.netlify.app",
  },

  {
    id: 4,
    title: "ShopBud",
    description:
      "With ShopBud, users can easily manage their shopping lists, including adding new items, editing existing entries, and deleting items they no longer need. Stay organized and make your shopping experience smoother with ShopBud.",
    img: "https://i.ibb.co/6y3R3m7/ShopBud.png",
    link: "https://seenj-shopbud.netlify.app/",
  },

  {
    id: 5,
    title: "Professional Review Buddy Website",
    description:
      "Using Figma, I created a design for a website for a professional review company. This website is currently under construction.",
    img: "https://i.ibb.co/8dpbfBc/PRBSite.png",
    link: "https://bit.ly/PRBSite",
  },

  {
    id: 6,
    title: "Professional Review Buddy - PRB LET Website",
    description:
      "Using Figma, I created a design for Professional Review Buddy's related website - PRB LET, specifically for Filipino LET takers. This website is currently under construction.",
    img: "https://i.ibb.co/z8Rjsh3/PRB-LETSite.png",
    link: "https://bit.ly/PRBLETPage",
  },

  {
    id: 7,
    title: "MindfulMe",
    description:
      "Currently under development, MindfulMe is a wellness app that seeks to support users in nurturing their mental health and embracing mindfulness daily. It allows users to record daily moods and journal entries, fostering self-awareness and emotional reflection. Built with React, Vite, JSX, Tailwind CSS, and Ruby on Rails, the app aims to deliver a modern, intuitive user experience.",
    img: "https://i.ibb.co/kg5FkMh/Mindful-Me.png",
    link: "",
  },
];

const EachProject = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="projectContainer">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
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
        <h1>Projects</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <EachProject key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Projects;
