import { Card, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

const Certificates = () => {
  const [dividerWidth, setDividerWidth] = useState("0%");

  useEffect(() => {
    setTimeout(() => {
      setDividerWidth("100%");
    }, 500);
  }, []);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-start"
      style={{
        margin: "0",
        padding: "0",
        height: "100vh",
        backgroundColor: "#121826",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: "2rem 1rem",
        }}
      >
        <h1
          className="text-center text-info fw-bold mb-4"
          style={{ fontSize: "2rem" }}
        >
          Certifications
        </h1>
        <Card
          style={{
            backgroundColor: "#1c2331",
            border: "none",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0px 4px 15px rgba(0, 188, 212, 0.3)",
          }}
        >
          <ListGroup variant="flush">
            {[
              {
                title: "MERN Full Stack Development – GUVI",
                link: "https://drive.google.com/file/d/1fTjtGZ0YCDuswxipIr-ZVLaplGtysSJe/view",
              },
              {
                title:
                  "MERN Stack: All You Need to Know with Practical Project – Udemy",
                link: "https://drive.google.com/file/d/19z_nRX9LW5WVfw_qbyovU23hPakkJCFr/view",
              },
              {
                title: "Software Conceptual Design – NPTEL (SWAYAM)",
                link: "https://drive.google.com/file/d/14y7SYQVNCD7ZkSDofjYxuOOZp8x59MZB/view",
              },
            ].map((certificate, index) => (
              <ListGroup.Item
                key={index}
                style={{
                  backgroundColor: "#1c2331",
                  border: "none",
                  fontSize: "1.1rem",
                  padding: "1rem 0",
                }}
              >
                <a
                  className="text-warning"
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`View ${certificate.title} Certificate`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.className = "text-primary")}
                  onMouseLeave={(e) => (e.target.className = "text-warning")}
                >
                  {certificate.title}
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>

        {/* Animated Divider Line */}
        <div
          style={{
            height: "1px",
            width: dividerWidth,
            backgroundColor: "#00bcd4",
            marginTop: "2rem",
            transition: "width 1s ease-in-out",
          }}
        />

        {/* Closing Message */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <p style={{ color: "#ffffff", fontSize: "1.1rem" }}>
            Thank you for viewing my portfolio. Feel free to reach out for
            collaborations or inquiries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
