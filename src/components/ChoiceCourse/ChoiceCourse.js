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
          <div className="category d-flex pb-5 row">
            <div className="col-12 col-md-12 col-lg-9">
              <h2>Get choice of your course</h2>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
              <Button className="btn-bg " size="lg">
                <NavLink to="/courses" className="course-view text-dark">
                  {" "}
                  View All Courses
                </NavLink>
              </Button>
            </div>
          </div>
          <Row xs={1} md={2} lg={4} className="g-4">
            {course?.slice(0, 4).map((course) => (
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