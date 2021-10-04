import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import studentOne from './img/student-one.png'
import studentTwo from './img/student-two.png'
import './StudentSay.css';

const StudentSay = () => {
    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
          <div className="text-dark mb-5">
            <h1>What our students have to say</h1>
          </div>
          <Row>
            <Col xs={6}>
              <div className="student">
                <div className="student-body">
                  <div className="d-flex student-image">
                    <img className="img-fluid " src={studentOne} alt="" />
                    <h6>Bernadette</h6>
                  </div>
                  <div>
                    <p className="border-bottom">Student</p>
                  </div>
                </div>
                <div className="student-info">
                  <p>
                    Your child is able to take responsibility for her own
                    actions both in and out of the classroom. She often checks
                    her agenda and day planner to make sure she has all of the
                    necessary materials to complete work at home before leaving.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="student">
                <div className="student-body">
                  <div className="d-flex student-image">
                    <img className="img-fluid " src={studentTwo} alt="" />
                    <h6>Caroline</h6>
                  </div>
                  <div>
                    <p className="border-bottom">Student</p>
                  </div>
                </div>
                <div className="student-info">
                  <p>
                    Comments that identify what students did well, what
                    improvements they need to make, and how to make those
                    improvements, provided with sensitivity to important
                    contextual elements, can guide students on their pathways to
                    learning success and ensure that all learn excellently.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
};

export default StudentSay;