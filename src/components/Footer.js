import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>

        {/* Left */}
        <Col md="4" className="footer-copywright">
          <h3>Designed & Developed by Rishi Tarkar</h3>
        </Col>

        {/* Center */}
        <Col md="4" className="footer-copywright">
          <h3>© {year} Rishi Tarkar</h3>
        </Col>

        {/* Right (Social Links) */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/Rishi"   // 🔴 replace
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/Rishi"   // 🔴 replace
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            {/* Instagram (optional) */}
            <li className="social-icons">
              <a
                href="https://instagram.com/yourusername"   // optional
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>

          </ul>
        </Col>

      </Row>
    </Container>
  );
}

export default Footer;