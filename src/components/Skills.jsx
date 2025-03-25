import { Card } from "react-bootstrap";
import { DiJavascript } from "react-icons/di";
import {
  FaCss3Alt,
  FaNode,
  FaReact,
  FaGithub,
  FaWindows,
  FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiFirebase,
  SiCloudinary,
  SiNetlify,
  SiRender,
  SiPostman,
  SiRedux,
  SiMongoose,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const commonCardStyle = {
  width: "6rem",
  backgroundColor: "#1c2331",
  border: "1px solid #00bcd4",
  color: "white",
  borderRadius: "10px",
  boxShadow: "0px 4px 15px rgba(0, 188, 212, 0.3)",
};

const commonTextStyle = {
  fontSize: "0.9rem",
};

const skillsData = [
  {
    category: "Frontend Technologies",
    skills: [
      { name: "HTML", icon: <DiJavascript size={30} color="#E44D26" /> },
      { name: "CSS", icon: <FaCss3Alt size={30} color="#1572B6" /> },
      { name: "React", icon: <FaReact size={30} color="#61DBFB" /> },
      { name: "Redux", icon: <SiRedux size={30} color="#764ABC" /> },
    ],
  },
  {
    category: "Cloud Services",
    skills: [
      { name: "Netlify", icon: <SiNetlify size={30} color="#00C7B7" /> },
      { name: "Render", icon: <SiRender size={30} color="#161B22" /> },
      { name: "Cloudinary", icon: <SiCloudinary size={30} color="#4479A1" /> },
      { name: "Firebase", icon: <SiFirebase size={30} color="#F7A800" /> },
    ],
  },
  {
    category: "Backend Technologies",
    skills: [
      { name: "Node.js", icon: <FaNode size={30} color="#8CC84B" /> },
      { name: "Express", icon: <SiExpress size={30} color="#000000" /> },
      { name: "Mongoose", icon: <SiMongoose size={30} color="#880000" /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <SiGit size={30} color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub size={30} color="#181717" /> },
      { name: "Postman", icon: <SiPostman size={30} color="#FF6C37" /> },
      { name: "VS Code", icon: <VscVscode size={30} color="#0078D4" /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={30} color="#47A248" /> },
      { name: "MySQL", icon: <SiMysql size={30} color="#4479A1" /> },
    ],
  },
  {
    category: "CSS Frameworks",
    skills: [
      {
        name: "Bootstrap",
        icon: <FaReact size={30} color="#563D7C" />,
      },
      {
        name: "Tailwind",
        icon: <RiTailwindCssFill size={30} color="#38BDF8" />,
      },
    ],
  },
  {
    category: "Operating System",
    skills: [
      { name: "Windows", icon: <FaWindows size={30} color="#0078D4" /> },
    ],
  },
  {
    category: "Scripting Language",
    skills: [
      {
        name: "JavaScript",
        icon: <TbBrandJavascript size={30} color="#F7DF1E" />,
      },
      { name: "Python", icon: <FaPython size={30} color="#306998" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      style={{ background: "#121826", minHeight: "100vh", color: "#ffffff" }}
    >
      <div
        className="text-center pt-4"
        style={{ background: "#121826", color: "#ffffff" }}
      >
        <h1 className="mb-4 fw-bold text-info" style={{ fontSize: "2rem" }}>
          Skills
        </h1>
        <div className="container">
          <div className="row">
            {/* Frontend, Cloud, and Tools in the same line */}
            <div className="col-md-4">
              <div className="mb-4">
                <h3 className="text-warning">Frontend Technologies</h3>
                <div className="d-flex flex-wrap justify-content-center mt-3">
                  {skillsData[0].skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        className="m-2 p-3 pb-1 d-flex flex-column align-items-center"
                        style={commonCardStyle}
                      >
                        {skill.icon}
                        <p className="mt-2" style={commonTextStyle}>
                          {skill.name}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-4">
                <h3 className="text-warning">Cloud Services</h3>
                <div className="d-flex flex-wrap justify-content-center mt-3">
                  {skillsData[1].skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        className="m-2 p-3 pb-1 d-flex flex-column align-items-center"
                        style={commonCardStyle}
                      >
                        {skill.icon}
                        <p className="mt-2" style={commonTextStyle}>
                          {skill.name}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-4">
                <h3 className="text-warning">Tools</h3>
                <div className="d-flex flex-wrap justify-content-center mt-3">
                  {skillsData[3].skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        className="m-2 p-3 pb-1 d-flex flex-column align-items-center"
                        style={commonCardStyle}
                      >
                        {skill.icon}
                        <p className="mt-2" style={commonTextStyle}>
                          {skill.name}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* New Row for Scripting Language, Databases, and Backend */}
          <div className="row">
            <div className="col-md-4">
              <div className="mb-4">
                <h3 className="text-warning">Backend Technologies</h3>
                <div className="d-flex flex-wrap justify-content-center mt-3">
                  {skillsData[2].skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        className="m-2 p-3 pb-1 d-flex flex-column align-items-center"
                        style={commonCardStyle}
                      >
                        {skill.icon}
                        <p className="mt-2" style={commonTextStyle}>
                          {skill.name}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-4">
                <h3 className="text-warning">Databases</h3>
                <div className="d-flex flex-wrap justify-content-center mt-3">
                  {skillsData[4].skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        className="m-2 p-3 pb-1 d-flex flex-column align-items-center"
                        style={commonCardStyle}
                      >
                        {skill.icon}
                        <p className="mt-2" style={commonTextStyle}>
                          {skill.name}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-4">
                <h3 className="text-warning">Scripting Language</h3>
                <div className="d-flex flex-wrap justify-content-center mt-3">
                  {skillsData[7].skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        className="m-2 p-3 pb-1 d-flex flex-column align-items-center"
                        style={commonCardStyle}
                      >
                        {skill.icon}
                        <p className="mt-2" style={commonTextStyle}>
                          {skill.name}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Final Row for Operating System and CSS Frameworks */}
          <div className="row">
            <div className="col-md-4">
              <div className="mb-4">
                <h3 className="text-warning"> CSS Frameworks</h3>
                <div className="d-flex flex-wrap justify-content-center mt-3">
                  {skillsData[5].skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        className="m-2 p-3 pb-1 d-flex flex-column align-items-center"
                        style={commonCardStyle}
                      >
                        {skill.icon}
                        <p className="mt-2" style={commonTextStyle}>
                          {skill.name}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-4">
                <h3 className="text-warning">Operating System</h3>
                <div className="d-flex flex-wrap justify-content-center mt-3">
                  {skillsData[6].skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        className="m-2 p-3 pb-1 d-flex flex-column align-items-center"
                        style={commonCardStyle}
                      >
                        {skill.icon}
                        <p className="mt-2" style={commonTextStyle}>
                          {skill.name}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
