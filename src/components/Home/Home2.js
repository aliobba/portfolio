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
              Yo, la prog, c'est mon vibe, j'ai des prouesses à la pelle, tu
              peux me croire, ouais... 🤷‍♂️
              <br />
              <br />
              Je déchire en{" "}
              <i>
                <b className="purple">JavaScript, PHP et JAVA,</b>
              </i>{" "}
              mon flow est impeccable, mec, j'te le dis sans détour.
              <br />
              <br />
              Création, analyse, prod' de contenu web et mobile, ça me chauffe,
              mec, ça m'fait palpiter. &nbsp;
              <b className="purple">web et mobile</b>
              <br />
              <br />
              J'représente <b className="purple">Node.js</b> et les frameworks
              modernes, t'as capté ? <b className="purple">React.js</b>, c'est
              mon style, j'fais le taf.
              <br />
              <br />
              Et ouais, j'maîtrise aussi <b className="purple">React Native, Android et iOS,</b> checke mon
              parcours, c'est du solide, mec, pas d'embrouilles.
              vu mon cursus académique
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
