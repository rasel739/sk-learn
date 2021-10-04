import React from 'react';
import './JoinTody.css'
import { Card, Container,Button } from 'react-bootstrap';

const JoinToday = () => {
    return (
      <Container fluid className="pb-5">
        <Container>
          <Card className="join__card">
            <Card.Body>
              <Card.Title className="join__title">
                Select the best from various online courses.
              </Card.Title>
              <Card.Text>
                Our online video courses give you the freedom to learn remotely,
                and our experts will guide you properly.
              </Card.Text>
              <Button variant="danger">Join Today</Button>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    );
};

export default JoinToday;