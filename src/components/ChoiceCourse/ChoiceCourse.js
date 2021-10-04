import React from 'react';
import './ChoiceCourse.css'
import { Button, Container, Row } from "react-bootstrap";
import useCourse from '../Hook/useCourse';
import ChoiceCourseItem from '../ChoiceCourseItem/ChoiceCourseItem';
import { NavLink } from 'react-router-dom';

const ChoiceCourse = () => {
  const [course] = useCourse()
  

    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
          <div className="category d-flex pb-5">
            <h2>Get choice of your course</h2>
            <Button variant="danger" size="lg">
              <NavLink to="/courses" className="course-view"> View All Courses</NavLink>
            </Button>
          </div>
          <Row xs={1} md={3} className="g-4">
            {course?.slice(0, 3).map((course) => (
              <ChoiceCourseItem
                courses={course}
                key={course.id}
              ></ChoiceCourseItem>
            ))}
          </Row>
        </Container>
      </Container>
    );
};

export default ChoiceCourse;