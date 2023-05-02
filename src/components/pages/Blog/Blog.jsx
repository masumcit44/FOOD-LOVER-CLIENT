import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Blog = () => {
  console.log("hi");
  return (
    <Container className="fs-4 my-5">
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
          Node.js is a server-side runtime environment for js on the other hand Express.js is a web application framework built on top of Node.js.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
          What is a custom hook, and why will you create a custom hook?
          </Accordion.Header>
          <Accordion.Body>
          A custom hook is a JavaScript function that allows you to reuse stateful logic across multiple components in a React application. instead of using same logic  multiple component, we can encapsulate it into a custom hook, which can be used by any component that needs that functionality.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Blog;
