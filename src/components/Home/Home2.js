import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
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
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ-MOI DE ME <span className="purple">PRÉSENTER</span>
              {/* LET ME <span className="purple"> INTRODUCE </span> MYSELF */}
            </h1>
            <p className="home-about-body">
            la programmation coule dans mes veines et j'ai au moins réalisé quelque chose, je pense… 🤷‍♂️
              <br />
              <br />Je suis fluide avec les langages classiques comme
              <i>
                <b className="purple"> Javascript, PHP and C++. </b>
              </i>
              <br />
              <br />
              je m'intéresse à la création, l'analyse et la production du contenu &nbsp;
              <b className="purple">web et mobile</b> 
              <br />
              <br />
              Dans la mesure du possible, j'applique également ma passion pour le développement
               avec <b className="purple">Node.js</b> et <b className="purple">les frameworks Javascript modernes</b> tel que <b className="purple">React.js</b>
               <br />
               <br />
                 Ainsi que <b className="purple">React native, Android et IOS</b> vu mon cursus académique
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid w-75" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
            N'hésitez pas à me <span className="purple">contacter</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aliobba"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/aliobba"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://tn.linkedin.com/in/ali-obba-00132aba"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aliobba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
