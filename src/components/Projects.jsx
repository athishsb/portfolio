import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      title: "TaskManager",
      demoUrl: "https://taskmanager-fe.netlify.app",
      frontendUrl: "https://github.com/athishsb/taskmanager-frontend",
      backendUrl: "https://github.com/athishsb/taskmanager-backend",
      imageUrl: "/images/TaskManager.png",
      description:
        "A task management application designed to help users efficiently organize and track tasks.",
      techStack: "MERN, Redux, React Router, Axios, React-Toastify",
      features: [
        "Secure authentication (sign up, login, password reset)",
        "Task categorization (To-Do, In Progress, Completed) with status updates",
        "Search, filter, and pagination for better task management",
        "Real-time toast notifications for important user actions",
      ],
    },
    {
      title: "BurgerHub",
      demoUrl: "https://burgerhub-fe.netlify.app",
      frontendUrl: "https://github.com/athishsb/burgerhub-frontend",
      backendUrl: "https://github.com/athishsb/burgerhub-backend",
      imageUrl: "/images/BurgerHub.png",
      description:
        "A full-stack food ordering platform where users can browse, add items to the cart, and place orders.",
      techStack: "MERN, Redux Toolkit, React Bootstrap, Cloudinary, Razorpay",
      features: {
        user: [
          "Secure authentication, cart management, order placement, and order history",
          "Password recovery via email",
        ],
        admin: [
          "Add, edit, and delete products with Cloudinary image uploads",
          "Manage users, orders, and update order status",
        ],
        additional: [
          "Secure online payments via Razorpay with real-time payment status updates",
          "Redux Toolkit for optimized state management",
          "Protected routes ensuring secure access to admin functionalities",
        ],
      },
      adminCredentials: { email: "admin@gmail.com", password: "123456" },
    },
    {
      title: "ChatNow",
      demoUrl: "https://chatnow-fe.netlify.app",
      frontendUrl: "https://github.com/athishsb/chatnow-frontend",
      backendUrl: "https://github.com/athishsb/chatnow-backend",
      imageUrl: "/images/ChatNow.png",
      description:
        "A real-time one-to-one chat application with instant messaging, authentication, and notifications.",
      techStack: "MERN, Redux Toolkit, Socket.io, Cloudinary",
      features: [
        "JWT authentication ensures secure login and session management",
        "Real-time messaging using Socket.io with smooth conversation flow",
        "Unread message count and notifications for new messages",
        "User online status tracking with real-time updates",
        "Profile picture upload via Cloudinary for better user experience",
        "Emoji support and image sharing",
        "Smooth navigation with React Router",
      ],
    },
    {
      title: "BlogSphere",
      demoUrl: "https://blogsphere-fe.netlify.app",
      frontendUrl: "https://github.com/athishsb/blogsphere-frontend",
      backendUrl: "https://github.com/athishsb/blogsphere-backend",
      imageUrl: "/images/BlogSphere.png",
      description:
        "A modern blogging platform where users can explore and engage with blog posts.",
      techStack: "MERN, Redux Toolkit, Tailwind CSS, Firebase, Cloudinary",
      features: {
        user: [
          "Register/Login with JWT & Firebase OAuth (Google authentication)",
          "Update profile details and manage account settings",
          "Search blog posts by category and keywords",
          "Like & Comment on blog posts with an 'edited' label for updated comments",
        ],
        admin: [
          "Full CRUD operations for managing posts, users, and comments",
          "Dashboard insights (Total Users, Posts, Comments)",
          "Delete any comment from any post",
        ],
        additional: [
          "Dark mode/light mode toggle for a personalized experience",
          "Toast notifications for instant feedback",
        ],
      },
      adminCredentials: {
        email: "admin@gmail.com",
        password: "123456",
      },
    },
    {
      title: "ExpenseMate",
      demoUrl: "https://expensemate-fe.netlify.app",
      frontendUrl: "https://github.com/athishsb/expensemate-frontend",
      backendUrl: "https://github.com/athishsb/expensemate-backend",
      imageUrl: "/images/ExpenseMate.png",
      description:
        "An expense tracking application to help users monitor and manage their finances.",
      techStack: "MERN, Redux Toolkit, React Query, Chart.js, Tailwind CSS",
      features: [
        "User authentication (Register, Login, Logout, Profile Updates)",
        "Categorized expense tracking with detailed transaction logs",
        "Data visualization using Charts.js for financial insights",
        "CRUD operations for transactions & categories",
        "Optimized API calls with React Query for better performance",
        "Toast notifications for success/error alerts",
        "Fully responsive UI with Tailwind CSS for a smooth user experience",
      ],
    },
  ];

  return (
    <div
      className="py-0 my-0"
      style={{ backgroundColor: "#121826", minHeight: "100vh" }}
    >
      <div className="container pb-4 py-5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-info fw-bold"
          style={{ fontSize: "2rem" }}
        >
          My Projects
        </motion.h1>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-4 px-3">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
