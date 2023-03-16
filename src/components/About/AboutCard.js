import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <span className="purple"> Hi Everyone, I am Thisaru Pulasthi 
            from  Colombo, Sri Lanka.
            <br />I am an undergraduate of University of Sri Jayewardenepura
            <br />Sri Lanka and I am following a IT degree. 
            <br />nterested in graphic designing and UI/UX designing
            In my free times, love to relax my mind with music. </span>
          </p>
          <h1 style={{fontFamily:"monospace", fontWeight:"bold", fontSize: "2.1em", paddingBottom: "20px",color:"black" }}>
              contact details
            </h1>
            <p style={{ textAlign: "justify" }}>
          <span className="purple01"> Hi Everyone, I am Thisaru Pulasthi 
            from  Colombo, Sri Lanka.
            <br />D.H.B.Thisaru Pulasthi
            <br />56/4A,9th Lane,Ethull Kotte,Kotte. 
            <br />Sri Lanka.
            <br />thisarupulasthi09@gmail.com
             </span>
          </p>
        
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
