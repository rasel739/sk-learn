import React from 'react';
import './CoursesItem.css';
import { Card, CardGroup } from "react-bootstrap";
import Rating from "react-rating";
const CoursesItem = (props) => {

    const { name, star, image, view, price, delPrice } = props.courses;

    return (
      <CardGroup>
        <Card className="p-3 full-card">
          <div className="card-main">
            <Card.Img className="top card-img" src={image} />
          </div>
          <Card.Body>
            <Card.Title className="card__title">{name}</Card.Title>
            <div className=" d-flex justify-content-between">
              <Rating
                initialRating={star}
                emptySymbol="far fa-star text-warning"
                fullSymbol="fa fa-star text-warning"
                readonly
              />

              <p>
                <i class="fas fa-eye text-danger"></i>
                {view}
              </p>
            </div>
            <Card.Text>
              <div className="d-flex align-items-center">
                <p> Price:</p>
                <del className="text-danger me-1 ms-1">
                  <p>${delPrice}</p>
                </del>
                <p className="text-success">${price}</p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    );
};

export default CoursesItem;