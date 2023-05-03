import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { AuthContext } from "../../provider/AuthProvider";
import './Header.css'
import { SiFoodpanda } from "react-icons/si";
const Header = () => {
  const { user , handleSignOut } = useContext(AuthContext);
  console.log(user?.photoURL);
  return (
    <div className="my-2  header-container   ">
      <Navbar
        collapseOnSelect
        expand="lg"

        variant="light"
        className=""
      >
        <Container className="">
          <SiFoodpanda className="fs-2 panda-color me-2"></SiFoodpanda>
          <Navbar.Brand href="#home" className="fw-bold food-color fs-2 vibrate ">
            Food <span className="lover-color">Lover</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex gap-5 fade-in my-nav ">
              <ActiveLink to="/" className="">
                Home
              </ActiveLink>
              <ActiveLink to="/blog">Blog</ActiveLink>
              <ActiveLink to="/login">Login</ActiveLink>
              <ActiveLink
                to="/register"
                className="text-decoration-none text-dark fw-bold fs-6"
              >
                Sign Up
              </ActiveLink>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <img className="rounded-circle header-img" src={user?.photoURL} alt="no-image"   title={user.displayName} />

                  <Button onClick={handleSignOut} className="ms-2" variant="warning">Log Out</Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="warning">Login</Button>
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
