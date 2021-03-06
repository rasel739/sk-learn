import React from 'react';
import './Courses.css';
import {  Container, FormControl, InputGroup, Row, Spinner } from "react-bootstrap";
import useCourse from '../Hook/useCourse';
import CoursesItem from '../CoursesItem/CoursesItem';
const Courses = () => {
    const [course] = useCourse()
    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
          <div className="category d-flex pb-5">
            <h2>All Course</h2>
          </div>
          <div className="col-12 col-md-6 mb-5">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search Your Course"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text className="btn-bg text-dark" id="basic-addon2">
                Search
              </InputGroup.Text>
            </InputGroup>
          </div>
          {course.length === 0 ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <Row xs={1} md={3} className="g-4">
              {course?.map((course) => (
                <CoursesItem courses={course} key={course.id}></CoursesItem>
              ))}
            </Row>
          )}
        </Container>
      </Container>
    );
};

export default Courses;