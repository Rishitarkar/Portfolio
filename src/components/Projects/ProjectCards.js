import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view shadow-lg">
      
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="project"
        style={{ height: "200px", objectFit: "cover" }}
      />

      <Card.Body>
        
        <Card.Title style={{ fontWeight: "bold" }}>
          {props.title}
        </Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Tech Stack */}
        {props.tech && (
          <p style={{ fontSize: "14px", color: "#aaa" }}>
            <b>Tech:</b> {props.tech}
          </p>
        )}

        {/* Buttons */}
        <div style={{ marginTop: "10px" }}>
          
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
          >
            <BsGithub /> &nbsp; GitHub
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="outline-info"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Live Demo
            </Button>
          )}

        </div>

      </Card.Body>
    </Card>
  );
}

export default ProjectCards;