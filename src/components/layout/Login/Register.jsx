
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithubAlt } from "react-icons/fa";
import { useState } from "react";
const Register = () => {
    const [error,setError] = useState("")
    const handleRegister = (event) =>{
        event.preventDefault()
        
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const url = form.photo.value;
        console.log(name,email,password,url,confirm);
        setError("")
        if(password.length<6  && confirm.length<6){
            setError("password less than six character")
            console.log(error);
            return
        }
        else if(password !== confirm){
            setError("password does't match")
            return
        }
        console.log(error);
    }
    return (
        <div className="w-50 mx-auto  ">
      <Form onSubmit={handleRegister} className="mt-5 p-5 border border-2 rounded bg-light">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className="fw-bold fs-5">Enter Your Name</Form.Label>
          <Form.Control
            className="border-primary text-dark fw-bold p-2"
            name="name"
            type="text"
            placeholder="Full Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold fs-5">Email address</Form.Label>
          <Form.Control
            className="border-primary text-dark fw-bold p-2"
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold fs-5">Password</Form.Label>
          <Form.Control
            className="border-primary fw-bold p-2"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirm">
          <Form.Label className="fw-bold fs-5">Confirm Password</Form.Label>
          <Form.Control
            className="border-primary fw-bold p-2"
            name="confirm"
            type="password"
            placeholder="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="url">
          <Form.Label className="fw-bold fs-5">Photo URL</Form.Label>
          <Form.Control
            className="border-primary fw-bold p-2"
            name="photo"
            type="text"
            placeholder="Url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            className="fw-bold"
            label="Accepts terms and condition"
          />
        </Form.Group>
        <p className="text-center text-danger  fw-bold mt-3 ">
          {error}
        </p>
        <Button variant="warning" type="submit" className="w-100 fw-bold mt-2">
          Submit
        </Button>
        <p className="text-center  fw-bold mt-3 ">
          Don't have an account? please{" "}
          <Link className="" to="/register">
            Register
          </Link>{" "}
        </p>
      </Form>
      <div className=" row justify-content-center ">
        <div className=" border-2 border-bottom border-danger col-5"></div>
        <p className="col-2 text-center my-auto fw-bold text-dark fs-5">Or</p>
        <div className=" border-2  border-bottom  border-danger col-5"></div>
      </div>
      <div className="row mt-2 mb-4 ">
        <Button variant="outline-warning" className=" col-5  bg-danger  text-dark fw-bold mt-2  ">
          <FaGoogle className="me-2 my-auto"></FaGoogle>
          Login With Google
        </Button>
        <p className="col-2 text-center my-auto fw-bold text-dark fs-5"></p>
        <Button variant="outline-warning" className=" col-5  bg-danger  text-dark fw-bold mt-2  ">
          <FaGithubAlt className="me-2 my-auto"></FaGithubAlt>
          Login With Github
        </Button>
        
      </div>
    </div>
    );
};

export default Register;