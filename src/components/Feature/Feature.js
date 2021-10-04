import React from 'react';
import { Card, CardGroup, Col, Container, Row,Button } from 'react-bootstrap';
import './Feature.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye, faClock, faPlay } from "@fortawesome/free-solid-svg-icons";
import Rating from 'react-rating'
import img from './img/adobe-cc.jfif'

const Feature = () => {
     const StarIcon = <FontAwesomeIcon icon={faStar} />;
     const eyeIcon = <FontAwesomeIcon icon={faEye} />;
     const clockIcon = <FontAwesomeIcon icon={faClock} />;
     const playIcon = <FontAwesomeIcon icon={faPlay} />;
    
     
    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
          <Row>
            <Col xs={8}>
              <div className="feature-content">
                <h2>Learn Adobe CC with our Masterclass</h2>
                <p>
                  In this Adobe CC Masterclass, you will learn Photoshop,
                  Illustrator, Adobe XD, InDesign and more. Register now.
                </p>
              </div>
              <div className="feture-icon d-flex">
                <div className="icon-div">
                  <span className="icon">{StarIcon}</span>
                  <span className="text">4.5 (1,348 ratings)</span>
                </div>
                <div className="icon-div">
                  <span className="icon">{eyeIcon}</span>
                  <span className="text">Enrolled 45 students</span>
                </div>
                <div className="icon-div">
                  <span className="icon">{clockIcon}</span>
                  <span className="text">Duration 10 week</span>
                </div>
                <div className="icon-div">
                  <span className="icon">{playIcon}</span>
                  <span className="text">36 Lession</span>
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <CardGroup>
                <Card className="p-3 full-card">
                  <div className="card-main">
                    <Card.Img className="top card-img" src={img} />
                  </div>
                  <Card.Body>
                    <Card.Title className="card__title">
                      Learn Adobe CC
                    </Card.Title>
                    <div className=" d-flex justify-content-between">
                      <Rating
                        initialRating={4.5}
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fa fa-star text-warning"
                        readonly
                      />
                    </div>
                    <Card.Text>
                      <div className="d-flex align-items-center">
                        <p> Price:</p>
                        <del className="text-danger me-1 ms-1">
                          <p>$ 99.99</p>
                        </del>
                        <p className="text-success">$ 50</p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <div className="d-grid gap-2">
                    <Button variant="danger" size="lg">
                      Buy Now
                    </Button>
                  </div>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </Container>
    );
};

export default Feature;