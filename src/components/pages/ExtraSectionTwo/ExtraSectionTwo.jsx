import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./ExtraSectionTwo.css";
const ExtraSectionTwo = () => {
  return (
    <div className=" ">
      <h4 className="text-center my-3">
        Leave here name and email to get update food receipe
      </h4>
      <div className="border border-1 border-danger rounded p-5 ExtraSectionTwo-bg ">
        <div className="  my-auto   d-flex justify-content-center align-items-center ">
          <Form.Group className=" col-6 " controlId="">
            <Form.Control
              className="border-primary text-dark fw-bold w-75 mx-auto p-2 "
              name="text"
              type="text"
              placeholder="Name"
            />
          </Form.Group>

          
          <Form.Group className=" col-5" controlId="">
            <Form.Control
              className="border-primary fw-bold mx-auto p-2 w-75"
              name="text"
              type="email"
              placeholder="Your Email"
            />
          </Form.Group>
          <Button className="submit-btn col-1 " variant="danger">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionTwo;
