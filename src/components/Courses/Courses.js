import React from 'react';
import './Courses.css';
import { Button, Container, FormControl, InputGroup, Row } from "react-bootstrap";
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
          <div className="col-6 mb-5">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search Your Course"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text className="bg-danger text-white" id="basic-addon2">Search</InputGroup.Text>
            </InputGroup>
          </div>
          <Row xs={1} md={3} className="g-4">
            {course?.map((course) => (
              <CoursesItem courses={course} key={course.id}></CoursesItem>
            ))}
          </Row>
        </Container>
      </Container>
    );
};

export default Courses;