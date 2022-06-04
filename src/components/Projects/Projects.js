import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bigbasket from "../../Assets/Projects/bigbasket.png";
import indianmart from "../../Assets/Projects/indianmart.png";
import sephora from "../../Assets/Projects/sephora.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigbasket}
              isBlog={false}
              title="Bigbasket"
              description="Big Basket is one of the largest online grocery super market in India. Tech stack and tools we have used to clone this website are HTML, CSS, JavaScript, Bootstrap and Swiper JS"
              gitLink="https://github.com/callmeabhi1997/Big-Basket"
              deployLink="https://bigbasket-clone26.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indianmart}
              isBlog={false}
              title="Indiamart-Clone"
              description="IndiaMART is India’s largest online B2B marketplace, connecting buyers with suppliers. Used tech stack and tools are HTML, CSS, JavaScript, React, Redux, Bootstrap and Material UI’."
              gitLink="https://github.com/callmeabhi1997/Indiamart-Clone"
              deployLink="https://india-mart-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sephora}
              isBlog={false}
              title="Sephora Project"
              description="Sephora is a French multinational retailer of personal care and beauty products. Tech stack and tools we have used to clone this website are HTML, CSS, JavaScript"
              gitLink="https://github.com/callmeabhi1997/SephoraProject"
              deployLink="https://suspicious-mccarthy-90cb20.netlify.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
