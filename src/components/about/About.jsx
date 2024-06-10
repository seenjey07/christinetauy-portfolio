import "./about.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: { x: -500, y: 0, opacity: 0 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref);

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={window.innerWidth <= 767 ? "animate" : isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          A relentless learner, a dedicated problem-solver, <br />
          and a passionate creator of digital experiences.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/female-dev.png" alt="Christine Logo" />
        </div>
        <div className="title">
          <h1>
            The
            <motion.b whileHover={{ color: "rgb(255, 165, 0)" }}>
              {" "}
              WebDev
            </motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "rgb(255, 165, 0)" }}>
              For Your
            </motion.b>{" "}
            Business.
          </h1>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#Projects">View Projects</a>
          </motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box aboutMe"
          whileHover={{
            backgroundColor: "rgb(255, 165, 0)",
            color: "rgb(0, 0, 0)",
          }}
        >
          <h2>A little about me</h2>
          <p>
            I&apos;m a career shifter from the sunny streets of Cavite,
            Philippines. When I&apos;m not diving into code, you&apos;ll catch
            me binge-watching movies, swooning over Korean dramas, or whipping
            up some delightful scented candles. I thrive on challenges that keep
            my mind buzzing, which is why I&apos;ve jumped headfirst into the
            exciting world of web development. Let&apos;s team up and whip up
            some digital magic together!
          </p>
        </motion.div>
        <motion.div
          className="box education"
          whileHover={{
            backgroundColor: "rgb(255, 165, 0)",
            color: "rgb(0, 0, 0)",
          }}
        >
          <h2>My Education</h2>
          <p>
            I&apos;m a graduate of BS Psychology, a Licensed Professional
            Teacher, and with 27 units earned in my Master of Arts in Teaching
            Social Sciences. More recently, I have gained training and
            experience in HTML, CSS, JavaScript, React, and Ruby on Rails
            through Avion School from July of last year (2023) to February
            (2024).
          </p>
        </motion.div>
        <motion.div
          className="box codingExp"
          whileHover={{
            backgroundColor: "rgb(255, 165, 0)",
            color: "rgb(0, 0, 0)",
          }}
        >
          <h2>Coding Experience</h2>
          <p>
            During my time at Avion, I delved into coding and app development,
            starting with basic HTML, CSS, and JavaScript projects, and
            advancing to more complex ones using React and Rails. Some of my
            projects include recreating the classic Tic Tac Toe game, building a
            product landing page, developing a journal app, and crafting a
            banking app. Through collaborative efforts, we honed our GitHub
            skills and successfully built a messaging app, a stock-trading
            platform, and an airline ticket booking system.
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="techStacksContainer" variants={variants}>
        <motion.div
          className="techStacksBox"
          whileHover={{
            backgroundColor: "rgb(255, 165, 0)",
            color: "rgb(0, 0, 0)",
          }}
        >
          <h2>Tech Stacks</h2>
          <div>
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="htmlBadge"
            />
            <img
              src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
              alt="javascriptBadge"
            />
            <img
              src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
              alt="typescriptBadge"
            />
            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="reactBadge"
            />
            <img
              src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white"
              alt="railsBadge"
            />
            <img
              src="	https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt="css3Badge"
            />
            <img
              src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
              alt="sassBadge"
            />
            <img
              src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white"
              alt="chakraBadge"
            />
            <img
              src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="tailwindBadge"
            />
            <img
              src="https://img.shields.io/badge/daisyUI-1ad1a5?style=for-the-badge&logo=daisyui&logoColor=white"
              alt="daisyuiBadge"
            />
            <img
              src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white"
              alt="shadcnuiBadge"
            />
            <img
              src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
              alt="bootstrapBadge"
            />
            <img
              src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue"
              alt="framerBadge"
            />
            <img
              src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white"
              alt="canvaBadge"
            />
            <img
              src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="postgresqlBadge"
            />
            <img
              src="https://img.shields.io/badge/Sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white"
              alt="sqliteBadge"
            />
            <img
              src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"
              alt="awsBadge"
            />
            <img
              src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white"
              alt="renderBadge"
            />
            <img
              src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
              alt="netlifyBadge"
            />
            <img
              src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
              alt="vercelBadge"
            />
            <img
              src="https://badges.aleen42.com/src/github.svg"
              alt="githubBadge"
            />
            <img
              src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
              alt="virtualStudioCodeBadge"
            />
            <img
              src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"
              alt="esLintBadge"
            />
            <img
              src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"
              alt="prettierBadge"
            />
            <img
              src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
              alt="nodeBadge"
            />
            <img
              src="	https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"
              alt="npmBadge"
            />
            <img
              src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E"
              alt="viteBadge"
            />
            <img
              src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white"
              alt="webpackBadge"
            />
            <img
              src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white"
              alt="axiosBadge"
            />
            <img
              src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white"
              alt="babelBadge"
            />
            <img
              src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"
              alt="postmanBadge"
            />
            <img
              src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
              alt="jsonBadge"
            />
            <img
              src="https://img.shields.io/badge/Wix-000?style=for-the-badge&logo=wix&logoColor=white"
              alt="wixBadge"
            />
            <img
              src="https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white"
              alt="chatGPTBadge"
            />
            <img
              src="https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=googlebard&logoColor=fff"
              alt="geminiBadge"
            />
            <img
              src="https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white"
              alt="stackOverflowBadge"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
