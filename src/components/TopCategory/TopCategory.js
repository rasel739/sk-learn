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
          <div className="category d-flex pb-5">
            <h2>Choice favourite course from top category</h2>
            <Button variant="danger" size="lg">
              <NavLink to="/courses" className="see-all"> See All Categories</NavLink>
            </Button>
          </div>
          <Row xs={1} md={4} className="g-4">
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