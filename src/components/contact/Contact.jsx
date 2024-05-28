import "./contact.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 500,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1>Let&apos;s work together!</motion.h1>
        <motion.div className="contactDetails" variants={variants}>
          <h2>📧 Mail</h2>
          <span>
            <a href="mailto:chrosales07@gmail.com">chrosales07@gmail.com</a>
          </span>
        </motion.div>
        <motion.div className="contactDetails" variants={variants}>
          <h2>🏠 Address</h2>
          <span>Tanza, Cavite, Philippines</span>
        </motion.div>
        <motion.div className="contactDetails" variants={variants}>
          <h2>📞 Phone</h2>
          <span>+63950-303-3001</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows={8} placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
