import { useState } from "react";
import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 80px 80px)",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 30,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
