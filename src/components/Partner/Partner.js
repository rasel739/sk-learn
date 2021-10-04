import React from 'react';
import { Container } from 'react-bootstrap';
import './Partner.css';
import imageOne from './img/partner-one.webp'
import imageTwo from './img/partner-two.webp'
import imageThree from './img/partner-three.webp'
import imageFour from './img/partner-four.webp'

const Partner = () => {
    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
          <div className="partner-title">
            <h2>Trusted by our awesome partners</h2>
          </div>
          <div className="partner-img">
            <img src={imageOne} alt="" />
            <img src={imageTwo} alt="" />
            <img src={imageThree} alt="" />
            <img src={imageFour} alt="" />
          </div>
        </Container>
      </Container>
    );
};

export default Partner;