import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGithub,
  SiJira,
  SiIntellijidea,
  SiJupyter,
} from "react-icons/si";
import { DiGit } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea /> 
      </Col>
    </Row>
  );
}

export default Toolstack;
