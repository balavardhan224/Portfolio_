import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, my name is <span className="purple">Balavardhan Reddy Malyala</span>. I am a software developer who recently completed my Master of Science in Applied Computer Science at <span className="purple">Southeast Missouri State University, USA</span>.
            <br />
            I am currently working as a Software Developer at <span className="purple">S&P Global, USA</span>.
            <br />
            Outside of coding, here are some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Squash
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditation
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Day by day, you’re growing stronger—keep pushing further."
          </p>
          <footer className="blockquote-footer">Bala</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
