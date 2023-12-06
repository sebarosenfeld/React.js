import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="secondary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
          <NavLink className="text-dark" to="/">Home</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className='ms-4 me-2 text-dark' to="category/pañales">Pañales</NavLink>
            <NavLink className="text-dark" to="category/oxigenoterapia">Oxigenoterapia</NavLink>
          </Nav>
          <CartWidget />
        </Container>
    </Navbar>
  );
};
