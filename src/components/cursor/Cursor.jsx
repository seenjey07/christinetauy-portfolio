import { useState, useEffect } from "react";
import "./cursor.scss";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x + 12, y: position.y + 12 }}
    ></motion.div>
  );
};

export default Cursor;
