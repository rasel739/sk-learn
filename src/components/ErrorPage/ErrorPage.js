import React from 'react';
import { Container,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './ErrorPage.css';


const ErrorPage = () => {
    return (
      <Container fluid className="pt-5 pb-5 bg-light error">
        <div className="error-div"></div>
        <Container>
          <div className="error-page">
            <h1>OoPs!</h1>
            <h5>
              <span className="text-danger">4O4</span>-PAGE NOT FOUND
            </h5>
            <NavLink to="/home">
              <Button variant="primary" size="lg">
                Go to Home Page
              </Button>
            </NavLink>
          </div>
        </Container>
      </Container>
    );
};

export default ErrorPage;