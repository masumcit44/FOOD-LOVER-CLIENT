import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { AuthContext } from "../../provider/AuthProvider";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Pdf from "react-to-pdf";
import './Blog.css'
const ref = React.createRef();
const Blog = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const options = {
    orientation: "landscape",
  };
  return (
    <Container ref={ref} className="fs-4 mt-2 blog-container ">
      <Navbar
        collapseOnSelect
        expand="lg"
    
        variant="light"
        className=""
      >
        <Container className="header-container mb-2">
          <Navbar.Brand href="#home" className="fw-bold fs-2 ">
            Food Lover
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex gap-5 my-nav ">
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
              <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
                {({ toPdf }) => (
                  <Button onClick={toPdf} variant="warning">
                    <FaCloudDownloadAlt className="me-2 fs-5 text-info"></FaCloudDownloadAlt>
                    Download
                  </Button>
                )}
              </Pdf>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <img
                    className="rounded-circle header-img"
                    src={user.photoURL}
                    alt=""
                  />

                  <Button
                    onClick={handleSignOut}
                    className="ms-2"
                    variant="warning"
                  >
                    Log Out
                  </Button>
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
      <div>
        <h4 className="text-center mb-4">This is Blog page</h4>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="">
              Tell us the differences between uncontrolled and controlled
              components
            </Accordion.Header>
            <Accordion.Body>
              controlled components have their state and behavior controlled by
              the parent component . on the other hand , Uncontrolled components
              Store their own state internally using refs
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How to validate React props using PropTypes
            </Accordion.Header>
            <Accordion.Body>
              Steps: 1.Import PropTypes 2.Define PropTypes 3.Set Validator Types
              4.Specify Required Props 5.Validate Object Shape
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Tell us the difference between nodejs and express js.
            </Accordion.Header>
            <Accordion.Body>
              Node.js is a server-side runtime environment for js on the other
              hand Express.js is a web application framework built on top of
              Node.js.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What is a custom hook, and why will you create a custom hook?
            </Accordion.Header>
            <Accordion.Body>
              A custom hook is a JavaScript function that allows you to reuse
              stateful logic across multiple components in a React application.
              instead of using same logic multiple component, we can encapsulate
              it into a custom hook, which can be used by any component that
              needs that functionality.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  );
};

export default Blog;
