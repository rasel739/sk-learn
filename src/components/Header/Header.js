import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import banner from './img/banner-img.png'

const Header = () => {

    const searchIcon = <FontAwesomeIcon icon={faSearch} />;
    return (
      <Container fluid className="header bg-light pt-5 pb-5">
        <Container>
          <Row>
            <Col xs={6}>
              <div className="header-content">
                <h1>Learn more and make success the result of perfection.</h1>
                <p>
                  Pick from over 100,000 online video courses with new additions
                  published every month.
                </p>
              </div>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search Your Need To Course"
                  aria-label="Search Your Need To Course"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text className="bg-danger search-btn text-white" id="basic-addon2">
                  {searchIcon}
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col xs={6}>
              <div className="">
                <img className="img-fluid" src={banner} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
};

export default Header;