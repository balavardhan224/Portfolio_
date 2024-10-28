import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aws from "../../Assets/Projects/aws.png";
import iare from "../../Assets/Projects/iare.png";
import java from "../../Assets/Projects/java.png";
import p from "../../Assets/Projects/p.png";
import parking from "../../Assets/Projects/parking.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a my projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={java}
              isBlog={false}
              title="Java-based Employee Management System"
              description="Developed in IntelliJ with MySQL, this system features secure login, a dashboard, and CRUD operations for managing employee records, streamlining HR tasks."
              ghLink="https://github.com/balavardhan224/Java-project-Employee-Management"
              //demoLink="https://medium-app-ashy.vercel.app/signup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p}
              isBlog={false}
              title="Portfolio Webpage"
              description="Built a responsive React site to showcase verified projects, education, and skill ratings with custom styling for user engagement.."
              ghLink="https://github.com/balavardhan224/Portfolio_"
              //demoLink="https://medium-app-ashy.vercel.app/signup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aws}
              isBlog={false}
              title="AWS Project"
              description="Hosted a scalable webpage on AWS, using EC2, S3, and RDS for high availability and efficient storage."
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parking}
              isBlog={false}
              title="Parking App"
              description="Created a Flutter app with Firebase for booking parking slots, integrating Google Maps for real-time tracking."
              ghLink="https://github.com/balavardhan224/ParkPlace-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iare}
              isBlog={false}
              title="IARE Fest App"
              description="eveloped of a college festival app using Flutter, Dart, and Firebase, facilitating registration and achieving
              over 1,000 downloads within three days of launch on Google Play."
              ghLink="https://github.com/balavardhan224/IARE-Fest"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
