import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/four.png";
import emotion from "../../Assets/Projects/01.png";
import editor from "../../Assets/Projects/two.png";
import chatify from "../../Assets/Projects/one.png";
import suicide from "../../Assets/Projects/five.png";
import bitsOfCode from "../../Assets/Projects/tree.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent works
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hotel Management Project"
              description="he project, Hotel Management System is a web-based application that allows the hotel manager to handle all hotel activities online. Interactive GUI and the ability to manage various hotel bookings and rooms make this system very flexible and convenient. "
              ghLink="https://github.com/ThisaruPulasthi/Hotel-Management-system.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ATM project"
              description="The ATM System is the project which is used to access their bank accounts in order to make cash withdrawals."
              ghLink="https://github.com/ThisaruPulasthi/ATM_system.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Travel Management App"
              description="Travel Management Software empowers organizations to streamline the process of arranging travels and managing all travel-related expenses while complying with corporate travel policies. The software allows employees to book, manage and track trips without the intervention of any specialist agents. These trips can be approved and reimbursed by the administrators through an automated approval workflow. Organizations use software to create travel data reports as well as to gain insights to control and optimize their travel spend. "
              ghLink="https://github.com/ThisaruPulasthi/Trvel_web.git"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Assest Management App"
              description="asset management software (AMS) to optimize asset efficiency while minimizing the cost of lost or underutilized assets. Asset management software automatically collects all assets data and compiles reports the business can use to optimize their use. A well-implemented asset management software system provides the business with in-depth visibility into every asset inside its environment.."
              ghLink="https://github.com/FHSS-USJ/end-semester-exam-Group-1.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Hotel Booking App"
              description="A hotel reservation system is software used in the hotel industry to manage room inventory, rates, and bookings. Also called a central reservations system (CRS), it may be housed within the hotel's property management system (PMS) or may be standalone software connected to the PMS."
              ghLink="https://github.com/ThisaruPulasthi/hotel_booking_system"
              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
