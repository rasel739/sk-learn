import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const TopCategoryItem = (props) => {

    const { name, information, image } = props.category;
    return (
      <CardGroup>
        <Card>
          <div className="h-50 bg-dark mb-2">
            <Card.Img variant="top" src={image} />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{information}</Card.Text>
          </Card.Body>
         
        </Card>
      </CardGroup>
    );
};

export default TopCategoryItem;