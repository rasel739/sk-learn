import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './TopCategoryItem.css'
const TopCategoryItem = (props) => {

    const { name, information, image } = props.category;
    return (
      <CardGroup>
        <Card className="card__bg">
          <div className="h-50 bg-dark mb-2">
            <Card.Img variant="top" src={image} />
          </div>
          <Card.Body>
            <Card.Title className="card__name">{name}</Card.Title>
            <Card.Text className="card__infor">{information}</Card.Text>
          </Card.Body>
         
        </Card>
      </CardGroup>
    );
};

export default TopCategoryItem;