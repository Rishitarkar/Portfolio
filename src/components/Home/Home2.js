import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          
          <Col md={8} className="home-about-description">
            
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I am a final-year{" "}
              <b className="purple">B.Tech Computer Science</b> student at{" "}
              <b className="purple">GLA University, Mathura</b>.
              <br />
              <br />
              I have a strong foundation in
              <b className="purple">
                {" "}Java, Data Structures and Algorithms,{" "}
              </b>
              and I am actively developing my skills in{" "}
              <b className="purple">Full Stack Web Development</b>.
              <br />
              <br />
              I am proficient in
              <i>
                <b className="purple">
                  {" "}Java, C, Python, HTML, CSS, JavaScript{" "}
                </b>
              </i>
              and have hands-on experience with{" "}
              <b className="purple">Node.js, Express.js, and MongoDB</b>.
              <br />
              <br />
              My key interests include building
              <i>
                <b className="purple">
                  {" "}Web Applications, Backend Systems,{" "}
                </b>
              </i>
              and solving real-world problems using technology.
              <br />
              <br />
              I have developed projects like
              <b className="purple">
                {" "}Chat Applications, Weather Apps, and IoT-based Systems{" "}
              </b>
              which reflect my practical learning approach.
            </p>

          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Home2;