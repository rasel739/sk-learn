import React from 'react';
import { Col, Container, Row,Button, ListGroup } from 'react-bootstrap';
import './StartLearn.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import StartImage from './img/start-learn-2.jpg'


const StartLearn = () => {

     const angleIcon = <FontAwesomeIcon icon={faAngleDoubleRight} />;
    return (
      <Container fluid className=" bg-light pt-5 pb-5">
        <Container>
          <Row>
            <Col xs={6}>
              <div className="start-content">
                <h1>Get more close with your courses.</h1>
                <p>
                  We provide a wide range of courses for the different sectors
                  you can choose from, which suits you perfectly
                </p>
              </div>
              <ListGroup className="border-0 bg-light">
                <ListGroup.Item className="list__item border-0 bg-light">
                  <span className="text-primary me-2">{angleIcon}</span>Detail
                  description of each course
                </ListGroup.Item>
                <ListGroup.Item className="list__item border-0 bg-light">
                  <span className="text-primary me-2">{angleIcon}</span>Easy to
                  understand language
                </ListGroup.Item>
                <ListGroup.Item className="list__item border-0 bg-light">
                  <span className="text-primary me-2">{angleIcon}</span> Simple
                  and easy to learn courses.
                </ListGroup.Item>
              </ListGroup>
              <Button className="bg-danger start-btn mt-5" size="lg">
                Start Learning Now
              </Button>
            </Col>
            <Col xs={6}>
              <div className="">
                <img className="img-fluid" src={StartImage} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
};

export default StartLearn;