import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/Rishi Resume _mar.pdf"; // ✅ YOUR FILE
import Particle from "../Particle";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Download Button */}
        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        {/* Resume Preview */}
        <Row className="resume-container">
  <div className="resume-wrapper">
    <Document file={pdf}>
      <Page
        pageNumber={1}
        scale={width > 786 ? 1.4 : 0.6}
        renderTextLayer={false}
        renderAnnotationLayer={false}
      />
      <Page
        pageNumber={2}
        scale={width > 786 ? 1.4 : 0.6}
        renderTextLayer={false}
        renderAnnotationLayer={false}
      />
    </Document>
  </div>
</Row>

        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
