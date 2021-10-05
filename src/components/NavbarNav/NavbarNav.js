import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import './NavbarNav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart,faSearch} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import LoginFrom from '../LoginFrom/LoginFrom';



const NavbarNav = () => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
    const searchIcon = <FontAwesomeIcon icon={faSearch} />;
    
    return (
      <Container fluid className="navbar-bg pb-5">
        <Container>
          <Navbar className="navbar-bg" expand="lg" fixed="top">
            <Container fluid>
              <Navbar.Brand href="#">
                <span className="text-success sk">SK</span>
                <span className="learn">learn</span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link>
                    <NavLink
                      to="/home"
                      className="nav-unselected"
                      activeClassName="selected"
                    >
                      Home
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/courses"
                      className="nav-unselected"
                      activeClassName="selected"
                    >
                      Courses
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/feature"
                      className="nav-unselected"
                      activeClassName="selected"
                    >
                      Feature
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/contact"
                      className="nav-unselected"
                      activeClassName="selected"
                    >
                      Contact
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/about"
                      className="nav-unselected"
                      activeClassName="selected"
                    >
                      About
                    </NavLink>
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Button className="btn-bg text-dark">{searchIcon}</Button>
                  <Button variant="white ms-2 ">{cartIcon}</Button>
                  <LoginFrom></LoginFrom>
                  <Button variant="primary ms-2">Login</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </Container>
    );
};

export default NavbarNav;