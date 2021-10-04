import React from 'react';
import { Container, Form,Button } from 'react-bootstrap';

const Contact = () => {
    return (
      <Container fluid className="pt-5 pb-5 ">
        <Container>
          <div className="w-75 mx-auto">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Write Your Massage</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="danger" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Container>
      </Container>
    );
};

export default Contact;