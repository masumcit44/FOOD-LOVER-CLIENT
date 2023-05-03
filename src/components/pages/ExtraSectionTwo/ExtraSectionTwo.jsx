import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./ExtraSectionTwo.css";
const ExtraSectionTwo = () => {
  return (
    <div className=" container ">
      <h4 className="extra-section-heading my-3">
        Leave here name and email to get update food receipe
      </h4>
      <div className="border border-1 border-danger rounded p-5 ExtraSectionTwo-bg ">
        <div className="  my-auto  d-md-flex justify-content-center align-items-center ">
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
          <Button className="extra-2-btn col-1 px-3" variant="warning">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionTwo;
