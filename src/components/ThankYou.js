import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

import 'animate.css';
import headerImg from "../assets/img/header-img.svg";

export const ThankYou = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
  <section className="banner">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <button onClick={handleClick}>
                  <span className="tagline">Back to home page</span>
                </button>
                <h1>{`Thank you for your submission :)`}</h1>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
};
