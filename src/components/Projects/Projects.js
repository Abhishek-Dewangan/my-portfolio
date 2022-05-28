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
              description="bigbasket.com allows you to walk away from the drudgery of grocery shopping and welcome an easy relaxed way of browsing and shopping for groceries. Discover new products and shop for all your food and grocery needs from the comfort of your home or office. No more getting stuck in traffic jams, paying for parking , standing in long queues and carrying heavy bags – get everything you need, when you need, right at your doorstep. Food shopping online is now easy as every product on your monthly shopping list, is now available online at bigbasket.com, India’s best online grocery store!"
              link="https://github.com/callmeabhi1997/Big-Basket"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indianmart}
              isBlog={false}
              title="Indiamart-Clone"
              description="IndiaMART is India’s largest online marketplace connecting buyers and suppliers. The online channel focuses on providing a platform to SMEs, large enterprises as well as individuals. Founded in 1996, the company’s mission is ‘to make doing business easy’."
              link="https://github.com/callmeabhi1997/Indiamart-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sephora}
              isBlog={false}
              title="Sephora Project"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/callmeabhi1997/SephoraProject"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
