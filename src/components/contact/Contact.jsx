import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_esbgsii", "template_eufzak7", formRef.current, {
        publicKey: "8-nbk-h2o0yeiUW_t",
      })
      .then(
        () => {
          setSuccess(true);
          setInterval(() => {
            formRef.current.reset();
            setSuccess(false);
          }, 3000);
        },
        () => {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 4000);
        }
      );
  };

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
          <h2>📱Socials</h2>
          <span className="social">
            <a
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/christinerosalesprofile/"
                )
              }
            >
              LinkedIn
              <img src="/linkedin.png" alt="linkedin"></img>
            </a>
            <a onClick={() => window.open("https://github.com/seenjey07")}>
              GitHub
              <img src="/github.png" alt="github"></img>
            </a>
          </span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <svg
            fill="orange"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512.107 512.107"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <motion.path
                    initial={{
                      opacity: 0,
                    }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    d="M256,0.053c-141.12,0-256,114.88-256,256s114.88,256,255.893,256h2.773c101.973,0,137.387-46.827,145.813-61.333 c9.493-16.32,11.093-33.28,4.16-45.44c-4.053-6.933-10.667-11.84-18.453-13.76l4.48-4.48c14.293-14.293,14.187-37.44-0.107-51.733 c-1.067-1.067-2.133-2.027-3.307-2.987l-43.093-33.6c-13.227-10.347-31.893-10.347-45.013,0.107l-9.6,7.573 c-5.973,4.8-14.613,4.267-20.053-1.173L196.48,228c-5.44-5.44-5.973-14.187-1.173-20.16l7.573-9.6 c10.453-13.227,10.56-31.787,0.213-45.12l-33.493-43.2c-6.4-8.213-16.107-13.333-26.56-13.973 c-10.453-0.64-20.693,3.2-28.053,10.667l-27.52,27.52c-15.893,16-39.36,66.773,86.827,193.28 C256,409.333,306.24,426.507,334.08,426.507c17.493,0,27.627-6.507,33.173-12.053l5.973-5.973c1.92,1.813,4.48,2.773,7.147,2.88 c4.907,0,8.213,1.493,9.92,4.48c2.24,4.053,2.667,12.693-4.053,24.107c-14.613,24.96-56.213,51.52-130.133,50.667 c-129.387,0-234.667-105.28-234.667-234.667S126.613,21.387,256,21.387s234.667,105.28,234.667,234.667 c0,43.093-11.84,85.227-34.133,122.027c-3.307,4.907-2.133,11.52,2.773,14.827c4.907,3.307,11.52,2.133,14.827-2.773 c0.213-0.32,0.427-0.64,0.64-0.96c24.427-40.107,37.333-86.187,37.333-133.12C512,114.933,397.12,0.053,256,0.053z M380.587,370.72c-0.32,0.427-0.747,0.96-1.173,1.387L352,399.627c-3.733,3.733-10.133,5.76-18.027,5.76 c-19.413,0-64.107-12.053-144.64-92.8c-121.28-121.6-90.667-159.253-86.827-163.2l27.52-27.52c2.773-2.88,6.613-4.48,10.667-4.48 h0.96c4.373,0.213,8.427,2.347,10.987,5.867l33.493,43.2c4.267,5.547,4.267,13.333-0.107,18.773l-7.573,9.6 c-11.413,14.507-10.24,35.307,2.773,48.427l77.013,77.227c13.12,13.12,33.92,14.293,48.427,2.88l9.6-7.573 c5.44-4.373,13.227-4.373,18.667-0.107l43.093,33.6C384.64,354.507,385.813,364.107,380.587,370.72z"
                  ></motion.path>
                </g>
              </g>
            </g>
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          ref={formRef}
          onSubmit={sendEmail}
        >
          {error || success === true ? (
            <div className="btnResponse">
              {error && "Something went wrong. Please try again."}
              {success && "Your message has been sent. Thank you!"}
            </div>
          ) : null}

          <input type="text" name="from_name" placeholder="Name" required />
          <input type="email" name="from_email" placeholder="Email" required />
          <textarea name="message" rows={8} placeholder="Message" required />
          <button>Send</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
