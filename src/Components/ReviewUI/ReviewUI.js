import React from 'react';
import { CardGroup,Card } from 'react-bootstrap';


const ReviewUI = (props) => {
    const {name, id, img, rating, review} = props.customer
    return (
        <CardGroup className=''>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {review}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className=" text-danger">{rating}</small>
    </Card.Footer>
  </Card>
 
</CardGroup>
    );
};

export default ReviewUI;