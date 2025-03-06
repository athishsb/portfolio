import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

const ProjectCard = ({
  title,
  demoUrl,
  frontendUrl,
  backendUrl,
  imageUrl,
  description,
  techStack,
  features,
  adminCredentials,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
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
            variant="info"
            className="m-1 px-4 py-2"
            onClick={() => setShowModal(true)}
          >
            View Details
          </Button>
          <Button
            onClick={() =>
              window.open(demoUrl, "_blank", "noopener noreferrer")
            }
            variant="primary"
            className="m-1"
          >
            Demo
          </Button>
        </Card.Body>
      </Card>

      {/* Styled Modal for Project Details */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        style={{
          color: "#fff",
          backgroundColor: "rgba(26, 38, 51, 0.9)",
        }}
      >
        <Modal.Header
          style={{
            backgroundColor: "#1a2633",
            borderBottom: "1px solid #444",
            color: "#0dcaf0",
            textAlign: "center",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Modal.Title>{title}</Modal.Title>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowModal(false)}
            style={{
              filter: "invert(1)",
              position: "absolute",
              right: "1rem",
            }}
          ></button>
        </Modal.Header>

        <Modal.Body
          style={{
            backgroundColor: "#17202A",
            color: "#ddd",
            padding: "1.5rem",
          }}
        >
          <p>
            <strong style={{ color: "#0dcaf0" }}>Description:</strong>{" "}
            <span style={{ color: "#bbb" }}>{description}</span>
          </p>
          <p>
            <strong style={{ color: "#0dcaf0" }}>Tech Stack:</strong>{" "}
            <span style={{ color: "#bbb" }}>{techStack}</span>
          </p>

          {/* Features Section */}
          {features && (
            <>
              <hr style={{ borderColor: "#444", margin: "1.5rem 0" }} />
              <p
                style={{
                  color: "#0dcaf0",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                Features:
              </p>

              {Array.isArray(features) ? (
                <ul
                  style={{
                    paddingLeft: "1.5rem",
                    marginBottom: "1rem",
                    color: "#bbb",
                    fontSize: "1rem",
                  }}
                >
                  {features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: "5px" }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              ) : (
                Object.keys(features).map((key) => (
                  <div key={key} style={{ marginBottom: "1rem" }}>
                    <p
                      style={{
                        color: "#0dcaf0",
                        fontWeight: "bold",
                        marginTop: "1rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)} Features:
                    </p>
                    <ul
                      style={{
                        paddingLeft: "1.5rem",
                        color: "#bbb",
                        fontSize: "1rem",
                      }}
                    >
                      {features[key].map((feature, index) => (
                        <li key={index} style={{ marginBottom: "5px" }}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </>
          )}

          {/* Admin Credentials Section */}
          {adminCredentials && (
            <>
              <hr style={{ borderColor: "#444" }} />
              <p>
                <strong style={{ color: "#0dcaf0" }}>Admin Credentials:</strong>
              </p>
              <p>
                <strong style={{ color: "#f39c12" }}>Email:</strong>{" "}
                <span style={{ color: "#bbb" }}>{adminCredentials.email}</span>
              </p>
              <p>
                <strong style={{ color: "#f39c12" }}>Password:</strong>{" "}
                <span style={{ color: "#bbb" }}>
                  {adminCredentials.password}
                </span>
              </p>
            </>
          )}
        </Modal.Body>

        <Modal.Footer
          style={{
            backgroundColor: "#1a2633",
            borderTop: "1px solid #444",
          }}
        >
          <Button
            onClick={() =>
              window.open(frontendUrl, "_blank", "noopener noreferrer")
            }
            variant="success"
            style={{
              backgroundColor: "#28a745",
              border: "none",
              padding: "0.5rem 1rem",
            }}
          >
            Frontend Code
          </Button>
          <Button
            onClick={() =>
              window.open(backendUrl, "_blank", "noopener noreferrer")
            }
            variant="danger"
            style={{
              backgroundColor: "#dc3545",
              border: "none",
              padding: "0.5rem 1rem",
            }}
          >
            Backend Code
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard;
