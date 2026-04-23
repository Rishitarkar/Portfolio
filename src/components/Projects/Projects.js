import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

// You can replace these with your own images later
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
import emotion from "../../Assets/Projects/emotion.png";
import leaf from "../../Assets/Projects/leaf.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the projects I have built.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Chat Application */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Chat Application"
              description="Built a real-time chat application with user authentication, private messaging, and message storage. Designed to handle real-time communication efficiently."
              tech="JavaScript, Node.js, Express.js, MongoDB"
              ghLink="https://github.com/your-repo"   // 🔴 replace
            />
          </Col>

          {/* Weather App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Weather Web Application"
              description="Developed a real-time weather application using OpenWeather API to display temperature, humidity, and wind speed dynamically."
              tech="HTML, CSS, JavaScript, API"
              ghLink="https://github.com/your-repo"   // 🔴 replace
            />
          </Col>

          {/* Irrigation System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Automatic Irrigation System"
              description="Designed a microcontroller-based irrigation system using soil moisture sensors to automate water supply, reducing water usage and improving efficiency."
              tech="Embedded Systems, Sensors"
              ghLink="https://github.com/your-repo"   // 🔴 replace
            />
          </Col>

          {/* Solar Tracker */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Sun Tracking Solar System"
              description="Developed a dual-axis solar tracking system using sensors and motors to optimize panel alignment and maximize energy output."
              tech="Embedded Systems, IoT"
              ghLink="https://github.com/your-repo"   // 🔴 replace
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;