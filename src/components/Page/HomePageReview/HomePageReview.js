import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './HomePageReview.css'

const HomePageReview = ({ review }) => {
  const {name,img,picture,reviews,reviews_des}=review
 
  return (
    <div>
      <Card className="review-container">
        <Card.Img variant="top" height={120} src={picture} />
        <Card.Body>
          <Card.Title>Name : {name}</Card.Title>
          <span>
            Review : <span className="review-color">{reviews}</span>
          </span>
          <Card.Text>{reviews_des}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <img src={img} alt="" />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default HomePageReview;