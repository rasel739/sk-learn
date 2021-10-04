import React from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './About.css';
import about from './img/about.png'
const About = () => {
    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
          <div className="about-title">
            <h1>About Us</h1>
          </div>
          <Row>
            <Col xs={6}>
              <div className="about-content">
                <p className="">
                  This is often referred to as “unpacking” the standards. When
                  teachers have the opportunity to identify the content and
                  skills in a focused and thoughtful way, it allows them to more
                  deeply understand the standards in order to develop
                  assessments that truly reflect understanding, design learning
                  activities that will best prepare students for success! When
                  identifying the content, the teacher should review the
                  standards to see what content-information is included. For
                  example, some standards may include vocabulary words, key
                  concepts and ideas. The content can provide an opportunity to
                  pull out all of this information into a focused list of
                  everything students need to know. One easy way to identify
                  these is to highlight or circle the key nouns in the
                  standards.
                </p>
              </div>
              <NavLink to="/contact">
                <Button className="bg-danger about-btn" size="lg">
                  Send Email
                </Button>
              </NavLink>
            </Col>
                    <Col xs={6}>
                        <div className="">
                            <img src={about} alt="" />
                        </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
};

export default About;