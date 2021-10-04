import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Partner.css';
import imageOne from './img/partner-one.webp'
import imageTwo from './img/partner-two.webp'
import imageThree from './img/partner-three.webp'
import imageFour from './img/partner-four.webp'

const Partner = () => {
    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <div className="partner-title">
                <h2>Trusted by our awesome partners</h2>
              </div>
            </Col>
            <Col xs={12} md={12}>
              <div className="partner-img">
                <img src={imageOne} alt="" />
                <img src={imageTwo} alt="" />
                <img src={imageThree} alt="" />
                <img src={imageFour} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
};

export default Partner;