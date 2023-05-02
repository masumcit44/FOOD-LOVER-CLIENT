import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithubAlt } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
const Login = () => {
  const { logIn, githubSignUp  , googleSignUp} = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation()
  const navigate = useNavigate()
  const from  = location?.state?.from?.pathname || '/'
  console.log(from);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    logIn(email,password)
      .then((result) => {
        navigate(from,{replace:true})
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };

  const handleGithubLogin = () => {
    githubSignUp()
      .then((result) => {
        navigate(from,{replace:true})
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };
  const handleGoogleLogin = () => {
    googleSignUp()
      .then((result) => {
        navigate(from,{replace:true})
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };
  
  return (
    <div className="w-50 mx-auto  ">
      <Form
        onSubmit={handleLogin}
        className="mt-5 p-5 border border-2 rounded bg-light"
      >
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
        <p className="text-center text-danger  fw-bold mt-3 ">{error}</p>
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
        <Button onClick={handleGoogleLogin}
          variant="outline-warning"
          className=" col-5  bg-danger  text-dark fw-bold mt-2  "
        >
          <FaGoogle className="me-2 my-auto"></FaGoogle>
          Login With Google
        </Button>
        <p className="col-2 text-center my-auto fw-bold text-dark fs-5"></p>
        <Button
          onClick={handleGithubLogin}
          variant="outline-warning"
          className=" col-5  bg-danger  text-dark fw-bold mt-2  "
        >
          <FaGithubAlt className="me-2 my-auto"></FaGithubAlt>
          Login With Github
        </Button>
      </div>
    </div>
  );
};

export default Login;
