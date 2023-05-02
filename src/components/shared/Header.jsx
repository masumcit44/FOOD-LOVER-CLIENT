import React from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="mt-2  ">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="">
        <Container className="">
          <Navbar.Brand href="#home" className="fw-bold fs-2 ">Food Lover</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex gap-5">
              <Link to="/" className="text-decoration-none text-dark fw-bold fs-6">Home</Link>
              <Link to="/blog" className="text-decoration-none text-dark fw-bold fs-6">Blog</Link>
              <Link to="/login" className="text-decoration-none text-dark fw-bold fs-6">Login</Link>
              <Link to="/register" className="text-decoration-none text-dark fw-bold fs-6">Sign Up</Link>
            </Nav>
            <Nav>
              <FaUserAlt></FaUserAlt>
              <Link to="\login">
              <Button variant="dark">Login</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
