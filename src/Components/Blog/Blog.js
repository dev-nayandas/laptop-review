import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Card className='ms-5 mt-5' style={{ width: '50rem' }}>
            <Card.Header className='fs-1'>What is context api?</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>1. Context api is a way send data to send data to a specific level but not like every level as props.</ListGroup.Item>
                <ListGroup.Item>2.Using context, we can avoid passing props through intermediate elements</ListGroup.Item>
                <ListGroup.Item>3. Context api is mainly  used when some data needs to be accessible by many components at different  levels</ListGroup.Item>
                <ListGroup.Item>4. Context is the alternative of props drilling</ListGroup.Item>
                <ListGroup.Item>5.The Context API can be used to share data with different  components, without having to pass data by props manually.</ListGroup.Item>
                
            </ListGroup>
            </Card>

            <Card className='ms-5 mt-5' style={{ width: '50rem' }}>
            <Card.Header className='fs-1'>What is Symentic tags?</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>1. Symentic tags means those tags which express clearly  the types of the element contains .</ListGroup.Item>
                <ListGroup.Item>2. Symentic tags is easily understandable by human to know the types of elements will be.</ListGroup.Item>
                <ListGroup.Item>Name of some symentic tags are article, aside, header, footer, nav, main, section</ListGroup.Item>
                <ListGroup.Item>4. By using semantic tags,  the browser understand the meaning of the conten</ListGroup.Item>
                <ListGroup.Item>5.One of the most important features of HTML5 is its semantics.</ListGroup.Item>
                
            </ListGroup>
            </Card>
        </div>

        
    );
};

export default Blog;