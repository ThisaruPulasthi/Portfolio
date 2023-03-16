import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      {<Container>
        <Row>
          <Col md={8} className="home-about-description1">
            <h1 style={{color:"white", fontSize: "2em",marginTop:"-5em"}}>
              LET ME  <span className="purple">  </span>  INTRODUCE  MYSELF
            </h1>
            <p className="home-about-body">
            I am an undergraduate of University of Sri Jayewardenepura, Sri Lanka and I am following an IT degree.
              <br />
              <br />I fell in love with graphic designing and UI/UX designing so I think I have a good knowledge about designing.
I am using my talent of designing to make flyers whenever possible.
              <i>
                <b className="purple5">I am interested with coding using languages like Python, C+ C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              In my free times, I love to relax my mind with music and books. &nbsp;
              {/* <i>
                <b className="purple5">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple5">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i> */}
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple5">Node.js</b> and
              <i>
                <b className="purple5">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple5"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt> */}
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>}
    </Container>
  );
}
export default Home2;
