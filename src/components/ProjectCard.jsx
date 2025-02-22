import { Button, Card } from "react-bootstrap";
import { useState } from "react";

const ProjectCard = ({ title, demoUrl, frontendUrl, backendUrl, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      style={{
        width: "23rem",
        border: "none",
        backgroundColor: "#1a2633",
        marginBottom: "2rem",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "1.2rem",
          fontWeight: "bold",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }}
      >
        {title}
      </div>
      <Card.Img
        src={imageUrl}
        alt={title}
        variant="top"
        style={{
          opacity: isHovered ? 0.5 : 1,
          transition: "opacity 0.3s ease",
        }}
      />
      <Card.Body className="text-center">
        <Button
          onClick={() => window.open(demoUrl, "_blank", "noopener noreferrer")}
          variant="primary"
          className="m-1 px-4 py-2"
          style={{
            backgroundColor: "#007bff",
            border: "1px solid #007bff",
            color: "white",
            fontWeight: "500",
            borderRadius: "4px",
            boxShadow: "0 4px 8px rgba(0, 123, 255, 0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Demo
        </Button>
        <Button
          onClick={() =>
            window.open(frontendUrl, "_blank", "noopener noreferrer")
          }
          variant="outline-light"
          className="m-1 px-4 py-2"
          style={{
            backgroundColor: "transparent",
            color: "#4cd137",
            border: "1px solid #4cd137",
            fontWeight: "500",
            borderRadius: "4px",
            boxShadow: "0 4px 8px rgba(76, 209, 55, 0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#ffffff")}
          onMouseOut={(e) => (e.target.style.color = "#4cd137")}
        >
          Frontend Code
        </Button>
        <Button
          onClick={() =>
            window.open(backendUrl, "_blank", "noopener noreferrer")
          }
          variant="outline-light"
          className="m-1 px-4 py-2"
          style={{
            backgroundColor: "transparent",
            color: "#e84118",
            border: "1px solid #e84118",
            fontWeight: "500",
            borderRadius: "4px",
            boxShadow: "0 4px 8px rgba(232, 65, 24, 0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#ffffff")}
          onMouseOut={(e) => (e.target.style.color = "#e84118")}
        >
          Backend Code
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
