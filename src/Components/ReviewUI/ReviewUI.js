import React from 'react';
import { CardGroup,Card, } from 'react-bootstrap';
import { Image } from 'react-bootstrap';


const ReviewUI = (props) => {
    const {name, id, img, rating, review} = props.customer
    return (
        <CardGroup className='mt-5 p-5'>
  <Card>
    {/* <Card.Img className='' variant="top" src="h" /> */}
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {review}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <h4> Rating : <small className=" text-danger">{rating}</small></h4>
    </Card.Footer>
  </Card>
 
</CardGroup>
    );
};

export default ReviewUI;