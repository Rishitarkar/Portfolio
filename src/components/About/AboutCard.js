import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Rishi Tarkar</span>{" "}
            from <span className="purple">Uttar Pradesh, India</span>.
            <br />
            I’m currently a{" "}
            <span className="purple">final-year B.Tech Computer Science student</span>{" "}
            at <span className="purple">GLA University, Mathura</span>.
            <br />
            I have a strong interest in{" "}
            <span className="purple">Java development, Data Structures</span>, and{" "}
            <span className="purple">Full Stack Web Development</span>.
            <br />
            <br />
            I enjoy building real-world applications and solving practical problems
            using technology.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Web Applications 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography & Editing 📸
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and never stop improving."
          </p>
          <footer className="blockquote-footer">Rishi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;