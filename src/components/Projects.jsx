import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useState, useEffect, useRef } from "react";

const Projects = () => {
  const projectData = [
    {
      title: "TaskManager",
      demoUrl: "https://taskmanager-fe.netlify.app",
      frontendUrl: "https://github.com/athishsb/taskmanager-frontend",
      backendUrl: "https://github.com/athishsb/taskmanager-backend",
      imageUrl: "/images/TaskManager.png",
    },
    {
      title: "BurgerHub",
      demoUrl: "https://burgerhub-fe.netlify.app",
      frontendUrl: "https://github.com/athishsb/burgerhub-frontend",
      backendUrl: "https://github.com/athishsb/burgerhub-backend",
      imageUrl: "/images/BurgerHub.png",
    },
    {
      title: "ChatNow",
      demoUrl: "https://chatnow-fe.netlify.app",
      frontendUrl: "https://github.com/athishsb/chatnow-frontend",
      backendUrl: "https://github.com/athishsb/chatnow-backend",
      imageUrl: "/images/ChatNow.png",
    },
    {
      title: "BlogSphere",
      demoUrl: "https://blogsphere-fe.netlify.app",
      frontendUrl: "https://github.com/athishsb/blogsphere-frontend",
      backendUrl: "https://github.com/athishsb/blogsphere-backend",
      imageUrl: "/images/BlogSphere.png",
    },
    {
      title: "ExpenseMate",
      demoUrl: "https://expensemate-fe.netlify.app",
      frontendUrl: "https://github.com/athishsb/expensemate-frontend",
      backendUrl: "https://github.com/athishsb/expensemate-backend",
      imageUrl: "/images/ExpenseMate.png",
    },
  ];

  const [isInView, setIsInView] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={projectsRef}
      className="py-0 my-0"
      style={{
        backgroundColor: "#121826",
        padding: "0",
        margin: "0",
        minHeight: "100vh",
      }}
    >
      <div className="container pb-4 py-5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-info fw-bold"
          style={{ fontSize: "2rem" }}
        >
          My Projects
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-white mb-4"
      >
        <h5 className="mb-2 text-warning">
          Admin Credentials for BurgerHub and BlogSphere:
        </h5>
        {/* Updated color */}
        <p>
          Email: admin@gmail.com <br />
          {/* Updated color */}
          Password: 123456
        </p>
        {/* Updated color */}
      </motion.div>

      <div
        className="d-flex flex-wrap justify-content-center gap-4"
        style={{
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 * index }}
          >
            <ProjectCard
              title={project.title}
              demoUrl={project.demoUrl}
              frontendUrl={project.frontendUrl}
              backendUrl={project.backendUrl}
              imageUrl={project.imageUrl}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
