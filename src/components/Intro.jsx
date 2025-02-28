import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

const IntroComponent = () => {
  const githubUrl = "https://github.com/athishsb";
  const linkedInUrl = "https://www.linkedin.com/in/athish-sb/";
  const resumeUrl =
    "https://drive.google.com/file/d/1gHlEnEWT9S2nImLD6OP8CbwD8vGyWe2c/view?usp=sharing";

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  // Reusable class variables
  const buttonClass =
    "btn btn-outline-light d-flex align-items-center gap-2 fw-bold px-3 py-2 shadow-sm";
  const motionHeading = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };
  const motionSubHeading = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 },
  };
  const motionButtonGroup = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, delay: 0.4 },
  };
  const motionDescription = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.6 },
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center text-white py-5"
      style={{
        background: "#121826",
        minHeight: "100vh",
      }}
    >
      <motion.h1 {...motionHeading} className="fw-bold text-primary">
        Hey, I&apos;m Athish
      </motion.h1>
      <motion.h2 {...motionSubHeading} className="fw-bold text-info mb-4">
        Full Stack Developer
      </motion.h2>

      <motion.div
        {...motionButtonGroup}
        className="d-flex justify-content-center gap-4 mb-4"
      >
        <button className={buttonClass} onClick={() => handleClick(githubUrl)}>
          <FaGithub /> Github
        </button>
        <button
          className={buttonClass}
          onClick={() => handleClick(linkedInUrl)}
        >
          LinkedIn
        </button>
        <button className={buttonClass} onClick={() => handleClick(resumeUrl)}>
          <BsBoxArrowUpRight /> Resume
        </button>
      </motion.div>

      <motion.p
        {...motionDescription}
        className="w-75 text-secondary"
        style={{ maxWidth: "600px", fontSize: "1.1rem" }}
      >
        I am a dynamic and detail-oriented Full Stack Developer passionate about
        designing and developing modern web applications. With expertise in both
        frontend and backend technologies, I specialize in building scalable,
        efficient, and user-friendly solutions. Proficient in JavaScript
        frameworks, RESTful services, and database management, I enjoy
        problem-solving and continuously learning new technologies to enhance my
        skills.
      </motion.p>
    </div>
  );
};

export default IntroComponent;
