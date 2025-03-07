import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiOutlineDiscord } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2 = () => (
  <Container fluid className="home-about-section" id="about">
    <Container>
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            With 3+ years of experience in designing and developing scalable, high-performance software applications using Java Full Stack technologies and modern UI frameworks, I’m passionate about creating dynamic, responsive web apps and innovative products. 
            <br />
            <br />
            Expertise in <b className="purple">Java/J2EE</b>, including technologies like <b className="purple">JDBC</b>, <b className="purple">JSON</b>, <b className="purple">RESTful APIs</b>, <b className="purple">Spring Boot</b>, and more.
            <br />
            <br />
            Skilled in frontend technologies like <b className="purple">React.js</b>, <b className="purple">AngularJS</b>, <b className="purple">HTML</b>, <b className="purple">CSS</b>, and <b className="purple">Bootstrap</b>, ensuring seamless user experiences.
            <br />
            <br />
            Proficient in designing and integrating RESTful APIs, implementing CI/CD pipelines with <b className="purple">Docker</b> and <b className="purple">Kubernetes</b>, and handling databases like <b className="purple">MySQL</b> and <b className="purple">MongoDB</b>.
          </p>
        </Col>
        <Col md={4} className="myAvtar">
          <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>Feel free to <span className="purple">connect</span> with me</p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a href="https://github.com/balavardhan224" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://discord.gg/frppnjwr" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                <AiOutlineDiscord />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/balavardhan-reddy-malyala-99261817b/" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.instagram.com/balavardhan__rdy/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Home2;
