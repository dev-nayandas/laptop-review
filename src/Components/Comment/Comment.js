import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Comment = (props) => {
    const {name, id, img, rating, review } = props.comment
    return (
        <div>
            <CardGroup className='mb-5'>
  
  <Card>
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {review}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Rating:{rating}</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
    );
};

export default Comment;