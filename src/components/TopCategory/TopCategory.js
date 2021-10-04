import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useCategory from '../Hook/useCategory';
import TopCategoryItem from '../TopCategoryItem/TopCategoryItem';
import './TopCategory.css';

const TopCategory = () => {

    const [category] = useCategory();

    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
          <div className="category d-flex pb-5 row">
            <div className="col-12 col-md-12 col-lg-9">
              <h2>Choice favourite course from top category</h2>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
              <Button className="btn-bg" size="lg">
                <NavLink to="/courses" className="see-all text-dark">
                  See All Categories
                </NavLink>
              </Button>
            </div>
          </div>
          <Row xs={1} md={2} lg={4} className="g-4">
            {category.map((category) => (
              <TopCategoryItem
                category={category}
                key={category.id}
              ></TopCategoryItem>
            ))}
          </Row>
        </Container>
      </Container>
    );
};

export default TopCategory;