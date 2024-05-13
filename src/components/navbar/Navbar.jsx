import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          Christine Tauy
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/christinerosalesprofile/">
            <img src="/linkedin.png" alt="linkedin"></img>
          </a>
          <a href="https://github.com/seenjey07">
            <img src="/github.png" alt="github"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
