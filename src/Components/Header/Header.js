import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="Home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Reviews">Reviews</Nav.Link>
            <Nav.Link href="Dasboard">Dasboard</Nav.Link>
            <Nav.Link href="Blog">Blog</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      
        
      </>
    );
};

export default Header;