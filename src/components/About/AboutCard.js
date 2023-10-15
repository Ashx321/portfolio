import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashish Sharma </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br /> I am a Third Year student pursuing B.Tech.
            in CSE from VIT Chennai.
            <br />
            Additionally, I am enthusiastic about Ethical Hacking.
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Partying
            </li>
            <li className="about-activity">
              <ImPointRight /> Muisic
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
