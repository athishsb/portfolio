import { FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  const containerStyle = {
    background: "#121826",
    color: "#ffffff",
  };

  const titleStyle = {
    fontSize: "2rem",
  };

  const timelineLineColor = "#00bcd4";

  const contentStyle = {
    backgroundColor: "#1c2331",
    color: "#ffffff",
    border: "1px solid #00bcd4",
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(0, 188, 212, 0.3)",
  };

  const contentArrowStyle = { borderRight: "7px solid #00bcd4" };

  const dateStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#ff9800",
  };

  const headingStyle = {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#ffffff",
  };

  const subHeadingStyle = {
    fontSize: "1.1rem",
    color: "#ff9800",
  };

  const detailsStyle = {
    fontSize: "1rem",
    color: "#b0bec5",
  };

  return (
    <div className="text-center py-5" style={containerStyle}>
      <h1 className="mb-4 fw-bold text-info" style={titleStyle}>
        Education Timeline
      </h1>
      <VerticalTimeline lineColor={timelineLineColor}>
        {[
          {
            date: "2023 - 2025",
            title: "Master in Computer Science",
            institution: "PSG College of Arts and Science, Coimbatore",
            details:
              "Pursuing MSc with a current CGPA of 8.2 (up to 3rd semester).",
          },
          {
            date: "2020 - 2023",
            title: "Bachelor in Computer Science",
            institution:
              "Sri Ramakrishna Mission Vidyalaya College of Arts and Science, Coimbatore",
            details: "Graduated with a CGPA of 8.7.",
          },
          {
            date: "2019 - 2020",
            title: "Higher Secondary (HSC)",
            institution: "Jairam Higher Secondary School, Salem",
            details: "Completed with 83.3%.",
          },
          {
            date: "2017 - 2018",
            title: "Secondary School (SSLC)",
            institution: "Jairam Public School, Salem",
            details: "Completed with 84.2%.",
          },
        ].map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date={<span style={dateStyle}>{edu.date}</span>}
            iconStyle={{ background: "#00bcd4", color: "#121826" }}
            icon={<FaGraduationCap size={20} />}
          >
            <h3 style={headingStyle}>{edu.title}</h3>
            <h4 style={subHeadingStyle}>{edu.institution}</h4>
            <p style={detailsStyle}>{edu.details}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
